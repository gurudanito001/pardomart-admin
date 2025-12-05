# MessagingApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**orderAdminOrderIdMessagesGet**](#orderadminorderidmessagesget) | **GET** /order/admin/{orderId}/messages | Get all messages for an order (Admin)|
|[**orderOrderIdMessagesGet**](#orderorderidmessagesget) | **GET** /order/{orderId}/messages | Get messages for an order|
|[**orderOrderIdMessagesPost**](#orderorderidmessagespost) | **POST** /order/{orderId}/messages | Send a message related to an order|
|[**orderOrderIdMessagesReadPatch**](#orderorderidmessagesreadpatch) | **PATCH** /order/{orderId}/messages/read | Mark messages as read|

# **orderAdminOrderIdMessagesGet**
> Array<MessageWithRelations> orderAdminOrderIdMessagesGet()

Retrieves the complete conversation history for a specific order. Only accessible by admins.

### Example

```typescript
import {
    MessagingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

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

# **orderOrderIdMessagesGet**
> Array<MessageWithRelations> orderOrderIdMessagesGet()

Retrieves the conversation history for a specific order. The user must be a participant in the order (customer, shopper, or delivery person).

### Example

```typescript
import {
    MessagingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let orderId: string; //The ID of the order. (default to undefined)

const { status, data } = await apiInstance.orderOrderIdMessagesGet(
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
|**401** | Unauthorized. |  -  |
|**403** | Forbidden (user is not a participant in the order). |  -  |
|**404** | Order not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderOrderIdMessagesPost**
> MessageWithRelations orderOrderIdMessagesPost(orderOrderIdMessagesPostRequest, )

Sends a message from the authenticated user to another participant (customer, shopper, or delivery person) of the order.

### Example

```typescript
import {
    MessagingApi,
    Configuration,
    OrderOrderIdMessagesPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let orderOrderIdMessagesPostRequest: OrderOrderIdMessagesPostRequest; //
let orderId: string; //The ID of the order. (default to undefined)

const { status, data } = await apiInstance.orderOrderIdMessagesPost(
    orderOrderIdMessagesPostRequest,
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderOrderIdMessagesPostRequest** | **OrderOrderIdMessagesPostRequest**|  | |
| **orderId** | [**string**] | The ID of the order. | defaults to undefined|


### Return type

**MessageWithRelations**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created message. |  -  |
|**400** | Bad request (e.g., invalid input). |  -  |
|**401** | Unauthorized. |  -  |
|**403** | Forbidden (user is not a participant in the order or trying to message an invalid recipient). |  -  |
|**404** | Order not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderOrderIdMessagesReadPatch**
> OrderOrderIdMessagesReadPatch200Response orderOrderIdMessagesReadPatch()

Marks all unread messages for the authenticated user within a specific order as read. This is typically called when the user opens the chat screen.

### Example

```typescript
import {
    MessagingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let orderId: string; //The ID of the order. (default to undefined)

const { status, data } = await apiInstance.orderOrderIdMessagesReadPatch(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] | The ID of the order. | defaults to undefined|


### Return type

**OrderOrderIdMessagesReadPatch200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The number of messages that were marked as read. |  -  |
|**401** | Unauthorized. |  -  |
|**403** | Forbidden (user is not a participant in the order). |  -  |
|**404** | Order not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

