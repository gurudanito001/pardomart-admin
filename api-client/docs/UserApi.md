# UserApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**devicesFcmTokenDelete**](#devicesfcmtokendelete) | **DELETE** /devices/{fcmToken} | Unregister a device for push notifications|
|[**devicesPost**](#devicespost) | **POST** /devices | Register a device for push notifications|
|[**productUserUserIdGet**](#productuseruseridget) | **GET** /product/user/{userId} | Get all products from all vendors belonging to a user|
|[**usersAdminExportGet**](#usersadminexportget) | **GET** /users/admin/export | Export list of admins (Admin)|
|[**usersAdminStatsGet**](#usersadminstatsget) | **GET** /users/admin/stats | Get admin statistics (Admin)|
|[**usersGet**](#usersget) | **GET** /users | Get a paginated list of users|
|[**usersIdDelete**](#usersiddelete) | **DELETE** /users/{id} | Delete a user|
|[**usersIdGet**](#usersidget) | **GET** /users/{id} | Get a user by their ID|
|[**usersIdPut**](#usersidput) | **PUT** /users/{id} | Update a user\&#39;s details|
|[**usersVerificationCodesGet**](#usersverificationcodesget) | **GET** /users/verificationCodes | Get all verification codes|

# **devicesFcmTokenDelete**
> devicesFcmTokenDelete()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let fcmToken: string; //The FCM token of the device to unregister. (default to undefined)

const { status, data } = await apiInstance.devicesFcmTokenDelete(
    fcmToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fcmToken** | [**string**] | The FCM token of the device to unregister. | defaults to undefined|


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
|**204** | Device unregistered successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devicesPost**
> Device devicesPost(devicesPostRequest)


### Example

```typescript
import {
    UserApi,
    Configuration,
    DevicesPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let devicesPostRequest: DevicesPostRequest; //

const { status, data } = await apiInstance.devicesPost(
    devicesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **devicesPostRequest** | **DevicesPostRequest**|  | |


### Return type

**Device**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Device registered successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productUserUserIdGet**
> Array<VendorProduct> productUserUserIdGet()

Retrieves a list of all vendor-specific products from all stores owned by a particular user. This can be used by an admin or the user themselves.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: string; //The ID of the user whose vendor products are to be fetched. (default to undefined)

const { status, data } = await apiInstance.productUserUserIdGet(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | The ID of the user whose vendor products are to be fetched. | defaults to undefined|


### Return type

**Array<VendorProduct>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of vendor products. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersAdminExportGet**
> usersAdminExportGet()

Downloads a CSV file containing a list of all admin users.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

const { status, data } = await apiInstance.usersAdminExportGet();
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
|**200** | CSV file download. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersAdminStatsGet**
> UsersAdminStatsGet200Response usersAdminStatsGet()

Retrieves statistics about admin users, including total count and active count.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

const { status, data } = await apiInstance.usersAdminStatsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UsersAdminStatsGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Admin statistics. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersGet**
> PaginatedUsers usersGet()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let mobileVerified: boolean; //Filter by mobile verification status. (optional) (default to undefined)
let active: boolean; //Filter by active status. (optional) (default to undefined)
let role: Role; //Filter by user role. (optional) (default to undefined)
let language: string; //Filter by language. (optional) (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let size: number; //Number of items per page. (optional) (default to 20)
let search: string; //Search by name, email, or mobile number. (optional) (default to undefined)

const { status, data } = await apiInstance.usersGet(
    mobileVerified,
    active,
    role,
    language,
    page,
    size,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mobileVerified** | [**boolean**] | Filter by mobile verification status. | (optional) defaults to undefined|
| **active** | [**boolean**] | Filter by active status. | (optional) defaults to undefined|
| **role** | **Role** | Filter by user role. | (optional) defaults to undefined|
| **language** | [**string**] | Filter by language. | (optional) defaults to undefined|
| **page** | [**number**] | Page number for pagination. | (optional) defaults to 1|
| **size** | [**number**] | Number of items per page. | (optional) defaults to 20|
| **search** | [**string**] | Search by name, email, or mobile number. | (optional) defaults to undefined|


### Return type

**PaginatedUsers**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A paginated list of users. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersIdDelete**
> usersIdDelete()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let id: string; //The ID of the user to delete. (default to undefined)

const { status, data } = await apiInstance.usersIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the user to delete. | defaults to undefined|


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
|**200** | The deleted user. |  -  |
|**404** | User not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersIdGet**
> User usersIdGet()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let id: string; //The ID of the user to retrieve. (default to undefined)

const { status, data } = await apiInstance.usersIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the user to retrieve. | defaults to undefined|


### Return type

**User**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested user. |  -  |
|**404** | User not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersIdPut**
> User usersIdPut(updateUserPayload, )


### Example

```typescript
import {
    UserApi,
    Configuration,
    UpdateUserPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let updateUserPayload: UpdateUserPayload; //
let id: string; //The ID of the user to update. (default to undefined)

const { status, data } = await apiInstance.usersIdPut(
    updateUserPayload,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserPayload** | **UpdateUserPayload**|  | |
| **id** | [**string**] | The ID of the user to update. | defaults to undefined|


### Return type

**User**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated user. |  -  |
|**404** | User not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersVerificationCodesGet**
> Array<Verification> usersVerificationCodesGet()

Retrieves all stored verification codes. Intended for admin/debugging purposes.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

const { status, data } = await apiInstance.usersVerificationCodesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Verification>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of all verification codes. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

