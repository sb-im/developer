# Architecture

```mermaid
sequenceDiagram
  participant Client
  participant Cloud
  participant Broker
  participant Node

  Node->>Broker: Connect
  Node->>Broker: Push status
  Client->>Cloud: Request Login
  Client->>Broker: Connect
  Client->>Node: Control

  Client->>Cloud: New Plan
  Client->>Cloud: Run Plan
  Cloud->>Broker: Connect
  Cloud->>Node: Control

```

```
      Cloud -- Broker
     /       /     \\
    /      /        \ \
   /     /           \  Node -- Drone
  /    /              \
Client                 Node -- Depot
```

### Level

```
                           Time Scheduler                  cloud
                           Plan (Lua VM)                   cloud
tcp <-> ncp <-> Mqtt <->  jsonrpc2 / status <-> MQTT <->   cloud / SDWC.node
```

## Cloud

gosd (Closed source)

System Management Service

Communication center, database storage

## Node

ncp (Closed source)

Communication middleware

## Broker

MQTT Broker

Communication middleware



