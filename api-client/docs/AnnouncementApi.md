# AnnouncementApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**announcementsGet**](#announcementsget) | **GET** /announcements | Get all announcements (Admin sees all, Users see relevant)|
|[**announcementsIdBroadcastPost**](#announcementsidbroadcastpost) | **POST** /announcements/{id}/broadcast | Broadcast an announcement to target audience (Admin)|
|[**announcementsIdDelete**](#announcementsiddelete) | **DELETE** /announcements/{id} | Delete an announcement (Admin)|
|[**announcementsIdPatch**](#announcementsidpatch) | **PATCH** /announcements/{id} | Update an announcement (Admin)|
|[**announcementsPost**](#announcementspost) | **POST** /announcements | Create a new announcement (Admin)|

# **announcementsGet**
> announcementsGet()


### Example

```typescript
import {
    AnnouncementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnnouncementApi(configuration);

const { status, data } = await apiInstance.announcementsGet();
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
|**200** | List of announcements. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **announcementsIdBroadcastPost**
> announcementsIdBroadcastPost()


### Example

```typescript
import {
    AnnouncementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnnouncementApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.announcementsIdBroadcastPost(
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
|**200** | Announcement broadcasted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **announcementsIdDelete**
> announcementsIdDelete()


### Example

```typescript
import {
    AnnouncementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnnouncementApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.announcementsIdDelete(
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
|**204** | Deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **announcementsIdPatch**
> announcementsIdPatch()


### Example

```typescript
import {
    AnnouncementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnnouncementApi(configuration);

let id: string; // (default to undefined)
let title: string; // (optional) (default to undefined)
let description: string; // (optional) (default to undefined)
let image: File; // (optional) (default to undefined)
let targetAudience: Array<string>; // (optional) (default to undefined)
let isActive: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.announcementsIdPatch(
    id,
    title,
    description,
    image,
    targetAudience,
    isActive
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **title** | [**string**] |  | (optional) defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|
| **image** | [**File**] |  | (optional) defaults to undefined|
| **targetAudience** | **Array&lt;string&gt;** |  | (optional) defaults to undefined|
| **isActive** | [**boolean**] |  | (optional) defaults to undefined|


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
|**200** | Updated announcement. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **announcementsPost**
> announcementsPost()


### Example

```typescript
import {
    AnnouncementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnnouncementApi(configuration);

let title: string; // (default to undefined)
let description: string; // (default to undefined)
let targetAudience: Array<string>; // (default to undefined)
let image: File; // (optional) (default to undefined)
let isActive: boolean; // (optional) (default to true)

const { status, data } = await apiInstance.announcementsPost(
    title,
    description,
    targetAudience,
    image,
    isActive
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **title** | [**string**] |  | defaults to undefined|
| **description** | [**string**] |  | defaults to undefined|
| **targetAudience** | **Array<&#39;customer&#39; &#124; &#39;vendor&#39; &#124; &#39;store_admin&#39; &#124; &#39;store_shopper&#39; &#124; &#39;delivery_person&#39; &#124; &#39;admin&#39;>** |  | defaults to undefined|
| **image** | [**File**] |  | (optional) defaults to undefined|
| **isActive** | [**boolean**] |  | (optional) defaults to true|


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
|**201** | Announcement created. |  -  |
|**500** | Server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

