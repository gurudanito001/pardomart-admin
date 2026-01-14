# DashboardApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**dashboardAovGet**](#dashboardaovget) | **GET** /dashboard/aov | Get average order value (Admin)|
|[**dashboardCardsGet**](#dashboardcardsget) | **GET** /dashboard/cards | Get dashboard card metrics (Admin)|
|[**dashboardStatsGet**](#dashboardstatsget) | **GET** /dashboard/stats | Get dashboard statistics for a timeframe (Admin)|
|[**dashboardTransactionsGet**](#dashboardtransactionsget) | **GET** /dashboard/transactions | Get recent transactions (Admin)|

# **dashboardAovGet**
> DashboardAovGet200Response dashboardAovGet()

Calculates the average order value for the specified timeframe.

### Example

```typescript
import {
    DashboardApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardApi(configuration);

let timeframe: 'last7days' | '7d' | 'last1month' | '1m' | 'last3months' | '3m' | 'last1year' | '1y'; //The timeframe filter. (optional) (default to 'last1month')

const { status, data } = await apiInstance.dashboardAovGet(
    timeframe
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeframe** | [**&#39;last7days&#39; | &#39;7d&#39; | &#39;last1month&#39; | &#39;1m&#39; | &#39;last3months&#39; | &#39;3m&#39; | &#39;last1year&#39; | &#39;1y&#39;**]**Array<&#39;last7days&#39; &#124; &#39;7d&#39; &#124; &#39;last1month&#39; &#124; &#39;1m&#39; &#124; &#39;last3months&#39; &#124; &#39;3m&#39; &#124; &#39;last1year&#39; &#124; &#39;1y&#39;>** | The timeframe filter. | (optional) defaults to 'last1month'|


### Return type

**DashboardAovGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Average order value. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dashboardCardsGet**
> DashboardCardsGet200Response dashboardCardsGet()

Retrieves total counts for users, stores, orders, and delivered orders.

### Example

```typescript
import {
    DashboardApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardApi(configuration);

const { status, data } = await apiInstance.dashboardCardsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**DashboardCardsGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dashboard card data. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dashboardStatsGet**
> DashboardStatsGet200Response dashboardStatsGet()

Retrieves statistics like new customers, new stores, stock status, items sold, and revenue for a specific timeframe.

### Example

```typescript
import {
    DashboardApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardApi(configuration);

let timeframe: 'last7days' | '7d' | 'last1month' | '1m' | 'last3months' | '3m' | 'last1year' | '1y'; //The timeframe for the statistics. (optional) (default to 'last1month')

const { status, data } = await apiInstance.dashboardStatsGet(
    timeframe
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeframe** | [**&#39;last7days&#39; | &#39;7d&#39; | &#39;last1month&#39; | &#39;1m&#39; | &#39;last3months&#39; | &#39;3m&#39; | &#39;last1year&#39; | &#39;1y&#39;**]**Array<&#39;last7days&#39; &#124; &#39;7d&#39; &#124; &#39;last1month&#39; &#124; &#39;1m&#39; &#124; &#39;last3months&#39; &#124; &#39;3m&#39; &#124; &#39;last1year&#39; &#124; &#39;1y&#39;>** | The timeframe for the statistics. | (optional) defaults to 'last1month'|


### Return type

**DashboardStatsGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dashboard statistics. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dashboardTransactionsGet**
> DashboardTransactionsGet200Response dashboardTransactionsGet()

Retrieves a list of recent transactions within the specified timeframe.

### Example

```typescript
import {
    DashboardApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardApi(configuration);

let timeframe: 'last7days' | '7d' | 'last1month' | '1m' | 'last3months' | '3m' | 'last1year' | '1y'; //The timeframe filter. (optional) (default to 'last1month')

const { status, data } = await apiInstance.dashboardTransactionsGet(
    timeframe
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeframe** | [**&#39;last7days&#39; | &#39;7d&#39; | &#39;last1month&#39; | &#39;1m&#39; | &#39;last3months&#39; | &#39;3m&#39; | &#39;last1year&#39; | &#39;1y&#39;**]**Array<&#39;last7days&#39; &#124; &#39;7d&#39; &#124; &#39;last1month&#39; &#124; &#39;1m&#39; &#124; &#39;last3months&#39; &#124; &#39;3m&#39; &#124; &#39;last1year&#39; &#124; &#39;1y&#39;>** | The timeframe filter. | (optional) defaults to 'last1month'|


### Return type

**DashboardTransactionsGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Recent transactions. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

