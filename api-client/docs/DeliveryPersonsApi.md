# DeliveryPersonsApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deliveryPersonsAdminAllGet**](#deliverypersonsadminallget) | **GET** /delivery-persons/admin/all | Get a paginated list of all delivery persons (Admin)|
|[**deliveryPersonsAdminExportGet**](#deliverypersonsadminexportget) | **GET** /delivery-persons/admin/export | Export delivery persons to CSV (Admin)|
|[**deliveryPersonsAdminIdDeliveriesGet**](#deliverypersonsadminiddeliveriesget) | **GET** /delivery-persons/admin/{id}/deliveries | Get a paginated delivery history for a single delivery person (Admin)|
|[**deliveryPersonsAdminIdGet**](#deliverypersonsadminidget) | **GET** /delivery-persons/admin/{id} | Get a single delivery person\&#39;s details (Admin)|
|[**deliveryPersonsAdminIdPatch**](#deliverypersonsadminidpatch) | **PATCH** /delivery-persons/admin/{id} | Update a delivery person\&#39;s profile (Admin)|
|[**deliveryPersonsAdminOverviewGet**](#deliverypersonsadminoverviewget) | **GET** /delivery-persons/admin/overview | Get platform-wide delivery person overview data (Admin)|

# **deliveryPersonsAdminAllGet**
> deliveryPersonsAdminAllGet()

Retrieves a paginated list of all users with the \'delivery_person\' role. Allows filtering by name, status, number of deliveries, and creation date.

### Example

```typescript
import {
    DeliveryPersonsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryPersonsApi(configuration);

let search: string; //Search by name, email, or mobile number. (optional) (default to undefined)
let status: boolean; //Filter by active status (true/false). (optional) (default to undefined)
let createdAtStart: string; //Filter users created on or after this date. (optional) (default to undefined)
let createdAtEnd: string; //Filter users created on or before this date. (optional) (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let size: number; //Number of items per page. (optional) (default to 20)

const { status, data } = await apiInstance.deliveryPersonsAdminAllGet(
    search,
    status,
    createdAtStart,
    createdAtEnd,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **search** | [**string**] | Search by name, email, or mobile number. | (optional) defaults to undefined|
| **status** | [**boolean**] | Filter by active status (true/false). | (optional) defaults to undefined|
| **createdAtStart** | [**string**] | Filter users created on or after this date. | (optional) defaults to undefined|
| **createdAtEnd** | [**string**] | Filter users created on or before this date. | (optional) defaults to undefined|
| **page** | [**number**] | Page number for pagination. | (optional) defaults to 1|
| **size** | [**number**] | Number of items per page. | (optional) defaults to 20|


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
|**200** | A paginated list of delivery persons. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deliveryPersonsAdminExportGet**
> deliveryPersonsAdminExportGet()


### Example

```typescript
import {
    DeliveryPersonsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryPersonsApi(configuration);

let search: string; // (optional) (default to undefined)
let status: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.deliveryPersonsAdminExportGet(
    search,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **search** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**boolean**] |  | (optional) defaults to undefined|


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

# **deliveryPersonsAdminIdDeliveriesGet**
> deliveryPersonsAdminIdDeliveriesGet()

Retrieves a paginated list of all completed deliveries for a specific delivery person.

### Example

```typescript
import {
    DeliveryPersonsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryPersonsApi(configuration);

let id: string; //The ID of the delivery person. (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let size: number; //Number of items per page. (optional) (default to 20)

const { status, data } = await apiInstance.deliveryPersonsAdminIdDeliveriesGet(
    id,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the delivery person. | defaults to undefined|
| **page** | [**number**] | Page number for pagination. | (optional) defaults to 1|
| **size** | [**number**] | Number of items per page. | (optional) defaults to 20|


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
|**200** | A paginated list of the delivery person\&#39;s completed deliveries. |  -  |
|**404** | Delivery person not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deliveryPersonsAdminIdGet**
> deliveryPersonsAdminIdGet()

Retrieves detailed information for a specific delivery person, including their profile, delivery statistics, and recent delivery history.

### Example

```typescript
import {
    DeliveryPersonsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryPersonsApi(configuration);

let id: string; //The ID of the delivery person to retrieve. (default to undefined)

const { status, data } = await apiInstance.deliveryPersonsAdminIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the delivery person to retrieve. | defaults to undefined|


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
|**200** | The delivery person\&#39;s detailed information. |  -  |
|**404** | Delivery person not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deliveryPersonsAdminIdPatch**
> deliveryPersonsAdminIdPatch(updateUserPayload, )

Allows an admin to update a delivery person\'s profile details. This is primarily used to suspend or reactivate an account by setting the `active` field to `false` or `true`. Other fields like `name`, `email`, etc., can also be updated. 

### Example

```typescript
import {
    DeliveryPersonsApi,
    Configuration,
    UpdateUserPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryPersonsApi(configuration);

let updateUserPayload: UpdateUserPayload; //
let id: string; //The ID of the delivery person to update. (default to undefined)

const { status, data } = await apiInstance.deliveryPersonsAdminIdPatch(
    updateUserPayload,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserPayload** | **UpdateUserPayload**|  | |
| **id** | [**string**] | The ID of the delivery person to update. | defaults to undefined|


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
|**200** | The updated delivery person profile. |  -  |
|**404** | Delivery person not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deliveryPersonsAdminOverviewGet**
> DeliveryPersonsAdminOverviewGet200Response deliveryPersonsAdminOverviewGet()

Retrieves aggregate data about delivery persons, such as total count, new sign-ups, and total deliveries. Only accessible by admins.

### Example

```typescript
import {
    DeliveryPersonsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryPersonsApi(configuration);

let days: number; //The number of past days to count for \"new delivery persons\". (optional) (default to 7)

const { status, data } = await apiInstance.deliveryPersonsAdminOverviewGet(
    days
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **days** | [**number**] | The number of past days to count for \&quot;new delivery persons\&quot;. | (optional) defaults to 7|


### Return type

**DeliveryPersonsAdminOverviewGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An object containing the delivery person overview data. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

