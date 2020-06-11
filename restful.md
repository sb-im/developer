# gosd RESTful API

## RESTful

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

### GetFullNodes

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

