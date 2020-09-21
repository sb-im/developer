# Lua api

## Params

**Lua version is 5.1**

For Example:

```lua
function main(plan)
end
```

The function `main()` params is `plan`

## Object plan

```lua
plan:CleanDialog()

ask_status = {
  name = "确定要执行任务吗？",
  buttons = {
    {name = "不，手滑点错了", message = 'no', level = 'primary'},
    {name = "是的，我要执行", message = 'yes', level = 'danger'},
  }
}
plan:ToggleDialog(ask_status)

if plan:Gets() ~= "yes" then
  print("Task canceled")
  return
end
plan:CleanDialog()

plan:Puts("YYYYYYYYYY")

print(plan:FileUrl("file"))
```

### ToggleDialog(table)

Topic: `plans/:id/dialog`

Send a confirmation form

[params table reference](https://developer.sb.im/#/mqtt?id=dialog)

### CleanDialog()

Topic: `plans/:id/dialog`

Close form

### Gets()

get `plans/:id/term` message

### Puts(string)

put `plans/:id/term` message

### nodeID

> The id of this current plan need `node`

## Class node

```lua
local drone_id = plan.nodeID
local drone = NewNode(drone_id)

local depot_id = drone:GetID()
local depot = NewNode(depot_id)

xpcall(function()
  local promise = depot:AsyncCall("wait_to_boot_finish")
  depot:SyncCall("power_on_drone")
  depot:SyncCall("power_on_remote")

  -- Block: get rpc result
  local result = promise()

end, function()
  drone:SyncCall("emergency_stop")
end)

local data = drone:GetMsg("battery")

```

### SyncCall(string [, table]) table

> Sync jsonrpc call

### AsyncCall(string [, table]) function() table

> Async jsonrpc call

return a function

### GetID([string]) string

default params: `link_id`

`GetID() == GetID("link_id")`

### GetStatus() table

`nodes/:id/status`

### GetMsg(string) table

`nodes/:id/msg/+`

## sleep(string)

```lua
sleep("1ms")
```

such as "300ms", "-1.5h" or "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h" [golang time#ParseDuration](https://golang.org/pkg/time/#ParseDuration)

