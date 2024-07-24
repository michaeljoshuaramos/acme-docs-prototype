# API Reference

The Increase API is organized around ~[REST](http://en.wikipedia.org/wiki/Representational_State_Transfer)~. It has predictable resource-oriented URLs, accepts and returns JSON-encoded payloads, and uses standard HTTP response codes, authentication, and verbs.

While we're continually adding new features to the API, we're committed to doing so in a way that doesn't break existing integrations. You can read more in our ~[versioning and backwards compatibility guide](https://increase.com/documentation/backwards-compatibility)~.

## Authorization and Testing

The API accepts ~[Bearer Authentication](https://datatracker.ietf.org/doc/html/rfc6750)~. When you sign up for an Increase account, we make you a pair of ~[API keys](https://dashboard.increase.com/developers/api_keys)~: one for production and one for our sandbox environment in which no real money moves. You can create and revoke API keys from the ~[dashboard](https://dashboard.increase.com/developers/api_keys)~ and should securely store them using a secret management system.
Production API requests should be to `https://api.increase.com` and sandbox requests should be to `https://sandbox.increase.com`. We'll put these into environment variables to make our code examples easier to follow.

###### In the sandbox:

```
INCREASE_API_KEY="sandbox_key_1234567890"
INCREASE_URL="https://sandbox.increase.com"
```

###### In production (you'll need to retrieve your API key from the dashboard):

```
INCREASE_API_KEY="secret_key_1234567890"
INCREASE_URL="https://api.increase.com"
```

###### You can then make an API request like this using cURL:

```
curl --url "${INCREASE_URL}" \
  -H "Authorization: Bearer ${INCREASE_API_KEY}"
```

## OpenAPI

This reference also exists in ~[OpenAPI 3 format](https://increase.com/openapi.json)~. This spec is in beta and subject to change. If you find it useful, or have feedback, ~[let us know!](mailto:support+openapi@increase.com)~

## Software Development Kits

Increase maintains open source SDKs for TypeScript, Python, Go, Java, and Kotlin. Check out the documentation ~[here](https://increase.com/documentation/software-development-kits)~ or read the source code on ~[Github](https://github.com/increase)~.

## OAuth

If you're interested in building an application that connects to other Increase users' data, you can build an OAuth application. Learn more about this in our ~[OAuth guide](https://increase.com/documentation/oauth)~.

## Requests and Responses

When making a `POST` request to the API, use a `Content-Type` of `application/json` and specify parameters via JSON in the request body:

When making a `GET` request to the API, you should specify parameters in the query string of the URL. Join nested parameters, such as timestamp-based filters, with a `.` – for example, `created_at.before`:
All responses from the API will have a `Content-Type` of `application/json`.

###### POST request

```
curl -X "POST" \
  --url "${INCREASE_URL}/accounts" \
  -H "Authorization: Bearer ${INCREASE_API_KEY}" \
  -H 'Content-Type: application/json' \
  -d $'{
    "name": "New Account!"
  }'
```

###### GET request

```
curl \
  --url "${INCREASE_URL}/transactions?created_at.before=2022-01-15T06:34:23Z&created_at.after=2022-01-08T06:34:16Z" \
  -H "Authorization: Bearer ${INCREASE_API_KEY}"
```

## Object Lists

List endpoints return a wrapper object with the data and a cursor. The API will return the next page of results if you submit the `next_cursor` as a query parameter with the name `cursor`. Any filter parameters passed to the original list request must be included if `next_cursor` is specified. The maximum (and default) page size is 100 objects. You can adjust it using the `limit` parameter.

```
{
  "data": [],
  "next_cursor": "RWFzdGVyIGVnZw=="
}
```

## Errors

The API uses standard HTTP response codes to indicate the success or failure of requests. Codes in the 2xx range indicate success; codes in the 4xx and 5xx range indicate errors. Error objects conform to ~[RFC 7807](https://datatracker.ietf.org/doc/html/rfc7807)~ and can be distinguished by their `type` attribute. Errors will always have the same shape.

### Attributes

#### detail

##### string

###### Additional information about this particular error.

#### status

##### string

###### The HTTP status code of the error is also included in the response body for easier debugging.

#### title

##### string

###### A human-readable string explaining the type of error.

#### type

##### enum

###### The type of error that occurred. This is a machine-readable enum.

```
{
  "detail": "There's an insufficient balance in the account.",
  "status": "400",
  "title": "The action you specified can't be performed on the object in its current state.",
  "type": "invalid_operation_error"
}
```

## Idempotency

The API supports ~[idempotency](https://en.wikipedia.org/wiki/Idempotence)~ for safely retrying requests without accidentally performing the same operation twice. This is useful when an API call is disrupted in transit and you do not receive a response. For example, if a request to create an ~[ACH Transfer](https://increase.com/documentation#create-an-ach-transfer)~ does not respond due to a network connection error, you can retry the request with the same idempotency key to guarantee that no more than one transfer is created.

To perform an idempotent request, provide an additional, unique `Idempotency-Key` ~[request header](https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header-00)~ per intended request. `POST` endpoints also allow passing `idempotency_key` as a JSON parameter. Read more about ~[Increase's idempotency keys](https://increase.com/documentation/idempotency-keys)~.

# Accounts

Accounts are your bank accounts with Increase. They store money, receive transfers, and send payments. They earn interest and have depository insurance.
