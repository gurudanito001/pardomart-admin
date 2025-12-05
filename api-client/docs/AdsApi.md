# AdsApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**adsGet**](#adsget) | **GET** /ads | Get a list of ads|
|[**adsIdDelete**](#adsiddelete) | **DELETE** /ads/{id} | Delete an ad (Admin)|
|[**adsIdGet**](#adsidget) | **GET** /ads/{id} | Get a single ad by ID|
|[**adsIdPatch**](#adsidpatch) | **PATCH** /ads/{id} | Update an ad (Admin)|
|[**adsPost**](#adspost) | **POST** /ads | Create a new ad (Admin)|

# **adsGet**
> Array<Ad> adsGet()

Retrieves a list of ads. Publicly accessible to get active ads. Admins can filter by status.

### Example

```typescript
import {
    AdsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdsApi(configuration);

let isActive: boolean; //Filter by active status. If true, only returns currently running ads. (optional) (default to undefined)
let vendorId: string; //Filter ads for a specific store. (optional) (default to undefined)

const { status, data } = await apiInstance.adsGet(
    isActive,
    vendorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **isActive** | [**boolean**] | Filter by active status. If true, only returns currently running ads. | (optional) defaults to undefined|
| **vendorId** | [**string**] | Filter ads for a specific store. | (optional) defaults to undefined|


### Return type

**Array<Ad>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of ads. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adsIdDelete**
> adsIdDelete()


### Example

```typescript
import {
    AdsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.adsIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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
|**204** | Ad deleted successfully. |  -  |
|**404** | Ad not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adsIdGet**
> Ad adsIdGet()


### Example

```typescript
import {
    AdsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.adsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Ad**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested ad. |  -  |
|**404** | Ad not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adsIdPatch**
> adsIdPatch()


### Example

```typescript
import {
    AdsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdsApi(configuration);

let id: string; // (default to undefined)
let title: string; // (optional) (default to undefined)
let description: string; // (optional) (default to undefined)
let image: File; // (optional) (default to undefined)
let isActive: boolean; // (optional) (default to undefined)
let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.adsIdPatch(
    id,
    title,
    description,
    image,
    isActive,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **title** | [**string**] |  | (optional) defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|
| **image** | [**File**] |  | (optional) defaults to undefined|
| **isActive** | [**boolean**] |  | (optional) defaults to undefined|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|


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
|**200** | The updated ad. |  -  |
|**404** | Ad not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adsPost**
> Ad adsPost()

Creates a new advertisement for a store. Requires admin privileges.

### Example

```typescript
import {
    AdsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdsApi(configuration);

let title: string; // (default to undefined)
let vendorId: string; // (default to undefined)
let image: File; //The ad image file. (default to undefined)
let description: string; // (optional) (default to undefined)
let isActive: boolean; // (optional) (default to undefined)
let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.adsPost(
    title,
    vendorId,
    image,
    description,
    isActive,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **title** | [**string**] |  | defaults to undefined|
| **vendorId** | [**string**] |  | defaults to undefined|
| **image** | [**File**] | The ad image file. | defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|
| **isActive** | [**boolean**] |  | (optional) defaults to undefined|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Ad**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created ad. |  -  |
|**400** | Bad request (e.g., missing fields or image). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

