# MQTT Topic

## Node

### NodeStatus

Topic: `nodes/:id/status`

Field           | Type   | Description
--------------- | ------ | -----------
msg             | string | Node Status Enum: `online`, `offline`, `neterror`
status          | object |
status.lat      | string |
status.lng      | string |
status.alt      | string |

### NodeNetwork

Topic: `nodes/:id/network`

Field           | Type   | Description
--------------- | ------ | -----------
delay           | number | Network Delay [ms]
loss            | number | packet loss (0~100)%

## Plan

### PlanStatus

Topic: `plans/:id/status`

Field           | Type   | Description
--------------- | ------ | -----------
status          | string | Enum: `ready`, `error`, `protect`, `running`

### Term

Topic: `plans/:id/term`

> Any data

### Dialog

Topic: `plans/:id/dialog`

Field           | Type   | Description
--------------- | ------ | -----------
name            | string | Opt: A title
message         | string | Opt: A descriptive message
level           | string | Opt: `levelEnum`
items           | array  | Opt: Items
items.name      | string | Name
items.message   | string | Opt: A descriptive message
items.level     | string | Opt: `levelEnum`
buttons         | array  | Opt: Button Group
buttons.name    | string | Button name
buttons.message | string | Send message payload
buttons.level   | string | Opt: `levelEnum`

**levelEnum** : `primary`, `success`, `info`, `warning`, `danger`

Example 0: Clean Dialog

```json
{}
```

Example 1: Check Form

```json
{
  "name": "Checker ~",
  "message": "Not recommended",
  "level": "warning",
  "items": [
    {"name": "Check", "message": "check check", "level": "unkonw"},
    {"name": "Drone", "message": "ok", "level": "primary"},
    {"name": "Depot", "message": "ok", "level": "success"},
    {"name": "Weather: Wind speed", "message": "Strong wind", "level": "warning"},
    {"name": "Weather: Rain forecast", "message": "It is raining", "level": "danger"}
  ],
  "buttons": [
    {"name": "Cancel", "message": "cancel", "level": "primary"},
    {"name": "Confirm","message": "confirm", "level": "danger"}
  ]
}
```

Example 2: Ask Status

```json
{
  "name": "ARE YOU OK ?",
  "buttons": [
    {"name": "Fine, thank you.", "message": "fine", "level": "primary"},
    {"name": "I feel bad.", "message": "bad", "level": "danger"}
  ]
}
```

