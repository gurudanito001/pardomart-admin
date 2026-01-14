# ErrorLogsApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**errorsGet**](#errorsget) | **GET** /errors | Get a list of error logs|
|[**errorsIdGet**](#errorsidget) | **GET** /errors/{id} | Get a specific error log|
|[**errorsReportPost**](#errorsreportpost) | **POST** /errors/report | Report a client-side error|

# **errorsGet**
> errorsGet()

Retrieve paginated error logs with optional filtering. (Admin only)

### Example

```typescript
import {
    ErrorLogsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ErrorLogsApi(configuration);

let page: number; //Page number (optional) (default to 1)
let limit: number; //Number of items per page (optional) (default to 50)
let statusCode: number; //Filter by HTTP status code (e.g., 500) (optional) (default to undefined)
let startDate: string; //Filter logs created after this date (ISO 8601) (optional) (default to undefined)
let endDate: string; //Filter logs created before this date (ISO 8601) (optional) (default to undefined)
let correlationId: string; //Filter by specific request correlation ID (optional) (default to undefined)

const { status, data } = await apiInstance.errorsGet(
    page,
    limit,
    statusCode,
    startDate,
    endDate,
    correlationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page number | (optional) defaults to 1|
| **limit** | [**number**] | Number of items per page | (optional) defaults to 50|
| **statusCode** | [**number**] | Filter by HTTP status code (e.g., 500) | (optional) defaults to undefined|
| **startDate** | [**string**] | Filter logs created after this date (ISO 8601) | (optional) defaults to undefined|
| **endDate** | [**string**] | Filter logs created before this date (ISO 8601) | (optional) defaults to undefined|
| **correlationId** | [**string**] | Filter by specific request correlation ID | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of error logs retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errorsIdGet**
> errorsIdGet()

Retrieve full details of a single error log by ID. (Admin only)

### Example

```typescript
import {
    ErrorLogsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ErrorLogsApi(configuration);

let id: string; //The UUID of the error log (default to undefined)

const { status, data } = await apiInstance.errorsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The UUID of the error log | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Error log details. |  -  |
|**404** | Error log not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errorsReportPost**
> ErrorsReportPost200Response errorsReportPost(errorsReportPostRequest)

Allows frontend (Web/Mobile) applications to report crashes or unexpected errors to the backend for centralized logging.

### Example

```typescript
import {
    ErrorLogsApi,
    Configuration,
    ErrorsReportPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ErrorLogsApi(configuration);

let errorsReportPostRequest: ErrorsReportPostRequest; //

const { status, data } = await apiInstance.errorsReportPost(
    errorsReportPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **errorsReportPostRequest** | **ErrorsReportPostRequest**|  | |


### Return type

**ErrorsReportPost200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Error reported successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

