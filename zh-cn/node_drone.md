# Drone

## jsonrpc2

### 起飞

暂时没有单独的起飞命令，发送的是开始任务，默认会起飞并执行航线任务

```json
{"jsonrpc":"2.0","method":"startmission","id":"sdwc-3"}
```

### 旋转云台

```json
{"jsonrpc":"2.0","method":"gimbal_ctl","params":{"yaw":0,"pitch":-90},"id":"sdwc-3"}
```

### 拍照

```json
{"jsonrpc":"2.0","method":"cam_photo","id":"sdwc-3"}
```

### 录像

```json
{"jsonrpc":"2.0","method":"cam_record","id":"sdwc-3"}
{"jsonrpc":"2.0","method":"cam_record_stop","id":"sdwc-3"}
```

### 任务暂停/继续

```json
{"jsonrpc":"2.0","method":"mode_pause","id":"sdwc-3"}
{"jsonrpc":"2.0","method":"mode_resume","id":"sdwc-3"}
```

### 急停

```json
{"jsonrpc":"2.0","method":"mode_brake","id":"sdwc-3"}
```

### 自动返航

DJI官方的返航

```json
{"jsonrpc":"2.0","method":"mode_rtl","id":"sdwc-3"}
```

视觉引导精准降落，一般用这个

```json
{"jsonrpc":"2.0","method":"mode_sbland","id":"sdwc-3"}
```

### 定档变焦

```json
{"jsonrpc":"2.0","method":"camera_zoom","params":{"length":2},"id":"sdwc-3"}
```

### 定倍变焦

是调整对焦区域吗？

```json
{"jsonrpc":"2.0","method":"camera_focus","params":{"x":0.5,"y":0.5},"id":"sdwc-3"}
```

x,y = 0,0为对焦到屏幕最左上角
x,y = 1,1为对焦到屏幕最右下角

### 调整位置

前往特定位置

```json
{"jsonrpc":"2.0","method":"set_target","params":{"lat":0,"lng":0,"height":0},"id":"sdwc-3"}
```

其中height为相对起飞点高度

### 虚拟摇杆控制

```json
{"jsonrpc":"2.0","method":"stick_ctl","params":{"x":0,"y":0,"z":0,"r":0},"id":"sdwc-3"}
```

输入量为速度m/s，最大速度不可超过飞机本身限制

