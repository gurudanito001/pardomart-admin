# OrderApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**feesCalculateFeesPost**](#feescalculatefeespost) | **POST** /fees/calculate-fees | Calculate the total estimated cost for an order|
|[**orderAdminAllGet**](#orderadminallget) | **GET** /order/admin/all | Get a paginated list of all orders (Admin)|
|[**orderAdminOrderIdMessagesGet**](#orderadminorderidmessagesget) | **GET** /order/admin/{orderId}/messages | Get all messages for an order (Admin)|
|[**orderAdminOrderIdPatch**](#orderadminorderidpatch) | **PATCH** /order/admin/{orderId} | Update an order\&#39;s details (Admin)|
|[**orderAdminOverviewGet**](#orderadminoverviewget) | **GET** /order/admin/overview | Get platform-wide order overview data (Admin)|
|[**orderDeliverySlotsGet**](#orderdeliveryslotsget) | **GET** /order/delivery-slots | Get available delivery time slots|
|[**orderIdGet**](#orderidget) | **GET** /order/{id} | Get an order by its ID|
|[**orderIdPatch**](#orderidpatch) | **PATCH** /order/{id} | Update an order|
|[**orderIdStatusPatch**](#orderidstatuspatch) | **PATCH** /order/{id}/status | Update the status of an order|
|[**orderIdVerifyPickupPost**](#orderidverifypickuppost) | **POST** /order/{id}/verify-pickup | Verify order pickup with an OTP|
|[**orderOrderIdAcceptPatch**](#orderorderidacceptpatch) | **PATCH** /order/{orderId}/accept | Accept a pending order|
|[**orderOrderIdDeclinePatch**](#orderorderiddeclinepatch) | **PATCH** /order/{orderId}/decline | Decline a pending order|
|[**orderOrderIdItemsItemIdRespondToReplacementPatch**](#orderorderiditemsitemidrespondtoreplacementpatch) | **PATCH** /order/{orderId}/items/{itemId}/respond-to-replacement | Respond to a suggested item replacement|
|[**orderOrderIdItemsItemIdUpdateShoppingStatusPatch**](#orderorderiditemsitemidupdateshoppingstatuspatch) | **PATCH** /order/{orderId}/items/{itemId}/update-shopping-status | Update the shopping status of an order item|
|[**orderOrderIdMessagesGet**](#orderorderidmessagesget) | **GET** /order/{orderId}/messages | Get messages for an order|
|[**orderOrderIdMessagesPost**](#orderorderidmessagespost) | **POST** /order/{orderId}/messages | Send a message related to an order|
|[**orderOrderIdMessagesReadPatch**](#orderorderidmessagesreadpatch) | **PATCH** /order/{orderId}/messages/read | Mark messages as read|
|[**orderOrderIdStartShoppingPatch**](#orderorderidstartshoppingpatch) | **PATCH** /order/{orderId}/start-shopping | Mark an order as \&#39;currently shopping\&#39;|
|[**orderOrderIdTipPatch**](#orderorderidtippatch) | **PATCH** /order/{orderId}/tip | Add or update a tip for an order|
|[**orderPost**](#orderpost) | **POST** /order | Create an order from a client payload|
|[**orderUserMeGet**](#orderusermeget) | **GET** /order/user/me | Get all orders for the authenticated user|
|[**orderVendorGet**](#ordervendorget) | **GET** /order/vendor | Get orders based on user role (Vendor, Store Admin, or Store Shopper)|
|[**orderVendorOrdersGet**](#ordervendorordersget) | **GET** /order/vendorOrders | Get orders for a vendor\&#39;s dashboard|
|[**ordersOrderIdDeliveryLocationPost**](#ordersorderiddeliverylocationpost) | **POST** /orders/{orderId}/delivery-location | Add a location point for a delivery person|
|[**ordersOrderIdDeliveryPathGet**](#ordersorderiddeliverypathget) | **GET** /orders/{orderId}/delivery-path | Get the delivery path for an order|

# **feesCalculateFeesPost**
> CalculateFeesResponse feesCalculateFeesPost(calculateFeesPayload)


### Example

```typescript
import {
    OrderApi,
    Configuration,
    CalculateFeesPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

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

# **orderAdminAllGet**
> orderAdminAllGet()

Retrieves a paginated list of all orders on the platform. Allows filtering by orderCode, status, creation date, and customer name. Only accessible by admins.

### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let orderCode: string; //Filter by order code. (optional) (default to undefined)
let status: OrderStatus; //Filter by order status. (optional) (default to undefined)
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
| **status** | **OrderStatus** | Filter by order status. | (optional) defaults to undefined|
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
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

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
    OrderApi,
    Configuration,
    UpdateOrderPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

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

Retrieves aggregate data about all orders on the platform, such as total orders, total products ordered, and total cancelled orders. Only accessible by admins.

### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

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

# **orderDeliverySlotsGet**
> Array<DeliverySlot> orderDeliverySlotsGet()


### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let vendorId: string; //The ID of the vendor. (default to undefined)
let deliveryMethod: DeliveryMethod; //The delivery method for the order. (default to undefined)

const { status, data } = await apiInstance.orderDeliverySlotsGet(
    vendorId,
    deliveryMethod
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vendorId** | [**string**] | The ID of the vendor. | defaults to undefined|
| **deliveryMethod** | **DeliveryMethod** | The delivery method for the order. | defaults to undefined|


### Return type

**Array<DeliverySlot>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of available delivery dates and time slots. |  -  |
|**400** | Bad request due to missing or invalid parameters. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderIdGet**
> VendorOrder orderIdGet()


### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let id: string; //The ID of the order to retrieve. (default to undefined)

const { status, data } = await apiInstance.orderIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the order to retrieve. | defaults to undefined|


### Return type

**VendorOrder**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested order, with vendor distance and rating included. |  -  |
|**404** | Order not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderIdPatch**
> Order orderIdPatch(updateOrderPayload, )


### Example

```typescript
import {
    OrderApi,
    Configuration,
    UpdateOrderPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let updateOrderPayload: UpdateOrderPayload; //
let id: string; //The ID of the order to update. (default to undefined)

const { status, data } = await apiInstance.orderIdPatch(
    updateOrderPayload,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderPayload** | **UpdateOrderPayload**|  | |
| **id** | [**string**] | The ID of the order to update. | defaults to undefined|


### Return type

**Order**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated order. |  -  |
|**404** | Order not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderIdStatusPatch**
> Order orderIdStatusPatch(updateOrderStatusPayload, )


### Example

```typescript
import {
    OrderApi,
    Configuration,
    UpdateOrderStatusPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let updateOrderStatusPayload: UpdateOrderStatusPayload; //
let id: string; //The ID of the order to update. (default to undefined)

const { status, data } = await apiInstance.orderIdStatusPatch(
    updateOrderStatusPayload,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderStatusPayload** | **UpdateOrderStatusPayload**|  | |
| **id** | [**string**] | The ID of the order to update. | defaults to undefined|


### Return type

**Order**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated order. |  -  |
|**404** | Order not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderIdVerifyPickupPost**
> orderIdVerifyPickupPost(orderIdVerifyPickupPostRequest, )

Allows a vendor or their staff to verify an order for pickup by providing a 6-digit OTP. Upon successful verification, the order status is automatically transitioned. - If `deliveryMethod` is `customer_pickup`, status changes from `ready_for_pickup` to `picked_up_by_customer`. - If `deliveryMethod` is `delivery_person`, status changes from `ready_for_delivery` to `en_route`. 

### Example

```typescript
import {
    OrderApi,
    Configuration,
    OrderIdVerifyPickupPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let orderIdVerifyPickupPostRequest: OrderIdVerifyPickupPostRequest; //
let id: string; //The ID of the order to verify. (default to undefined)

const { status, data } = await apiInstance.orderIdVerifyPickupPost(
    orderIdVerifyPickupPostRequest,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderIdVerifyPickupPostRequest** | **OrderIdVerifyPickupPostRequest**|  | |
| **id** | [**string**] | The ID of the order to verify. | defaults to undefined|


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
|**200** | The updated order after successful verification. |  -  |
|**400** | Invalid OTP or order not in a verifiable state. |  -  |
|**403** | User not authorized to perform this action. |  -  |
|**404** | Order not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderOrderIdAcceptPatch**
> Order orderOrderIdAcceptPatch()


### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let orderId: string; //The ID of the order to accept. (default to undefined)

const { status, data } = await apiInstance.orderOrderIdAcceptPatch(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] | The ID of the order to accept. | defaults to undefined|


### Return type

**Order**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The accepted order. |  -  |
|**400** | Bad request or order cannot be accepted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderOrderIdDeclinePatch**
> Order orderOrderIdDeclinePatch()


### Example

```typescript
import {
    OrderApi,
    Configuration,
    DeclineOrderPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let orderId: string; //The ID of the order to decline. (default to undefined)
let declineOrderPayload: DeclineOrderPayload; // (optional)

const { status, data } = await apiInstance.orderOrderIdDeclinePatch(
    orderId,
    declineOrderPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **declineOrderPayload** | **DeclineOrderPayload**|  | |
| **orderId** | [**string**] | The ID of the order to decline. | defaults to undefined|


### Return type

**Order**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The declined order. |  -  |
|**400** | Bad request or order cannot be declined. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderOrderIdItemsItemIdRespondToReplacementPatch**
> OrderItemWithRelations orderOrderIdItemsItemIdRespondToReplacementPatch(respondToReplacementPayload, )

Allows a customer to approve or reject a replacement suggested by the shopper.

### Example

```typescript
import {
    OrderApi,
    Configuration,
    RespondToReplacementPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let respondToReplacementPayload: RespondToReplacementPayload; //
let orderId: string; // (default to undefined)
let itemId: string; // (default to undefined)

const { status, data } = await apiInstance.orderOrderIdItemsItemIdRespondToReplacementPatch(
    respondToReplacementPayload,
    orderId,
    itemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **respondToReplacementPayload** | **RespondToReplacementPayload**|  | |
| **orderId** | [**string**] |  | defaults to undefined|
| **itemId** | [**string**] |  | defaults to undefined|


### Return type

**OrderItemWithRelations**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated order item. |  -  |
|**400** | Bad request (e.g., no replacement was suggested). |  -  |
|**403** | Forbidden (user does not own this order). |  -  |
|**404** | Order or item not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderOrderIdItemsItemIdUpdateShoppingStatusPatch**
> OrderItemWithRelations orderOrderIdItemsItemIdUpdateShoppingStatusPatch(updateOrderItemShoppingStatusPayload, )

Allows the assigned shopper or delivery person to update an item\'s status during shopping (e.g., found, not found, suggest replacement).

### Example

```typescript
import {
    OrderApi,
    Configuration,
    UpdateOrderItemShoppingStatusPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let updateOrderItemShoppingStatusPayload: UpdateOrderItemShoppingStatusPayload; //
let orderId: string; // (default to undefined)
let itemId: string; // (default to undefined)

const { status, data } = await apiInstance.orderOrderIdItemsItemIdUpdateShoppingStatusPatch(
    updateOrderItemShoppingStatusPayload,
    orderId,
    itemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderItemShoppingStatusPayload** | **UpdateOrderItemShoppingStatusPayload**|  | |
| **orderId** | [**string**] |  | defaults to undefined|
| **itemId** | [**string**] |  | defaults to undefined|


### Return type

**OrderItemWithRelations**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated order item. |  -  |
|**400** | Bad request (e.g., invalid payload). |  -  |
|**403** | Forbidden (user is not the assigned shopper). |  -  |
|**404** | Order or item not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderOrderIdMessagesGet**
> Array<MessageWithRelations> orderOrderIdMessagesGet()

Retrieves the conversation history for a specific order. The user must be a participant in the order (customer, shopper, or delivery person).

### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

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
    OrderApi,
    Configuration,
    OrderOrderIdMessagesPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

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
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

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

# **orderOrderIdStartShoppingPatch**
> Order orderOrderIdStartShoppingPatch()


### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let orderId: string; //The ID of the order to start shopping for. (default to undefined)

const { status, data } = await apiInstance.orderOrderIdStartShoppingPatch(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] | The ID of the order to start shopping for. | defaults to undefined|


### Return type

**Order**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated order. |  -  |
|**400** | Bad request or shopping cannot be started for this order. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderOrderIdTipPatch**
> Order orderOrderIdTipPatch(updateTipPayload, )

Allows a customer to add or update tips for the shopper and/or delivery person after an order has been placed. This will recalculate the order\'s total amount.

### Example

```typescript
import {
    OrderApi,
    Configuration,
    UpdateTipPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let updateTipPayload: UpdateTipPayload; //
let orderId: string; //The ID of the order to add a tip to. (default to undefined)

const { status, data } = await apiInstance.orderOrderIdTipPatch(
    updateTipPayload,
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTipPayload** | **UpdateTipPayload**|  | |
| **orderId** | [**string**] | The ID of the order to add a tip to. | defaults to undefined|


### Return type

**Order**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated order with the new tip amount. |  -  |
|**400** | Bad request (e.g., invalid tip amount). |  -  |
|**401** | Unauthorized. |  -  |
|**403** | Forbidden (user does not own this order). |  -  |
|**404** | Order not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderPost**
> VendorOrder orderPost(createOrderClientPayload)

Creates a new order based on a payload sent from the client, which includes all order items and delivery details. This endpoint is used when the cart state is managed on the client-side.

### Example

```typescript
import {
    OrderApi,
    Configuration,
    CreateOrderClientPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let createOrderClientPayload: CreateOrderClientPayload; //

const { status, data } = await apiInstance.orderPost(
    createOrderClientPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOrderClientPayload** | **CreateOrderClientPayload**|  | |


### Return type

**VendorOrder**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created order. |  -  |
|**400** | Bad request due to invalid input (e.g., missing fields, invalid time, item out of stock). |  -  |
|**401** | Unauthorized. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderUserMeGet**
> Array<VendorOrder> orderUserMeGet()


### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

const { status, data } = await apiInstance.orderUserMeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<VendorOrder>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of the user\&#39;s orders. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderVendorGet**
> Array<Order> orderVendorGet()

Retrieves a list of orders with role-based access: - **Vendor**: Can see all orders from all their stores. Can filter by `vendorId` and/or `status`. - **Store Admin**: Can only see orders from their assigned store. - **Store Shopper**: Can only see orders assigned to them (`shopperId` matches their user ID) within their store. 

### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let vendorId: string; //Optional. For Vendors, filters orders by a specific store ID. Ignored for staff roles. (optional) (default to undefined)
let status: OrderStatus; //Optional. Filter orders by a specific status. (optional) (default to undefined)

const { status, data } = await apiInstance.orderVendorGet(
    vendorId,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vendorId** | [**string**] | Optional. For Vendors, filters orders by a specific store ID. Ignored for staff roles. | (optional) defaults to undefined|
| **status** | **OrderStatus** | Optional. Filter orders by a specific status. | (optional) defaults to undefined|


### Return type

**Array<Order>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of orders matching the criteria. |  -  |
|**403** | Forbidden if the user tries to access a vendor they do not own. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderVendorOrdersGet**
> Array<VendorOrder> orderVendorOrdersGet()


### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let status: OrderStatus; //Optional. Filter orders by a specific status. (optional) (default to undefined)

const { status, data } = await apiInstance.orderVendorOrdersGet(
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | **OrderStatus** | Optional. Filter orders by a specific status. | (optional) defaults to undefined|


### Return type

**Array<VendorOrder>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of orders for the vendor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ordersOrderIdDeliveryLocationPost**
> DeliveryPersonLocation ordersOrderIdDeliveryLocationPost(ordersOrderIdDeliveryLocationPostRequest, )

Logs the current geographic coordinates of the delivery person for a specific order. This should be called periodically by the delivery person\'s application. Only the assigned delivery person for the order can post a location.

### Example

```typescript
import {
    OrderApi,
    Configuration,
    OrdersOrderIdDeliveryLocationPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let ordersOrderIdDeliveryLocationPostRequest: OrdersOrderIdDeliveryLocationPostRequest; //
let orderId: string; //The ID of the order being delivered. (default to undefined)

const { status, data } = await apiInstance.ordersOrderIdDeliveryLocationPost(
    ordersOrderIdDeliveryLocationPostRequest,
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ordersOrderIdDeliveryLocationPostRequest** | **OrdersOrderIdDeliveryLocationPostRequest**|  | |
| **orderId** | [**string**] | The ID of the order being delivered. | defaults to undefined|


### Return type

**DeliveryPersonLocation**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Location successfully logged. |  -  |
|**403** | Forbidden. User is not the assigned delivery person for this order. |  -  |
|**404** | Order not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ordersOrderIdDeliveryPathGet**
> Array<DeliveryPersonLocation> ordersOrderIdDeliveryPathGet()

Retrieves the historical path of the delivery person for a specific order. This can be used to display the route on a map. Accessible by the customer who placed the order, the assigned delivery person, or an admin.

### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let orderId: string; //The ID of the order to retrieve the path for. (default to undefined)

const { status, data } = await apiInstance.ordersOrderIdDeliveryPathGet(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] | The ID of the order to retrieve the path for. | defaults to undefined|


### Return type

**Array<DeliveryPersonLocation>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An array of location points, sorted by time. An empty array is returned if no path data exists yet. |  -  |
|**403** | Forbidden. User is not authorized to view this path. |  -  |
|**404** | Order not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

