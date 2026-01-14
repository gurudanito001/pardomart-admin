# CustomersApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**customersAdminAllGet**](#customersadminallget) | **GET** /customers/admin/all | Get a paginated list of all customers (Admin)|
|[**customersAdminCustomerIdGet**](#customersadmincustomeridget) | **GET** /customers/admin/{customerId} | Get a single customer\&#39;s details (Admin)|
|[**customersAdminCustomerIdPatch**](#customersadmincustomeridpatch) | **PATCH** /customers/admin/{customerId} | Update a customer\&#39;s profile (Admin)|
|[**customersAdminCustomerIdTransactionsGet**](#customersadmincustomeridtransactionsget) | **GET** /customers/admin/{customerId}/transactions | Get a paginated list of a customer\&#39;s transactions (Admin)|
|[**customersAdminExportGet**](#customersadminexportget) | **GET** /customers/admin/export | Export customers to CSV (Admin)|
|[**customersAdminOverviewGet**](#customersadminoverviewget) | **GET** /customers/admin/overview | Get platform-wide customer overview data (Admin)|
|[**customersCustomerIdTransactionsGet**](#customerscustomeridtransactionsget) | **GET** /customers/{customerId}/transactions | List all transactions for a specific customer|
|[**customersGet**](#customersget) | **GET** /customers | List customers for a vendor, admin, or shopper|

# **customersAdminAllGet**
> customersAdminAllGet()

Retrieves a paginated list of all users with the \'customer\' role. Allows filtering by name, status, amount spent, and creation date. Only accessible by admins.

### Example

```typescript
import {
    CustomersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomersApi(configuration);

let search: string; //Search by name, email, or mobile number. (optional) (default to undefined)
let status: boolean; //Filter by active status (true/false). (optional) (default to undefined)
let createdAtStart: string; //Filter customers created on or after this date. (optional) (default to undefined)
let createdAtEnd: string; //Filter customers created on or before this date. (optional) (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let size: number; //Number of items per page. (optional) (default to 20)

const { status, data } = await apiInstance.customersAdminAllGet(
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
| **createdAtStart** | [**string**] | Filter customers created on or after this date. | (optional) defaults to undefined|
| **createdAtEnd** | [**string**] | Filter customers created on or before this date. | (optional) defaults to undefined|
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
|**200** | A paginated list of customers. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customersAdminCustomerIdGet**
> customersAdminCustomerIdGet()

Retrieves detailed information for a specific customer, including their profile and order statistics (total, completed, cancelled). Only accessible by admins.

### Example

```typescript
import {
    CustomersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomersApi(configuration);

let customerId: string; //The ID of the customer to retrieve. (default to undefined)

const { status, data } = await apiInstance.customersAdminCustomerIdGet(
    customerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerId** | [**string**] | The ID of the customer to retrieve. | defaults to undefined|


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
|**200** | The customer\&#39;s detailed information. |  -  |
|**404** | Customer not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customersAdminCustomerIdPatch**
> customersAdminCustomerIdPatch(updateUserPayload, )

Allows an admin to update a customer\'s profile details. This is primarily used to suspend or reactivate an account by setting the `active` field to `false` or `true`. Other fields like `name`, `email`, etc., can also be updated. 

### Example

```typescript
import {
    CustomersApi,
    Configuration,
    UpdateUserPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomersApi(configuration);

let updateUserPayload: UpdateUserPayload; //
let customerId: string; //The ID of the customer to update. (default to undefined)

const { status, data } = await apiInstance.customersAdminCustomerIdPatch(
    updateUserPayload,
    customerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserPayload** | **UpdateUserPayload**|  | |
| **customerId** | [**string**] | The ID of the customer to update. | defaults to undefined|


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
|**200** | The updated customer profile. |  -  |
|**404** | Customer not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customersAdminCustomerIdTransactionsGet**
> customersAdminCustomerIdTransactionsGet()

Retrieves a paginated list of all transactions for a specific customer. Only accessible by admins.

### Example

```typescript
import {
    CustomersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomersApi(configuration);

let customerId: string; //The ID of the customer. (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let size: number; //Number of items per page. (optional) (default to 20)

const { status, data } = await apiInstance.customersAdminCustomerIdTransactionsGet(
    customerId,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerId** | [**string**] | The ID of the customer. | defaults to undefined|
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
|**200** | A paginated list of the customer\&#39;s transactions. |  -  |
|**404** | Customer not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customersAdminExportGet**
> customersAdminExportGet()


### Example

```typescript
import {
    CustomersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomersApi(configuration);

let search: string; // (optional) (default to undefined)
let status: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.customersAdminExportGet(
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

# **customersAdminOverviewGet**
> CustomersAdminOverviewGet200Response customersAdminOverviewGet()

Retrieves aggregate data about customers, such as total customers, total completed orders, new customers, and total payments. Only accessible by admins.

### Example

```typescript
import {
    CustomersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomersApi(configuration);

let days: number; //The number of past days to count for \"new customers\". (optional) (default to 7)

const { status, data } = await apiInstance.customersAdminOverviewGet(
    days
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **days** | [**number**] | The number of past days to count for \&quot;new customers\&quot;. | (optional) defaults to 7|


### Return type

**CustomersAdminOverviewGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An object containing the customer overview data. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customersCustomerIdTransactionsGet**
> Array<Transaction> customersCustomerIdTransactionsGet()

Retrieves a list of all transactions for a given customer, with role-based access: - **Vendor**: Can view all transactions for the customer across all their stores. Can optionally filter by a specific `vendorId` (store ID). - **Store Admin**: Can only view transactions for the customer within their assigned store. The `vendorId` filter is ignored. 

### Example

```typescript
import {
    CustomersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomersApi(configuration);

let customerId: string; //The ID of the customer. (default to undefined)
let vendorId: string; //Optional. For Vendors, filters transactions by a specific store ID. Ignored for other roles. (optional) (default to undefined)

const { status, data } = await apiInstance.customersCustomerIdTransactionsGet(
    customerId,
    vendorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerId** | [**string**] | The ID of the customer. | defaults to undefined|
| **vendorId** | [**string**] | Optional. For Vendors, filters transactions by a specific store ID. Ignored for other roles. | (optional) defaults to undefined|


### Return type

**Array<Transaction>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of the customer\&#39;s transactions. |  -  |
|**403** | Forbidden. The authenticated user does not have permission. |  -  |
|**404** | Not Found. The customer has no history with the specified vendor(s). |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customersGet**
> Array<UserSummary> customersGet()

Retrieves a list of unique customers who have patronized a store. - **Vendor**: Can see customers from all their stores. Can filter by a specific `vendorId`. - **Store Admin/Shopper**: Can only see customers from their assigned store. The `vendorId` filter is ignored. 

### Example

```typescript
import {
    CustomersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomersApi(configuration);

let vendorId: string; //Optional. For vendors, filters customers by a specific store ID. For staff, this parameter is ignored. (optional) (default to undefined)

const { status, data } = await apiInstance.customersGet(
    vendorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vendorId** | [**string**] | Optional. For vendors, filters customers by a specific store ID. For staff, this parameter is ignored. | (optional) defaults to undefined|


### Return type

**Array<UserSummary>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of customers who have made a purchase from the vendor\&#39;s store(s). |  -  |
|**403** | Forbidden. The authenticated user does not have permission. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

