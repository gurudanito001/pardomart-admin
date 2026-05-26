# TagApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**tagsBulkPost**](#tagsbulkpost) | **POST** /tags/bulk | Create multiple tags in bulk|
|[**tagsGet**](#tagsget) | **GET** /tags | Get all tags, with optional filtering by name|
|[**tagsIdDelete**](#tagsiddelete) | **DELETE** /tags/{id} | Delete a tag|
|[**tagsIdGet**](#tagsidget) | **GET** /tags/{id} | Get a tag by its ID|
|[**tagsIdPatch**](#tagsidpatch) | **PATCH** /tags/{id} | Update a tag\&#39;s name|
|[**tagsPost**](#tagspost) | **POST** /tags | Create a new tag|

# **tagsBulkPost**
> Array<Tag> tagsBulkPost(createTagsBulkPayload)


### Example

```typescript
import {
    TagApi,
    Configuration,
    CreateTagsBulkPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new TagApi(configuration);

let createTagsBulkPayload: CreateTagsBulkPayload; //

const { status, data } = await apiInstance.tagsBulkPost(
    createTagsBulkPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTagsBulkPayload** | **CreateTagsBulkPayload**|  | |


### Return type

**Array<Tag>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created tags. |  -  |
|**400** | Bad request, names array is missing or empty. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tagsGet**
> Array<Tag> tagsGet()


### Example

```typescript
import {
    TagApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagApi(configuration);

let name: string; //Filter tags by name (case-insensitive search). (optional) (default to undefined)

const { status, data } = await apiInstance.tagsGet(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Filter tags by name (case-insensitive search). | (optional) defaults to undefined|


### Return type

**Array<Tag>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of tags. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tagsIdDelete**
> Tag tagsIdDelete()


### Example

```typescript
import {
    TagApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagApi(configuration);

let id: string; //The ID of the tag to delete. (default to undefined)

const { status, data } = await apiInstance.tagsIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the tag to delete. | defaults to undefined|


### Return type

**Tag**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The deleted tag. |  -  |
|**404** | Tag not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tagsIdGet**
> Tag tagsIdGet()


### Example

```typescript
import {
    TagApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagApi(configuration);

let id: string; //The ID of the tag. (default to undefined)

const { status, data } = await apiInstance.tagsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the tag. | defaults to undefined|


### Return type

**Tag**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested tag. |  -  |
|**404** | Tag not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tagsIdPatch**
> Tag tagsIdPatch(updateTagPayload, )


### Example

```typescript
import {
    TagApi,
    Configuration,
    UpdateTagPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new TagApi(configuration);

let updateTagPayload: UpdateTagPayload; //
let id: string; //The ID of the tag to update. (default to undefined)

const { status, data } = await apiInstance.tagsIdPatch(
    updateTagPayload,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTagPayload** | **UpdateTagPayload**|  | |
| **id** | [**string**] | The ID of the tag to update. | defaults to undefined|


### Return type

**Tag**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated tag. |  -  |
|**404** | Tag not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tagsPost**
> Tag tagsPost(createTagPayload)


### Example

```typescript
import {
    TagApi,
    Configuration,
    CreateTagPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new TagApi(configuration);

let createTagPayload: CreateTagPayload; //

const { status, data } = await apiInstance.tagsPost(
    createTagPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTagPayload** | **CreateTagPayload**|  | |


### Return type

**Tag**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created tag. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

