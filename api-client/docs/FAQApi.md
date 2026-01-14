# FAQApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**faqsGet**](#faqsget) | **GET** /faqs | Get all active FAQs|
|[**faqsIdDelete**](#faqsiddelete) | **DELETE** /faqs/{id} | Delete an FAQ (Admin)|
|[**faqsIdPatch**](#faqsidpatch) | **PATCH** /faqs/{id} | Update an FAQ (Admin)|
|[**faqsPost**](#faqspost) | **POST** /faqs | Create a new FAQ (Admin)|

# **faqsGet**
> Array<Faq> faqsGet()


### Example

```typescript
import {
    FAQApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FAQApi(configuration);

let question: string; //Filter FAQs by a search term in the question (case-insensitive). (optional) (default to undefined)
let answer: string; //Filter FAQs by a search term in the answer (case-insensitive). (optional) (default to undefined)

const { status, data } = await apiInstance.faqsGet(
    question,
    answer
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **question** | [**string**] | Filter FAQs by a search term in the question (case-insensitive). | (optional) defaults to undefined|
| **answer** | [**string**] | Filter FAQs by a search term in the answer (case-insensitive). | (optional) defaults to undefined|


### Return type

**Array<Faq>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of active FAQs, ordered by sortOrder. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **faqsIdDelete**
> faqsIdDelete()


### Example

```typescript
import {
    FAQApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FAQApi(configuration);

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
    FAQApi,
    Configuration,
    UpdateFaqPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new FAQApi(configuration);

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
    FAQApi,
    Configuration,
    CreateFaqPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new FAQApi(configuration);

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

