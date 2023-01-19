# Drone

## rpc

### startmission

```json
{"jsonrpc":"2.0","method":"startmission","id":"sdwc-3"}
```

### gimbal_ctl

```json
{"jsonrpc":"2.0","method":"gimbal_ctl","params":{"yaw":0,"pitch":-90},"id":"sdwc-3"}
```

### cam

take photo

```json
{"jsonrpc":"2.0","method":"cam_photo","id":"sdwc-3"}
```

record

```json
{"jsonrpc":"2.0","method":"cam_record","id":"sdwc-3"}
{"jsonrpc":"2.0","method":"cam_record_stop","id":"sdwc-3"}
```

### mode

```json
{"jsonrpc":"2.0","method":"mode_pause","id":"sdwc-3"}
{"jsonrpc":"2.0","method":"mode_resume","id":"sdwc-3"}
```

Emergency stop

```json
{"jsonrpc":"2.0","method":"mode_brake","id":"sdwc-3"}
```

```json
{"jsonrpc":"2.0","method":"mode_rtl","id":"sdwc-3"}
```

sb.im Custom Edition mode land

```json
{"jsonrpc":"2.0","method":"mode_sbland","id":"sdwc-3"}
```

### camera

```json
{"jsonrpc":"2.0","method":"camera_zoom","params":{"length":2},"id":"sdwc-3"}
{"jsonrpc":"2.0","method":"camera_focus","params":{"x":0.5,"y":0.5},"id":"sdwc-3"}
```

Go to location

```json
{"jsonrpc":"2.0","method":"set_target","params":{"lat":0,"lng":0,"height":0},"id":"sdwc-3"}
```

### stick

```json
{"jsonrpc":"2.0","method":"stick_ctl","params":{"x":0,"y":0,"z":0,"r":0},"id":"sdwc-3"}
```

