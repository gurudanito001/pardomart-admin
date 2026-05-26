# CreateOrderClientPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendorId** | **string** |  | [default to undefined]
**paymentMethod** | [**PaymentMethods**](PaymentMethods.md) |  | [default to undefined]
**shippingAddressId** | **string** | ID of an existing delivery address. Required if &#x60;deliveryMethod&#x60; is &#x60;delivery_person&#x60;. | [optional] [default to undefined]
**shopperTip** | **number** | Optional. Tip for the shopper. | [optional] [default to undefined]
**deliveryPersonTip** | **number** | Optional. Tip for the delivery person. | [optional] [default to undefined]
**deliveryInstructions** | **string** |  | [optional] [default to undefined]
**orderItems** | [**Array&lt;CreateOrderClientPayloadOrderItemsInner&gt;**](CreateOrderClientPayloadOrderItemsInner.md) |  | [default to undefined]
**shoppingMethod** | [**ShoppingMethod**](ShoppingMethod.md) |  | [default to undefined]
**deliveryMethod** | [**DeliveryMethod**](DeliveryMethod.md) |  | [default to undefined]
**scheduledDeliveryTime** | **string** |  | [optional] [default to undefined]
**useMaxPricesForBudget** | **boolean** | Opt-in flag to calculate the order\&#39;s total authorized amount based on the maximum priced replacements. | [optional] [default to undefined]

## Example

```typescript
import { CreateOrderClientPayload } from './api';

const instance: CreateOrderClientPayload = {
    vendorId,
    paymentMethod,
    shippingAddressId,
    shopperTip,
    deliveryPersonTip,
    deliveryInstructions,
    orderItems,
    shoppingMethod,
    deliveryMethod,
    scheduledDeliveryTime,
    useMaxPricesForBudget,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
