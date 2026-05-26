# WalletApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**walletMeGet**](#walletmeget) | **GET** /wallet/me | Get the authenticated user\&#39;s wallet|
|[**walletMeTransactionsGet**](#walletmetransactionsget) | **GET** /wallet/me/transactions | Get the authenticated user\&#39;s transaction history|
|[**walletWithdrawPost**](#walletwithdrawpost) | **POST** /wallet/withdraw | Request a withdrawal from wallet to bank account|

# **walletMeGet**
> Wallet walletMeGet()

Retrieves the wallet details and balance for the currently authenticated user. If a wallet does not exist, it will be created automatically.

### Example

```typescript
import {
    WalletApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

const { status, data } = await apiInstance.walletMeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Wallet**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The user\&#39;s wallet. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **walletMeTransactionsGet**
> Array<TransactionWithRelations> walletMeTransactionsGet()

Retrieves a list of all financial transactions for the authenticated user.

### Example

```typescript
import {
    WalletApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

const { status, data } = await apiInstance.walletMeTransactionsGet();
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
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **walletWithdrawPost**
> walletWithdrawPost(walletWithdrawPostRequest)

Submits a request to cash out earnings. Deducts the balance immediately and creates a PENDING transaction until processed by an admin.

### Example

```typescript
import {
    WalletApi,
    Configuration,
    WalletWithdrawPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let walletWithdrawPostRequest: WalletWithdrawPostRequest; //

const { status, data } = await apiInstance.walletWithdrawPost(
    walletWithdrawPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletWithdrawPostRequest** | **WalletWithdrawPostRequest**|  | |


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
|**200** | Withdrawal requested successfully. |  -  |
|**400** | Bad Request (e.g., insufficient funds). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

