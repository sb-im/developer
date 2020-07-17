# MQTT Topic

## Plan

### Term

Topic: `plans/:id/term`

> Any data

### Dialog

Topic: `plans/:id/dialog`

Field           | Type   | Description
--------------- | ------ | -----------
name            | string | A title
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
inputs          | array  | Opt: Input box
inputs.name     | string | Show label
inputs.message  | string | Opt: Default value
inputs.level    | string | Opt: `levelEnum`

`levelEnum`: `primary`, `success`, `info`, `warning`, `danger`

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
  ],
  "inputs": [
    {"name": "Confirm", "message": "confirm", "level": "primary"}
  ]
}
```

Example 2: Ask Input

```json
{
  "name": "Input Please.",
  "inputs": [
    {"name": "Hight 'm'", "message": "30", "level": "primary"},
    {"name": "Speed 'm/s'", "message": "5", "level": "primary"}
  ]
}
```

