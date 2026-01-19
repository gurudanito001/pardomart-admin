# AdminApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**adsIdDelete**](#adsiddelete) | **DELETE** /ads/{id} | Delete an ad (Admin)|
|[**adsIdPatch**](#adsidpatch) | **PATCH** /ads/{id} | Update an ad (Admin)|
|[**adsPost**](#adspost) | **POST** /ads | Create a new ad (Admin)|
|[**bugReportsIdStatusPatch**](#bugreportsidstatuspatch) | **PATCH** /bug-reports/{id}/status | Update a bug report\&#39;s status (Admin only)|
|[**categoryAdminOverviewGet**](#categoryadminoverviewget) | **GET** /category/admin/overview | Get an overview of category data (Admin)|
|[**contentPrivacyPolicyAppPatch**](#contentprivacypolicyapppatch) | **PATCH** /content/privacy-policy/{app} | Update privacy policy for a specific app (Admin)|
|[**contentTypePatch**](#contenttypepatch) | **PATCH** /content/{type} | Update static content by type (Admin)|
|[**customersAdminAllGet**](#customersadminallget) | **GET** /customers/admin/all | Get a paginated list of all customers (Admin)|
|[**customersAdminCustomerIdGet**](#customersadmincustomeridget) | **GET** /customers/admin/{customerId} | Get a single customer\&#39;s details (Admin)|
|[**customersAdminCustomerIdPatch**](#customersadmincustomeridpatch) | **PATCH** /customers/admin/{customerId} | Update a customer\&#39;s profile (Admin)|
|[**customersAdminCustomerIdTransactionsGet**](#customersadmincustomeridtransactionsget) | **GET** /customers/admin/{customerId}/transactions | Get a paginated list of a customer\&#39;s transactions (Admin)|
|[**customersAdminExportGet**](#customersadminexportget) | **GET** /customers/admin/export | Export customers to CSV (Admin)|
|[**customersAdminOverviewGet**](#customersadminoverviewget) | **GET** /customers/admin/overview | Get platform-wide customer overview data (Admin)|
|[**deliveryPersonsAdminAllGet**](#deliverypersonsadminallget) | **GET** /delivery-persons/admin/all | Get a paginated list of all delivery persons (Admin)|
|[**deliveryPersonsAdminExportGet**](#deliverypersonsadminexportget) | **GET** /delivery-persons/admin/export | Export delivery persons to CSV (Admin)|
|[**deliveryPersonsAdminIdDeliveriesGet**](#deliverypersonsadminiddeliveriesget) | **GET** /delivery-persons/admin/{id}/deliveries | Get a paginated delivery history for a single delivery person (Admin)|
|[**deliveryPersonsAdminIdGet**](#deliverypersonsadminidget) | **GET** /delivery-persons/admin/{id} | Get a single delivery person\&#39;s details (Admin)|
|[**deliveryPersonsAdminIdPatch**](#deliverypersonsadminidpatch) | **PATCH** /delivery-persons/admin/{id} | Update a delivery person\&#39;s profile (Admin)|
|[**deliveryPersonsAdminOverviewGet**](#deliverypersonsadminoverviewget) | **GET** /delivery-persons/admin/overview | Get platform-wide delivery person overview data (Admin)|
|[**faqsIdDelete**](#faqsiddelete) | **DELETE** /faqs/{id} | Delete an FAQ (Admin)|
|[**faqsIdPatch**](#faqsidpatch) | **PATCH** /faqs/{id} | Update an FAQ (Admin)|
|[**faqsPost**](#faqspost) | **POST** /faqs | Create a new FAQ (Admin)|
|[**orderAdminAllGet**](#orderadminallget) | **GET** /order/admin/all | Get a paginated list of all orders (Admin)|
|[**orderAdminOrderIdMessagesGet**](#orderadminorderidmessagesget) | **GET** /order/admin/{orderId}/messages | Get all messages for an order (Admin)|
|[**orderAdminOrderIdPatch**](#orderadminorderidpatch) | **PATCH** /order/admin/{orderId} | Update an order\&#39;s details (Admin)|
|[**orderAdminOverviewGet**](#orderadminoverviewget) | **GET** /order/admin/overview | Get platform-wide order overview data (Admin)|
|[**productAdminAllGet**](#productadminallget) | **GET** /product/admin/all | Get all base products with filtering and pagination (Admin)|
|[**productAdminOverviewGet**](#productadminoverviewget) | **GET** /product/admin/overview | Get an overview of product data (Admin)|
|[**productAdminProductIdVendorProductsGet**](#productadminproductidvendorproductsget) | **GET** /product/admin/{productId}/vendor-products | Get all vendor products for a specific base product (Admin)|
|[**productIdStatusPatch**](#productidstatuspatch) | **PATCH** /product/{id}/status | Update a base product\&#39;s active status (Admin)|
|[**staffAdminStaffIdGet**](#staffadminstaffidget) | **GET** /staff/admin/{staffId} | Get a single staff member by ID (Admin)|
|[**staffAdminStoreVendorIdGet**](#staffadminstorevendoridget) | **GET** /staff/admin/store/{vendorId} | List all staff for a specific store (Admin)|
|[**supportAdminExportGet**](#supportadminexportget) | **GET** /support/admin/export | Export support tickets to CSV (Admin)|
|[**supportAdminOverviewGet**](#supportadminoverviewget) | **GET** /support/admin/overview | Get platform-wide support ticket overview (Admin)|
|[**supportTicketsGet**](#supportticketsget) | **GET** /support/tickets | Get all support tickets (Admin)|
|[**supportTicketsTicketIdStatusPatch**](#supportticketsticketidstatuspatch) | **PATCH** /support/tickets/{ticketId}/status | Update a support ticket\&#39;s status (Admin)|
|[**transactionsAdminAllGet**](#transactionsadminallget) | **GET** /transactions/admin/all | Get a paginated list of all transactions (Admin)|
|[**transactionsAdminExportGet**](#transactionsadminexportget) | **GET** /transactions/admin/export | Export transactions to CSV (Admin)|
|[**transactionsAdminOverviewGet**](#transactionsadminoverviewget) | **GET** /transactions/admin/overview | Get platform-wide transaction overview (Admin)|
|[**transactionsAdminTransactionIdDownloadReceiptGet**](#transactionsadmintransactioniddownloadreceiptget) | **GET** /transactions/admin/{transactionId}/download-receipt | Download receipt for a transaction (Admin)|
|[**transactionsAdminTransactionIdGet**](#transactionsadmintransactionidget) | **GET** /transactions/admin/{transactionId} | Get a single transaction by ID (Admin)|
|[**transactionsAdminTransactionIdSendReceiptPost**](#transactionsadmintransactionidsendreceiptpost) | **POST** /transactions/admin/{transactionId}/send-receipt | Generate and send a receipt for a transaction (Admin)|
|[**usersAdminExportGet**](#usersadminexportget) | **GET** /users/admin/export | Export list of admins (Admin)|
|[**usersAdminIdDeactivatePatch**](#usersadminiddeactivatepatch) | **PATCH** /users/admin/{id}/deactivate | Deactivate an admin user account (Admin)|
|[**usersAdminIdPatch**](#usersadminidpatch) | **PATCH** /users/admin/{id} | Update an admin user profile (Admin)|
|[**usersAdminPost**](#usersadminpost) | **POST** /users/admin | Create a new admin user (Admin)|
|[**usersAdminStatsGet**](#usersadminstatsget) | **GET** /users/admin/stats | Get admin statistics (Admin)|
|[**vendorsExportGet**](#vendorsexportget) | **GET** /vendors/export | Export vendors to CSV (Admin)|
|[**vendorsOverviewGet**](#vendorsoverviewget) | **GET** /vendors/overview | Get platform overview data (Admin)|

# **adsIdDelete**
> adsIdDelete()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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

# **adsIdPatch**
> adsIdPatch()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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

# **bugReportsIdStatusPatch**
> bugReportsIdStatusPatch(bugReportsIdStatusPatchRequest, )


### Example

```typescript
import {
    AdminApi,
    Configuration,
    BugReportsIdStatusPatchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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

# **categoryAdminOverviewGet**
> CategoryOverview categoryAdminOverviewGet()

Retrieves aggregate data about categories, such as the total number of parent and sub-categories.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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

# **contentPrivacyPolicyAppPatch**
> Content contentPrivacyPolicyAppPatch(updateContentPayload, )

Updates the privacy policy for the specified app. Supports Markdown or HTML.

### Example

```typescript
import {
    AdminApi,
    Configuration,
    UpdateContentPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let updateContentPayload: UpdateContentPayload; //
let app: 'customer' | 'vendor' | 'delivery'; //The app to update the privacy policy for. (default to undefined)

const { status, data } = await apiInstance.contentPrivacyPolicyAppPatch(
    updateContentPayload,
    app
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateContentPayload** | **UpdateContentPayload**|  | |
| **app** | [**&#39;customer&#39; | &#39;vendor&#39; | &#39;delivery&#39;**]**Array<&#39;customer&#39; &#124; &#39;vendor&#39; &#124; &#39;delivery&#39;>** | The app to update the privacy policy for. | defaults to undefined|


### Return type

**Content**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated content. |  -  |
|**400** | Bad request (validation error or invalid app type). |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contentTypePatch**
> Content contentTypePatch(updateContentPayload, )

Creates or updates the content for a given type. Requires admin privileges. The content should be an HTML string.

### Example

```typescript
import {
    AdminApi,
    Configuration,
    UpdateContentPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let updateContentPayload: UpdateContentPayload; //
let type: ContentType; //The type of content to update. (default to undefined)

const { status, data } = await apiInstance.contentTypePatch(
    updateContentPayload,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateContentPayload** | **UpdateContentPayload**|  | |
| **type** | **ContentType** | The type of content to update. | defaults to undefined|


### Return type

**Content**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated content. |  -  |
|**400** | Bad request (validation error). |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customersAdminAllGet**
> customersAdminAllGet()

Retrieves a paginated list of all users with the \'customer\' role. Allows filtering by name, status, amount spent, and creation date. Only accessible by admins.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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
    AdminApi,
    Configuration,
    UpdateUserPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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

# **deliveryPersonsAdminAllGet**
> deliveryPersonsAdminAllGet()

Retrieves a paginated list of all users with the \'delivery_person\' role. Allows filtering by name, status, number of deliveries, and creation date.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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
    AdminApi,
    Configuration,
    UpdateUserPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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

# **faqsIdDelete**
> faqsIdDelete()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let id: string; //The ID of the FAQ to delete. (default to undefined)

const { status, data } = await apiInstance.faqsIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the FAQ to delete. | defaults to undefined|


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
|**204** | FAQ deleted successfully. |  -  |
|**401** | Unauthorized. |  -  |
|**403** | Forbidden. |  -  |
|**404** | FAQ not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **faqsIdPatch**
> Faq faqsIdPatch(updateFaqPayload, )


### Example

```typescript
import {
    AdminApi,
    Configuration,
    UpdateFaqPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let updateFaqPayload: UpdateFaqPayload; //
let id: string; //The ID of the FAQ to update. (default to undefined)

const { status, data } = await apiInstance.faqsIdPatch(
    updateFaqPayload,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateFaqPayload** | **UpdateFaqPayload**|  | |
| **id** | [**string**] | The ID of the FAQ to update. | defaults to undefined|


### Return type

**Faq**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated FAQ. |  -  |
|**400** | Bad request (validation error). |  -  |
|**401** | Unauthorized. |  -  |
|**403** | Forbidden. |  -  |
|**404** | FAQ not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **faqsPost**
> Faq faqsPost(createFaqPayload)


### Example

```typescript
import {
    AdminApi,
    Configuration,
    CreateFaqPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let createFaqPayload: CreateFaqPayload; //

const { status, data } = await apiInstance.faqsPost(
    createFaqPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFaqPayload** | **CreateFaqPayload**|  | |


### Return type

**Faq**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created FAQ. |  -  |
|**400** | Bad request (validation error). |  -  |
|**401** | Unauthorized. |  -  |
|**403** | Forbidden. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderAdminAllGet**
> orderAdminAllGet()

Retrieves a paginated list of all orders on the platform. Allows filtering by orderCode, status (pending, in-progress, completed, cancelled), creation date, and customer name. Only accessible by admins.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orderCode: string; //Filter by order code. (optional) (default to undefined)
let status: string; //Filter by order status (pending, in-progress, completed, cancelled) or specific OrderStatus. (optional) (default to undefined)
let customerName: string; //Filter by customer\'s name (case-insensitive). (optional) (default to undefined)
let createdAtStart: string; //Filter orders created on or after this date. (optional) (default to undefined)
let createdAtEnd: string; //Filter orders created on or before this date. (optional) (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let size: number; //Number of items per page. (optional) (default to 20)

const { status, data } = await apiInstance.orderAdminAllGet(
    orderCode,
    status,
    customerName,
    createdAtStart,
    createdAtEnd,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderCode** | [**string**] | Filter by order code. | (optional) defaults to undefined|
| **status** | [**string**] | Filter by order status (pending, in-progress, completed, cancelled) or specific OrderStatus. | (optional) defaults to undefined|
| **customerName** | [**string**] | Filter by customer\&#39;s name (case-insensitive). | (optional) defaults to undefined|
| **createdAtStart** | [**string**] | Filter orders created on or after this date. | (optional) defaults to undefined|
| **createdAtEnd** | [**string**] | Filter orders created on or before this date. | (optional) defaults to undefined|
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
|**200** | A paginated list of orders. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderAdminOrderIdMessagesGet**
> Array<MessageWithRelations> orderAdminOrderIdMessagesGet()

Retrieves the complete conversation history for a specific order. Only accessible by admins.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orderId: string; //The ID of the order. (default to undefined)

const { status, data } = await apiInstance.orderAdminOrderIdMessagesGet(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] | The ID of the order. | defaults to undefined|


### Return type

**Array<MessageWithRelations>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of messages for the order. |  -  |
|**404** | Order not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderAdminOrderIdPatch**
> orderAdminOrderIdPatch(updateOrderPayload, )

Allows an admin to update specific fields of an order to resolve issues or \"un-stuck\" it. Fields that can be updated include `orderStatus`, `paymentStatus`, `shopperId`, `deliveryPersonId`, etc. **Warning**: Changing `orderStatus` to `delivered` will trigger payout logic. 

### Example

```typescript
import {
    AdminApi,
    Configuration,
    UpdateOrderPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let updateOrderPayload: UpdateOrderPayload; //
let orderId: string; //The ID of the order to update. (default to undefined)

const { status, data } = await apiInstance.orderAdminOrderIdPatch(
    updateOrderPayload,
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderPayload** | **UpdateOrderPayload**|  | |
| **orderId** | [**string**] | The ID of the order to update. | defaults to undefined|


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
|**200** | The updated order. |  -  |
|**404** | Order not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderAdminOverviewGet**
> OrderAdminOverviewGet200Response orderAdminOverviewGet()

Retrieves aggregate data about all orders on the platform, such as total orders, total products, in-stock products, and total cancelled orders. Only accessible by admins.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.orderAdminOverviewGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**OrderAdminOverviewGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An object containing the order overview data. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAdminAllGet**
> productAdminAllGet()

Retrieves a paginated list of all base products in the system. Each product includes a count of how many vendors are selling it.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let name: string; //Filter by product name (case-insensitive contains). (optional) (default to undefined)
let categoryId: string; //Filter by a specific category ID. (optional) (default to undefined)
let isAlcohol: boolean; //Filter for products that are alcoholic. (optional) (default to undefined)
let isAgeRestricted: boolean; //Filter for products that are age-restricted. (optional) (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let size: number; //Number of items per page. (optional) (default to 20)

const { status, data } = await apiInstance.productAdminAllGet(
    name,
    categoryId,
    isAlcohol,
    isAgeRestricted,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Filter by product name (case-insensitive contains). | (optional) defaults to undefined|
| **categoryId** | [**string**] | Filter by a specific category ID. | (optional) defaults to undefined|
| **isAlcohol** | [**boolean**] | Filter for products that are alcoholic. | (optional) defaults to undefined|
| **isAgeRestricted** | [**boolean**] | Filter for products that are age-restricted. | (optional) defaults to undefined|
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
|**200** | A paginated list of base products. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAdminOverviewGet**
> ProductOverview productAdminOverviewGet()

Retrieves aggregate data about products, such as the total number of base products and vendor product listings.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.productAdminOverviewGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ProductOverview**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The product overview data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAdminProductIdVendorProductsGet**
> productAdminProductIdVendorProductsGet()

Retrieves a paginated list of all vendor-specific listings for a given base product ID.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let productId: string; //The ID of the base product. (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let size: number; //Number of items per page. (optional) (default to 20)

const { status, data } = await apiInstance.productAdminProductIdVendorProductsGet(
    productId,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | The ID of the base product. | defaults to undefined|
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
|**200** | A paginated list of vendor products. |  -  |
|**404** | Base product not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productIdStatusPatch**
> productIdStatusPatch(productIdStatusPatchRequest, )

Allows an admin to enable or disable a base product by setting its `isActive` flag.

### Example

```typescript
import {
    AdminApi,
    Configuration,
    ProductIdStatusPatchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let productIdStatusPatchRequest: ProductIdStatusPatchRequest; //
let id: string; //The ID of the base product to update. (default to undefined)

const { status, data } = await apiInstance.productIdStatusPatch(
    productIdStatusPatchRequest,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productIdStatusPatchRequest** | **ProductIdStatusPatchRequest**|  | |
| **id** | [**string**] | The ID of the base product to update. | defaults to undefined|


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
|**200** | The updated product with the new status. |  -  |
|**404** | Product not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **staffAdminStaffIdGet**
> staffAdminStaffIdGet()

Retrieves the details of a specific staff member by their user ID. Only accessible by admins.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let staffId: string; //The user ID of the staff member. (default to undefined)

const { status, data } = await apiInstance.staffAdminStaffIdGet(
    staffId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **staffId** | [**string**] | The user ID of the staff member. | defaults to undefined|


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
|**200** | The requested staff member. |  -  |
|**404** | Staff member not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **staffAdminStoreVendorIdGet**
> staffAdminStoreVendorIdGet()

Retrieves a list of all staff members (store_admin, store_shopper) for a given store ID. Only accessible by admins.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let vendorId: string; //The ID of the store. (default to undefined)

const { status, data } = await apiInstance.staffAdminStoreVendorIdGet(
    vendorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vendorId** | [**string**] | The ID of the store. | defaults to undefined|


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
|**200** | A list of staff members for the specified store. |  -  |
|**403** | Forbidden. |  -  |
|**404** | Vendor not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supportAdminExportGet**
> supportAdminExportGet()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let customerName: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let createdAtStart: string; // (optional) (default to undefined)
let createdAtEnd: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.supportAdminExportGet(
    customerName,
    status,
    createdAtStart,
    createdAtEnd
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerName** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|
| **createdAtStart** | [**string**] |  | (optional) defaults to undefined|
| **createdAtEnd** | [**string**] |  | (optional) defaults to undefined|


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

# **supportAdminOverviewGet**
> SupportAdminOverviewGet200Response supportAdminOverviewGet()

Retrieves aggregate data about support tickets, such as total count, open tickets (including in-progress), closed tickets, and resolved tickets. Only accessible by admins.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.supportAdminOverviewGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SupportAdminOverviewGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An object containing the support ticket overview data. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supportTicketsGet**
> PaginatedSupportTickets supportTicketsGet()

Retrieves a paginated list of all support tickets. Requires admin privileges.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let customerName: string; //Filter by customer name (case-insensitive). (optional) (default to undefined)
let status: TicketStatus; //Filter by ticket status. (optional) (default to undefined)
let createdAtStart: string; //Filter tickets created on or after this date. (optional) (default to undefined)
let createdAtEnd: string; //Filter tickets created on or before this date. (optional) (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let size: number; //Number of items per page. (optional) (default to 20)

const { status, data } = await apiInstance.supportTicketsGet(
    customerName,
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
| **customerName** | [**string**] | Filter by customer name (case-insensitive). | (optional) defaults to undefined|
| **status** | **TicketStatus** | Filter by ticket status. | (optional) defaults to undefined|
| **createdAtStart** | [**string**] | Filter tickets created on or after this date. | (optional) defaults to undefined|
| **createdAtEnd** | [**string**] | Filter tickets created on or before this date. | (optional) defaults to undefined|
| **page** | [**number**] | Page number for pagination. | (optional) defaults to 1|
| **size** | [**number**] | Number of items per page. | (optional) defaults to 20|


### Return type

**PaginatedSupportTickets**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A paginated list of support tickets. |  -  |
|**401** | Unauthorized. |  -  |
|**403** | Forbidden. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supportTicketsTicketIdStatusPatch**
> SupportTicket supportTicketsTicketIdStatusPatch(updateSupportTicketStatusPayload, )

Updates the status of a specific support ticket. Requires admin privileges.

### Example

```typescript
import {
    AdminApi,
    Configuration,
    UpdateSupportTicketStatusPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let updateSupportTicketStatusPayload: UpdateSupportTicketStatusPayload; //
let ticketId: string; // (default to undefined)

const { status, data } = await apiInstance.supportTicketsTicketIdStatusPatch(
    updateSupportTicketStatusPayload,
    ticketId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSupportTicketStatusPayload** | **UpdateSupportTicketStatusPayload**|  | |
| **ticketId** | [**string**] |  | defaults to undefined|


### Return type

**SupportTicket**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated support ticket. |  -  |
|**400** | Bad request (e.g., invalid status). |  -  |
|**401** | Unauthorized. |  -  |
|**403** | Forbidden. |  -  |
|**404** | Ticket not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactionsAdminAllGet**
> transactionsAdminAllGet()

Retrieves a paginated list of all transactions on the platform. Allows filtering by orderCode, customer name, status, and creation date. Only accessible by admins.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orderCode: string; //Filter by order code. (optional) (default to undefined)
let customerName: string; //Filter by customer\'s name (case-insensitive). (optional) (default to undefined)
let status: TransactionStatus; //Filter by transaction status. (optional) (default to undefined)
let createdAtStart: string; //Filter transactions created on or after this date. (optional) (default to undefined)
let createdAtEnd: string; //Filter transactions created on or before this date. (optional) (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let size: number; //Number of items per page. (optional) (default to 20)

const { status, data } = await apiInstance.transactionsAdminAllGet(
    orderCode,
    customerName,
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
| **orderCode** | [**string**] | Filter by order code. | (optional) defaults to undefined|
| **customerName** | [**string**] | Filter by customer\&#39;s name (case-insensitive). | (optional) defaults to undefined|
| **status** | **TransactionStatus** | Filter by transaction status. | (optional) defaults to undefined|
| **createdAtStart** | [**string**] | Filter transactions created on or after this date. | (optional) defaults to undefined|
| **createdAtEnd** | [**string**] | Filter transactions created on or before this date. | (optional) defaults to undefined|
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
|**200** | A paginated list of transactions. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactionsAdminExportGet**
> transactionsAdminExportGet()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let search: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let createdAtStart: string; // (optional) (default to undefined)
let createdAtEnd: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.transactionsAdminExportGet(
    search,
    status,
    createdAtStart,
    createdAtEnd
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **search** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|
| **createdAtStart** | [**string**] |  | (optional) defaults to undefined|
| **createdAtEnd** | [**string**] |  | (optional) defaults to undefined|


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

# **transactionsAdminOverviewGet**
> TransactionsAdminOverviewGet200Response transactionsAdminOverviewGet()

Retrieves aggregate financial data for the platform. Total Income is the sum of all paid order amounts. Total Revenue is the sum of service fees from paid orders. Total Expenses is the sum of refunds. Only accessible by admins.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.transactionsAdminOverviewGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TransactionsAdminOverviewGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An object containing the financial overview data. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactionsAdminTransactionIdDownloadReceiptGet**
> string transactionsAdminTransactionIdDownloadReceiptGet()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let transactionId: string; // (default to undefined)

const { status, data } = await apiInstance.transactionsAdminTransactionIdDownloadReceiptGet(
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionId** | [**string**] |  | defaults to undefined|


### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | HTML receipt file. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactionsAdminTransactionIdGet**
> TransactionWithRelations transactionsAdminTransactionIdGet()

Retrieves the full details of a specific transaction by its ID. Only accessible by admins.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let transactionId: string; //The ID of the transaction to retrieve. (default to undefined)

const { status, data } = await apiInstance.transactionsAdminTransactionIdGet(
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionId** | [**string**] | The ID of the transaction to retrieve. | defaults to undefined|


### Return type

**TransactionWithRelations**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested transaction details. |  -  |
|**404** | Transaction not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactionsAdminTransactionIdSendReceiptPost**
> transactionsAdminTransactionIdSendReceiptPost()

Retrieves the details for a transaction, generates an HTML receipt, and sends it to the customer\'s email address. Only accessible by admins.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let transactionId: string; //The ID of the transaction to send a receipt for. (default to undefined)

const { status, data } = await apiInstance.transactionsAdminTransactionIdSendReceiptPost(
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionId** | [**string**] | The ID of the transaction to send a receipt for. | defaults to undefined|


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
|**200** | Receipt sent successfully. |  -  |
|**400** | Bad request (e.g., transaction not linked to an order). |  -  |
|**404** | Transaction or related data not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersAdminExportGet**
> usersAdminExportGet()

Downloads a CSV file containing a list of all admin users.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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

# **usersAdminIdDeactivatePatch**
> usersAdminIdDeactivatePatch()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.usersAdminIdDeactivatePatch(
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
|**200** | The deactivated admin user. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersAdminIdPatch**
> usersAdminIdPatch(updateUserPayload, )


### Example

```typescript
import {
    AdminApi,
    Configuration,
    UpdateUserPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let updateUserPayload: UpdateUserPayload; //
let id: string; // (default to undefined)

const { status, data } = await apiInstance.usersAdminIdPatch(
    updateUserPayload,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserPayload** | **UpdateUserPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


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
|**200** | The updated admin user. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersAdminPost**
> usersAdminPost(body)


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let body: CreateUserPayload; //

const { status, data } = await apiInstance.usersAdminPost(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **CreateUserPayload**|  | |


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
|**201** | The created admin user. |  -  |
|**403** | Forbidden. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersAdminStatsGet**
> UsersAdminStatsGet200Response usersAdminStatsGet()

Retrieves statistics about admin users, including total count and active count.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

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

# **vendorsExportGet**
> File vendorsExportGet()

Exports a list of vendors matching the provided filters to a CSV file.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let name: string; // (optional) (default to undefined)
let userId: string; //Filter by the user who owns the store. (optional) (default to undefined)
let isVerified: boolean; // (optional) (default to undefined)
let isPublished: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.vendorsExportGet(
    name,
    userId,
    isVerified,
    isPublished
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **userId** | [**string**] | Filter by the user who owns the store. | (optional) defaults to undefined|
| **isVerified** | [**boolean**] |  | (optional) defaults to undefined|
| **isPublished** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/csv


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | CSV file download. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vendorsOverviewGet**
> VendorsOverviewGet200Response vendorsOverviewGet()

Retrieves aggregate data about the platform, such as the total number of stores, users, orders, and delivered orders. Only accessible by admins.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.vendorsOverviewGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**VendorsOverviewGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An object containing the overview data. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

