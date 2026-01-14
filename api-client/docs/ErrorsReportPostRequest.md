# ErrorsReportPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | The human-readable error message. | [default to undefined]
**stackTrace** | **string** | The raw stack trace from the client application. | [optional] [default to undefined]
**metaData** | **object** | Additional context (e.g., component state, redux store, device info). | [optional] [default to undefined]
**errorCode** | **string** | A custom error code for categorization. | [optional] [default to undefined]
**statusCode** | **number** | The equivalent HTTP status code (default is 400). | [optional] [default to undefined]
**requestPath** | **string** | The route or screen where the error occurred. | [optional] [default to undefined]
**requestMethod** | **string** | The action or method being performed. | [optional] [default to undefined]

## Example

```typescript
import { ErrorsReportPostRequest } from './api';

const instance: ErrorsReportPostRequest = {
    message,
    stackTrace,
    metaData,
    errorCode,
    statusCode,
    requestPath,
    requestMethod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
