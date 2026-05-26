# FeeApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**feesCalculateFeesPost**](#feescalculatefeespost) | **POST** /fees/calculate-fees | Calculate the total estimated cost for an order|
|[**feesCurrentGet**](#feescurrentget) | **GET** /fees/current | Get all current active fees|
|[**feesCurrentTypeGet**](#feescurrenttypeget) | **GET** /fees/current/{type} | Get the current active fee for a specific type|
|[**feesDeactivateTypePatch**](#feesdeactivatetypepatch) | **PATCH** /fees/deactivate/{type} | Deactivate the current active fee of a specific type|
|[**feesIdDelete**](#feesiddelete) | **DELETE** /fees/{id} | Delete a fee by its ID|
|[**feesIdGet**](#feesidget) | **GET** /fees/{id} | Get a fee by its ID (Admin)|
|[**feesIdPatch**](#feesidpatch) | **PATCH** /fees/{id} | Update an existing fee|
|[**feesPost**](#feespost) | **POST** /fees | Create a new fee|

# **feesCalculateFeesPost**
> CalculateFeesResponse feesCalculateFeesPost(calculateFeesPayload)


### Example

```typescript
import {
    FeeApi,
    Configuration,
    CalculateFeesPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new FeeApi(configuration);

let calculateFeesPayload: CalculateFeesPayload; //

const { status, data } = await apiInstance.feesCalculateFeesPost(
    calculateFeesPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calculateFeesPayload** | **CalculateFeesPayload**|  | |


### Return type

**CalculateFeesResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The calculated fees for the order. |  -  |
|**400** | Bad request, invalid payload. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feesCurrentGet**
> Array<Fee> feesCurrentGet()


### Example

```typescript
import {
    FeeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeeApi(configuration);

const { status, data } = await apiInstance.feesCurrentGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Fee>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of all active fees. |  -  |
|**404** | No active fees found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feesCurrentTypeGet**
> Fee feesCurrentTypeGet()


### Example

```typescript
import {
    FeeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeeApi(configuration);

let type: 'delivery' | 'service' | 'shopping'; //The type of fee to retrieve. (default to undefined)

const { status, data } = await apiInstance.feesCurrentTypeGet(
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**&#39;delivery&#39; | &#39;service&#39; | &#39;shopping&#39;**]**Array<&#39;delivery&#39; &#124; &#39;service&#39; &#124; &#39;shopping&#39;>** | The type of fee to retrieve. | defaults to undefined|


### Return type

**Fee**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested active fee. |  -  |
|**400** | Invalid fee type provided. |  -  |
|**404** | No active fee of the specified type was found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feesDeactivateTypePatch**
> Fee feesDeactivateTypePatch()


### Example

```typescript
import {
    FeeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeeApi(configuration);

let type: 'delivery' | 'service' | 'shopping'; //The type of fee to deactivate. (default to undefined)

const { status, data } = await apiInstance.feesDeactivateTypePatch(
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**&#39;delivery&#39; | &#39;service&#39; | &#39;shopping&#39;**]**Array<&#39;delivery&#39; &#124; &#39;service&#39; &#124; &#39;shopping&#39;>** | The type of fee to deactivate. | defaults to undefined|


### Return type

**Fee**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The deactivated fee. |  -  |
|**400** | Invalid fee type provided. |  -  |
|**404** | No active fee of the specified type was found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feesIdDelete**
> Fee feesIdDelete()


### Example

```typescript
import {
    FeeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeeApi(configuration);

let id: string; //The ID of the fee to delete. (default to undefined)

const { status, data } = await apiInstance.feesIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the fee to delete. | defaults to undefined|


### Return type

**Fee**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The deleted fee. |  -  |
|**404** | Fee not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feesIdGet**
> Fee feesIdGet()


### Example

```typescript
import {
    FeeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeeApi(configuration);

let id: string; //The ID of the fee to retrieve. (default to undefined)

const { status, data } = await apiInstance.feesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the fee to retrieve. | defaults to undefined|


### Return type

**Fee**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested fee. |  -  |
|**404** | Fee not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feesIdPatch**
> Fee feesIdPatch(updateFeePayload, )


### Example

```typescript
import {
    FeeApi,
    Configuration,
    UpdateFeePayload
} from './api';

const configuration = new Configuration();
const apiInstance = new FeeApi(configuration);

let updateFeePayload: UpdateFeePayload; //
let id: string; //The ID of the fee to update. (default to undefined)

const { status, data } = await apiInstance.feesIdPatch(
    updateFeePayload,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateFeePayload** | **UpdateFeePayload**|  | |
| **id** | [**string**] | The ID of the fee to update. | defaults to undefined|


### Return type

**Fee**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated fee. |  -  |
|**400** | Bad request, invalid payload. |  -  |
|**404** | Fee not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feesPost**
> Fee feesPost(createFeePayload)


### Example

```typescript
import {
    FeeApi,
    Configuration,
    CreateFeePayload
} from './api';

const configuration = new Configuration();
const apiInstance = new FeeApi(configuration);

let createFeePayload: CreateFeePayload; //

const { status, data } = await apiInstance.feesPost(
    createFeePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFeePayload** | **CreateFeePayload**|  | |


### Return type

**Fee**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created fee. |  -  |
|**400** | Bad request, invalid payload. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

