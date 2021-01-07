# base

Built-in communication module

## jsonrpc2

### history

params:

Field | Type | Description
----- | ---- | -----------
topic | string | Topic
time  | string | such as "300ms", "-1.5h" or "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h" [golang time#ParseDuration](https://golang.org/pkg/time/#ParseDuration)

```json
{
  "jsonrpc":"2.0",
  "id":"sdwc.1-1553321035000",
  "method":"history",
  "params":{
    "topic":"msg/weather",
    "time": "10s"
  }
}
```

The `result[key]` , key is timestamp

```json
{
  "jsonrpc": "2.0",
  "id":"sdwc.1-1553321035000",
  "result":[
    {"1553321035": {"WD": 20, "WS": 5}},
    {"1553321034": {"WD": 10, "WS": 1}},
    {"1553321000": {"WD": 1, "WS": 1}}
  ]
}
```

