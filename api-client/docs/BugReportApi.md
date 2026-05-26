# BugReportApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**bugReportsIdGet**](#bugreportsidget) | **GET** /bug-reports/{id} | Get a specific bug report|
|[**bugReportsIdStatusPatch**](#bugreportsidstatuspatch) | **PATCH** /bug-reports/{id}/status | Update a bug report\&#39;s status (Admin only)|
|[**bugReportsMeGet**](#bugreportsmeget) | **GET** /bug-reports/me | Get my bug reports|
|[**bugReportsPost**](#bugreportspost) | **POST** /bug-reports | Report a bug|

# **bugReportsIdGet**
> bugReportsIdGet()


### Example

```typescript
import {
    BugReportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BugReportApi(configuration);

let id: string; //The ID of the bug report to retrieve. (default to undefined)

const { status, data } = await apiInstance.bugReportsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the bug report to retrieve. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested bug report details. |  -  |
|**403** | Forbidden. You do not have permission to view this report. |  -  |
|**404** | Bug report not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bugReportsIdStatusPatch**
> bugReportsIdStatusPatch(bugReportsIdStatusPatchRequest, )


### Example

```typescript
import {
    BugReportApi,
    Configuration,
    BugReportsIdStatusPatchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BugReportApi(configuration);

let bugReportsIdStatusPatchRequest: BugReportsIdStatusPatchRequest; //
let id: string; //The ID of the bug report to update. (default to undefined)

const { status, data } = await apiInstance.bugReportsIdStatusPatch(
    bugReportsIdStatusPatchRequest,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bugReportsIdStatusPatchRequest** | **BugReportsIdStatusPatchRequest**|  | |
| **id** | [**string**] | The ID of the bug report to update. | defaults to undefined|


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
|**200** | Bug report status updated successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bugReportsMeGet**
> bugReportsMeGet()

Retrieves all bug reports submitted by the authenticated user, sorted by most recent.

### Example

```typescript
import {
    BugReportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BugReportApi(configuration);

const { status, data } = await apiInstance.bugReportsMeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of the user\&#39;s bug reports. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bugReportsPost**
> bugReportsPost()


### Example

```typescript
import {
    BugReportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BugReportApi(configuration);

let description: string; //A description of the bug. (default to undefined)
let title: string; //A short summary of the bug. (optional) (default to undefined)
let category: string; //The category of the bug. (optional) (default to undefined)
let orderId: string; //(Optional) The ID of the order related to the bug. (optional) (default to undefined)
let productId: string; //(Optional) The ID of the product related to the bug. (optional) (default to undefined)
let vendorId: string; //(Optional) The ID of the vendor related to the bug. (optional) (default to undefined)
let meta: string; //(Optional) Additional JSON metadata (e.g., device info, app version) passed as a JSON string. (optional) (default to undefined)
let image: File; //(Optional) An image of the bug. (optional) (default to undefined)

const { status, data } = await apiInstance.bugReportsPost(
    description,
    title,
    category,
    orderId,
    productId,
    vendorId,
    meta,
    image
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **description** | [**string**] | A description of the bug. | defaults to undefined|
| **title** | [**string**] | A short summary of the bug. | (optional) defaults to undefined|
| **category** | [**string**]**Array<&#39;ORDER_ISSUE&#39; &#124; &#39;PRODUCT_ISSUE&#39; &#124; &#39;VENDOR_ISSUE&#39; &#124; &#39;PAYMENT_ISSUE&#39; &#124; &#39;APP_CRASH&#39; &#124; &#39;APP_PERFORMANCE&#39; &#124; &#39;UI_UX_ISSUE&#39; &#124; &#39;ACCOUNT_ISSUE&#39; &#124; &#39;OTHER&#39;>** | The category of the bug. | (optional) defaults to undefined|
| **orderId** | [**string**] | (Optional) The ID of the order related to the bug. | (optional) defaults to undefined|
| **productId** | [**string**] | (Optional) The ID of the product related to the bug. | (optional) defaults to undefined|
| **vendorId** | [**string**] | (Optional) The ID of the vendor related to the bug. | (optional) defaults to undefined|
| **meta** | [**string**] | (Optional) Additional JSON metadata (e.g., device info, app version) passed as a JSON string. | (optional) defaults to undefined|
| **image** | [**File**] | (Optional) An image of the bug. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Bug report created successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

