# TransactionApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**transactionsAdminAllGet**](#transactionsadminallget) | **GET** /transactions/admin/all | Get a paginated list of all transactions (Admin)|
|[**transactionsAdminExportGet**](#transactionsadminexportget) | **GET** /transactions/admin/export | Export transactions to CSV (Admin)|
|[**transactionsAdminOverviewGet**](#transactionsadminoverviewget) | **GET** /transactions/admin/overview | Get platform-wide transaction overview (Admin)|
|[**transactionsAdminTransactionIdDownloadReceiptGet**](#transactionsadmintransactioniddownloadreceiptget) | **GET** /transactions/admin/{transactionId}/download-receipt | Download receipt for a transaction (Admin)|
|[**transactionsAdminTransactionIdGet**](#transactionsadmintransactionidget) | **GET** /transactions/admin/{transactionId} | Get a single transaction by ID (Admin)|
|[**transactionsAdminTransactionIdSendReceiptPost**](#transactionsadmintransactionidsendreceiptpost) | **POST** /transactions/admin/{transactionId}/send-receipt | Generate and send a receipt for a transaction (Admin)|
|[**transactionsCreatePaymentIntentPost**](#transactionscreatepaymentintentpost) | **POST** /transactions/create-payment-intent | Create a Payment Intent for an order|
|[**transactionsMeGet**](#transactionsmeget) | **GET** /transactions/me | Get my transaction history|
|[**transactionsMePaymentMethodsGet**](#transactionsmepaymentmethodsget) | **GET** /transactions/me/payment-methods | Get my saved payment methods|
|[**transactionsMePaymentMethodsPaymentMethodIdDelete**](#transactionsmepaymentmethodspaymentmethodiddelete) | **DELETE** /transactions/me/payment-methods/{paymentMethodId} | Delete a saved payment method|
|[**transactionsSetupIntentPost**](#transactionssetupintentpost) | **POST** /transactions/setup-intent | Create a Setup Intent to save a new payment method|
|[**transactionsSimulatePaymentPost**](#transactionssimulatepaymentpost) | **POST** /transactions/simulate-payment | Simulate a payment (Dev/Test)|
|[**transactionsVendorGet**](#transactionsvendorget) | **GET** /transactions/vendor | Get payment transactions for a vendor user|

# **transactionsAdminAllGet**
> transactionsAdminAllGet()

Retrieves a paginated list of all transactions on the platform. Allows filtering by orderCode, customer name, status, and creation date. Only accessible by admins.

### Example

```typescript
import {
    TransactionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

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
    TransactionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

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
    TransactionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

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
    TransactionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

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
    TransactionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

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
    TransactionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

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

# **transactionsCreatePaymentIntentPost**
> TransactionsCreatePaymentIntentPost200Response transactionsCreatePaymentIntentPost(transactionsCreatePaymentIntentPostRequest)


### Example

```typescript
import {
    TransactionApi,
    Configuration,
    TransactionsCreatePaymentIntentPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

let transactionsCreatePaymentIntentPostRequest: TransactionsCreatePaymentIntentPostRequest; //

const { status, data } = await apiInstance.transactionsCreatePaymentIntentPost(
    transactionsCreatePaymentIntentPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionsCreatePaymentIntentPostRequest** | **TransactionsCreatePaymentIntentPostRequest**|  | |


### Return type

**TransactionsCreatePaymentIntentPost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment Intent created successfully. |  -  |
|**400** | Bad Request (e.g., order already paid). |  -  |
|**403** | Forbidden. |  -  |
|**404** | Order or User not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactionsMeGet**
> Array<TransactionWithRelations> transactionsMeGet()


### Example

```typescript
import {
    TransactionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

const { status, data } = await apiInstance.transactionsMeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<TransactionWithRelations>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of the user\&#39;s transactions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactionsMePaymentMethodsGet**
> Array<SavedPaymentMethod> transactionsMePaymentMethodsGet()


### Example

```typescript
import {
    TransactionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

const { status, data } = await apiInstance.transactionsMePaymentMethodsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<SavedPaymentMethod>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of the user\&#39;s saved payment methods. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactionsMePaymentMethodsPaymentMethodIdDelete**
> transactionsMePaymentMethodsPaymentMethodIdDelete()


### Example

```typescript
import {
    TransactionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

let paymentMethodId: string; //The Stripe PaymentMethod ID (pm_...). (default to undefined)

const { status, data } = await apiInstance.transactionsMePaymentMethodsPaymentMethodIdDelete(
    paymentMethodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentMethodId** | [**string**] | The Stripe PaymentMethod ID (pm_...). | defaults to undefined|


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
|**204** | Payment method detached successfully. |  -  |
|**403** | Forbidden. |  -  |
|**404** | Payment method not found for this user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactionsSetupIntentPost**
> TransactionsCreatePaymentIntentPost200Response transactionsSetupIntentPost()

Creates a Setup Intent to be used on the client-side for saving a new card for future use.

### Example

```typescript
import {
    TransactionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

const { status, data } = await apiInstance.transactionsSetupIntentPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TransactionsCreatePaymentIntentPost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Setup Intent created successfully. |  -  |
|**401** | Unauthorized. |  -  |
|**404** | User not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactionsSimulatePaymentPost**
> transactionsSimulatePaymentPost(transactionsCreatePaymentIntentPostRequest)


### Example

```typescript
import {
    TransactionApi,
    Configuration,
    TransactionsCreatePaymentIntentPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

let transactionsCreatePaymentIntentPostRequest: TransactionsCreatePaymentIntentPostRequest; //

const { status, data } = await apiInstance.transactionsSimulatePaymentPost(
    transactionsCreatePaymentIntentPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionsCreatePaymentIntentPostRequest** | **TransactionsCreatePaymentIntentPostRequest**|  | |


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
|**200** | Payment simulated successfully. |  -  |
|**400** | Bad request. |  -  |
|**404** | Order not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactionsVendorGet**
> Array<TransactionWithRelations> transactionsVendorGet()

Retrieves a list of all payment-related transactions for stores owned by the authenticated vendor user. Can be filtered by a specific store.

### Example

```typescript
import {
    TransactionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

let vendorId: string; //Optional. The ID of a specific store (vendor) to filter payments for. (optional) (default to undefined)

const { status, data } = await apiInstance.transactionsVendorGet(
    vendorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vendorId** | [**string**] | Optional. The ID of a specific store (vendor) to filter payments for. | (optional) defaults to undefined|


### Return type

**Array<TransactionWithRelations>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of payment transactions. |  -  |
|**403** | Forbidden. User is not a vendor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

