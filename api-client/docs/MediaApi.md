# MediaApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**mediaGet**](#mediaget) | **GET** /media | Get media by reference ID|
|[**mediaIdDelete**](#mediaiddelete) | **DELETE** /media/{id} | Delete a media file|
|[**mediaUploadPost**](#mediauploadpost) | **POST** /media/upload | Upload a media file|

# **mediaGet**
> mediaGet()


### Example

```typescript
import {
    MediaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MediaApi(configuration);

let referenceId: string; //The ID of the resource (e.g., vendor ID). (default to undefined)
let referenceType: 'bug_report_image' | 'user_image' | 'store_image' | 'product_image' | 'category_image' | 'document' | 'other'; //Filter by type of media. (optional) (default to undefined)

const { status, data } = await apiInstance.mediaGet(
    referenceId,
    referenceType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **referenceId** | [**string**] | The ID of the resource (e.g., vendor ID). | defaults to undefined|
| **referenceType** | [**&#39;bug_report_image&#39; | &#39;user_image&#39; | &#39;store_image&#39; | &#39;product_image&#39; | &#39;category_image&#39; | &#39;document&#39; | &#39;other&#39;**]**Array<&#39;bug_report_image&#39; &#124; &#39;user_image&#39; &#124; &#39;store_image&#39; &#124; &#39;product_image&#39; &#124; &#39;category_image&#39; &#124; &#39;document&#39; &#124; &#39;other&#39;>** | Filter by type of media. | (optional) defaults to undefined|


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
|**200** | List of media files. |  -  |
|**400** | Missing referenceId or invalid referenceType. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mediaIdDelete**
> mediaIdDelete()


### Example

```typescript
import {
    MediaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MediaApi(configuration);

let id: string; //The ID of the media record to delete. (default to undefined)

const { status, data } = await apiInstance.mediaIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the media record to delete. | defaults to undefined|


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
|**200** | File deleted successfully. |  -  |
|**404** | Media not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mediaUploadPost**
> MediaUploadPost201Response mediaUploadPost()

Uploads a file (image, document, etc.) to the server. The file is stored on Cloudinary, and a corresponding record is created in the database. This endpoint requires a `multipart/form-data` request. 

### Example

```typescript
import {
    MediaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MediaApi(configuration);

let file: File; //The file to upload. (default to undefined)
let referenceId: string; //The ID of the resource this media is associated with (e.g., a user ID, product ID). (default to undefined)
let referenceType: string; //The type of resource the media is associated with. (default to undefined)
let identifier: string; //Optional identifier for categorization. (optional) (default to undefined)

const { status, data } = await apiInstance.mediaUploadPost(
    file,
    referenceId,
    referenceType,
    identifier
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | The file to upload. | defaults to undefined|
| **referenceId** | [**string**] | The ID of the resource this media is associated with (e.g., a user ID, product ID). | defaults to undefined|
| **referenceType** | [**string**]**Array<&#39;bug_report_image&#39; &#124; &#39;user_image&#39; &#124; &#39;store_image&#39; &#124; &#39;product_image&#39; &#124; &#39;category_image&#39; &#124; &#39;document&#39; &#124; &#39;other&#39;>** | The type of resource the media is associated with. | defaults to undefined|
| **identifier** | [**string**]**Array<&#39;profile_picture&#39; &#124; &#39;document_scan&#39; &#124; &#39;product_image&#39; &#124; &#39;category_image&#39; &#124; &#39;ad_image&#39; &#124; &#39;business_document_1&#39; &#124; &#39;business_document_2&#39; &#124; &#39;other&#39;>** | Optional identifier for categorization. | (optional) defaults to undefined|


### Return type

**MediaUploadPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | File uploaded successfully. Returns the created media record. |  -  |
|**400** | Bad request (e.g., no file uploaded, missing referenceId or referenceType). |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

