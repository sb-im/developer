# gosd RESTful API

## Alive

> Not Auth, Is Alive

```bash
curl localhost:8000/gosd/api/v2/ok
```

```json
{"ok":"2021-01-16 17:55:51.768278076 +0800 CST m=+3.689842946"}
```

## Auth

### Oauth

> First of all, Need login get `token`

```shell
/oauth/token
```

example:

```shell
curl http://localhost:8000/gosd/oauth/token \
  -F grant_type="password" \
  -F username="<Your Username>" \
  -F password="<Your Password>" \
  -F client_id="<Client Id>" \
  -F client_secret="<Client Secret>"
```

Field | Type | Description
----- | ---- | -----------
grant_type | string | Only support `password`
username   | string | Username
password   | string | Password
client_id     | string | Client Password [rfc6749#section-2.3.1](https://tools.ietf.org/html/rfc6749#section-2.3.1)
client_secret | string | Need send email to: contact@sb.im

```json
{
  "access_token": "3587cee2fac536268e0dae099339b0697efd7ee1896eebf9e839cfb7126dd599",
  "token_type": "bearer",
  "expires_in": 7200,
  "created_at": 1591863615
}
```

Field | Type | Description
----- | ---- | -----------
access_token | string | Token
token_type   | string | [rfc6749#section-7.1](https://tools.ietf.org/html/rfc6749#section-7.1)
expires_in   | uint | Expires in (s)
created_at   | uint | 10 Timestamp

### Base

`BASE_URL` + api + auth header

The `BASE_URL` default `http://localhost:8000/gosd`

For example:

```shell
curl http://localhost:8000/gosd/api/v1/nodes/ -H "Authorization: Bearer 6b6e69e4e3166d3433bed7412bd3c2caf4fd6aebf7ae7b03834c8494e6c4cf27"
```

## Node

### GetFullNodes

GET `/api/v1/nodes/`

```shell
curl http://localhost:8000/gosd/api/v1/nodes/ -H "Authorization: Bearer 6b6e69e4e3166d3433bed7412bd3c2caf4fd6aebf7ae7b03834c8494e6c4cf27"
```

```json
[
  {
    "id":1,
    "name":"Drone",
    "description":"A Test Drone",
    "points":[{
      "id":1,
      "name":"aa",
      "node_id":1,
      "point_type_id":2,
      "point_type_name":"livestream_flv"
    }],
    "type_name":"air"
  },{
    "id":2,
    "name":"Depot",
    "description":"A Test Depot",
    "points":[],
    "type_name":"depot"
  }
]
```

Field | Type | Description
----- | ---- | -----------
id    | uint | Globally unique device id
name  | string | Name
description | string | Description
points | array | How many features are available
points.type   | string | Enum: reference SDWC
points.params | object | reference SDWC

## Blob

### createBlob

POST `/api/v2/blobs/`

```bash
curl -X POST \
-F c1=@go.mod \
-F c2=@go.sum \
localhost:8000/gosd/api/v2/blobs/ \
-H "Authorization: Bearer 6b6e69e4e3166d3433bed7412bd3c2caf4fd6aebf7ae7b03834c8494e6c4cf27"
```

```json
{"c1":"8","c2":"9"}
```

Key is Any value

**NOTE: value must String**

### updateBlob

PUT `/api/v2/blobs/:id`

```bash
curl -X PUT \
-F c=@go.mod \
localhost:8000/gosd/api/v2/blobs/20 \
-H "Authorization: Bearer 6b6e69e4e3166d3433bed7412bd3c2caf4fd6aebf7ae7b03834c8494e6c4cf27"
```

```json
{"id":20,"filename":"go.mod"}
```

`c` Can be any value

```bash
curl -X PUT \
-F c=@go.mod \
-F c2=@go.sum \
localhost:8000/gosd/api/v2/blobs/20 \
-H "Authorization: Bearer 6b6e69e4e3166d3433bed7412bd3c2caf4fd6aebf7ae7b03834c8494e6c4cf27"
```

```json
{"id":20,"filename":"go.mod"}
```

**If has Multiple file, Random select a file**

### destroyBlob

DELETE `/api/v2/blobs/:id`

```bash
curl -X DELETE \
localhost:8000/gosd/api/v2/blobs/1 \
-H "Authorization: Bearer 6b6e69e4e3166d3433bed7412bd3c2caf4fd6aebf7ae7b03834c8494e6c4cf27"
```

## Plan

### createPlan

POST `/api/v2/plans/`

```bash
curl -X POST localhost:8000/gosd/api/v2/plans/ \
-H "Authorization: Bearer 6b6e69e4e3166d3433bed7412bd3c2caf4fd6aebf7ae7b03834c8494e6c4cf27" \
-H 'content-type: application/json' \
-d '{
  "name":"233",
  "description":"test",
  "node_id":1,
  "files": {
    "file":"30"
  },
  "extra":{
    "key1":"value1",
    "key2":"value2",
    "key3":"value3"
  }
}'
```

response

```json
{
  "id": 35,
  "name": "233",
  "description": "test",
  "node_id": 1,
  "files": {
    "file": "30"
  },
  "extra":{
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
  }
}
```

Field | Type | Description
----- | ---- | -----------
id    | uint | Globally unique plan id
name  | string | Name
description | string | Description
node_id | uint | Run Plan node
files | object | `map[string]string` key is type, value is `blob_id`
extra | object | `map[string]string` key is type, value is text

### indexPlan

GET `/api/v2/plans/`

```json
[
  {
    "id": 1,
    "name": "233",
    "description": "",
    "node_id": 1,
    "files": {
      "file": "1"
    },
    "extra": {null}
  },{
    "id": 2,
    "name": "233",
    "description": "",
    "node_id": 1,
    "files": {
      "file": "1"
    },
    "extra":{
      "key1": "value1",
      "key2": "value2",
      "key3": "value3"
    }
  }
]
```

### updatePlan

PUT `/api/v2/plans/:id`

**Only PUT**

### destroyPlan

DELETE `/api/v2/plans/:id`

## Jobs

### Run Job

POST `/api/v2/plans/:id/jobs/`

### cancel Job

POST `/api/v2/plans/:id/jobs/:job_id/cancel`

Or:

**(Not recommended for use)**

DELETE `/api/v2/plans/:id/jobs/running`

### indexPlanJobs

GET `/api/v2/plans/:id/jobs/`

```json
[
  {
    "id":431,
    "job_id":369,
    "plan_id":0,
    "files":{},
    "extra":{},
    "created_at":"2020-09-23T16:16:07.736495+08:00",
    "updated_at":"2020-09-23T16:16:07.736495+08:00"
  },{
    "id":432,
    "job_id":370,
    "plan_id":0,
    "files":{},
    "extra":{},
    "created_at":"2020-09-23T16:19:49.510395+08:00",
    "updated_at":"2020-09-23T16:19:49.510395+08:00"
  }
]
```
