# CategoryApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**categoryAdminOverviewGet**](#categoryadminoverviewget) | **GET** /category/admin/overview | Get an overview of category data (Admin)|
|[**categoryBulkPost**](#categorybulkpost) | **POST** /category/bulk | Create multiple categories in bulk|
|[**categoryGet**](#categoryget) | **GET** /category | Get all categories, with optional filters|
|[**categoryIdDelete**](#categoryiddelete) | **DELETE** /category/{id} | Delete a category|
|[**categoryIdGet**](#categoryidget) | **GET** /category/{id} | Get a category by its ID|
|[**categoryIdPut**](#categoryidput) | **PUT** /category/{id} | Update a category (Admin)|
|[**categoryParentsGet**](#categoryparentsget) | **GET** /category/parents | Get all parent categories|
|[**categoryPost**](#categorypost) | **POST** /category | Create a new category (Admin)|
|[**categorySubCategoriesGet**](#categorysubcategoriesget) | **GET** /category/sub-categories | Get all sub-categories|

# **categoryAdminOverviewGet**
> CategoryOverview categoryAdminOverviewGet()

Retrieves aggregate data about categories, such as the total number of parent and sub-categories.

### Example

```typescript
import {
    CategoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

const { status, data } = await apiInstance.categoryAdminOverviewGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CategoryOverview**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The category overview data. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categoryBulkPost**
> Array<Category> categoryBulkPost(createCategoriesBulkPayload)


### Example

```typescript
import {
    CategoryApi,
    Configuration,
    CreateCategoriesBulkPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

let createCategoriesBulkPayload: CreateCategoriesBulkPayload; //

const { status, data } = await apiInstance.categoryBulkPost(
    createCategoriesBulkPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCategoriesBulkPayload** | **CreateCategoriesBulkPayload**|  | |


### Return type

**Array<Category>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created categories. |  -  |
|**400** | Bad request, category list is missing or empty. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categoryGet**
> Array<Category> categoryGet()


### Example

```typescript
import {
    CategoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

let parentId: string; //Filter categories by their parent ID. (optional) (default to undefined)
let type: 'top' | 'sub'; //Filter categories by their type. (optional) (default to undefined)
let name: string; //Filter categories by name (case-insensitive search). (optional) (default to undefined)
let vendorId: string; //Filter categories that have products associated with a specific vendor. (optional) (default to undefined)

const { status, data } = await apiInstance.categoryGet(
    parentId,
    type,
    name,
    vendorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **parentId** | [**string**] | Filter categories by their parent ID. | (optional) defaults to undefined|
| **type** | [**&#39;top&#39; | &#39;sub&#39;**]**Array<&#39;top&#39; &#124; &#39;sub&#39;>** | Filter categories by their type. | (optional) defaults to undefined|
| **name** | [**string**] | Filter categories by name (case-insensitive search). | (optional) defaults to undefined|
| **vendorId** | [**string**] | Filter categories that have products associated with a specific vendor. | (optional) defaults to undefined|


### Return type

**Array<Category>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of categories. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categoryIdDelete**
> categoryIdDelete()


### Example

```typescript
import {
    CategoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

let id: string; //The ID of the category to delete. (default to undefined)

const { status, data } = await apiInstance.categoryIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the category to delete. | defaults to undefined|


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
|**200** | The deleted category. |  -  |
|**404** | Category not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categoryIdGet**
> Category categoryIdGet()


### Example

```typescript
import {
    CategoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

let id: string; //The ID of the category. (default to undefined)

const { status, data } = await apiInstance.categoryIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the category. | defaults to undefined|


### Return type

**Category**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested category. |  -  |
|**404** | Category not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categoryIdPut**
> Category categoryIdPut(updateCategoryPayload, )

Updates a category\'s details. This can be used to change its name, description, or move it within the hierarchy. - To change a sub-category\'s parent, provide a new `parentId`. - To promote a sub-category to a parent category, set `parentId` to `null`. - The `imageUrl` can be updated with either a standard secure URL or a base64 encoded image string. 

### Example

```typescript
import {
    CategoryApi,
    Configuration,
    UpdateCategoryPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

let updateCategoryPayload: UpdateCategoryPayload; //
let id: string; //The ID of the category to update. (default to undefined)

const { status, data } = await apiInstance.categoryIdPut(
    updateCategoryPayload,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCategoryPayload** | **UpdateCategoryPayload**|  | |
| **id** | [**string**] | The ID of the category to update. | defaults to undefined|


### Return type

**Category**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated category. |  -  |
|**404** | Category not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categoryParentsGet**
> Array<Category> categoryParentsGet()

Retrieves a list of all top-level categories (those without a parent).

### Example

```typescript
import {
    CategoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

const { status, data } = await apiInstance.categoryParentsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Category>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of parent categories. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categoryPost**
> Category categoryPost(createCategoryPayload)

Creates a new category. To create a parent category, omit the `parentId`. To create a sub-category, provide the `parentId` of an existing category. The `imageUrl` supports both standard secure URLs and base64 encoded image strings.

### Example

```typescript
import {
    CategoryApi,
    Configuration,
    CreateCategoryPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

let createCategoryPayload: CreateCategoryPayload; //

const { status, data } = await apiInstance.categoryPost(
    createCategoryPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCategoryPayload** | **CreateCategoryPayload**|  | |


### Return type

**Category**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created category. |  -  |
|**404** | Not Found - The provided parentId does not exist. |  -  |
|**409** | Conflict - A category with this name already exists. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categorySubCategoriesGet**
> Array<Category> categorySubCategoriesGet()

Retrieves a list of all categories that are children of another category (i.e., their parentId is not null).

### Example

```typescript
import {
    CategoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

const { status, data } = await apiInstance.categorySubCategoriesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Category>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of all sub-categories. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

