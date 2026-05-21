# ReturnApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**returnsPost**](#returnspost) | **POST** /returns | Create a return request|
|[**returnsRequestIdStatusPatch**](#returnsrequestidstatuspatch) | **PATCH** /returns/{requestId}/status | Update return request status|

# **returnsPost**
> returnsPost(returnsPostRequest)


### Example

```typescript
import {
    ReturnApi,
    Configuration,
    ReturnsPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnApi(configuration);

let returnsPostRequest: ReturnsPostRequest; //

const { status, data } = await apiInstance.returnsPost(
    returnsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **returnsPostRequest** | **ReturnsPostRequest**|  | |


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Return request created. |  -  |
|**400** | Bad request. |  -  |
|**403** | Unauthorized. |  -  |
|**404** | Order not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **returnsRequestIdStatusPatch**
> returnsRequestIdStatusPatch(returnsRequestIdStatusPatchRequest, )


### Example

```typescript
import {
    ReturnApi,
    Configuration,
    ReturnsRequestIdStatusPatchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnApi(configuration);

let returnsRequestIdStatusPatchRequest: ReturnsRequestIdStatusPatchRequest; //
let requestId: string; // (default to undefined)

const { status, data } = await apiInstance.returnsRequestIdStatusPatch(
    returnsRequestIdStatusPatchRequest,
    requestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **returnsRequestIdStatusPatchRequest** | **ReturnsRequestIdStatusPatchRequest**|  | |
| **requestId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Status updated. |  -  |
|**403** | Forbidden. |  -  |
|**404** | Return request not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

