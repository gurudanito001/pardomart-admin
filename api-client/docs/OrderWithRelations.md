# OrderWithRelations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**userId** | **string** |  | [optional] [default to undefined]
**vendorId** | **string** |  | [optional] [default to undefined]
**orderCode** | **string** |  | [optional] [default to undefined]
**pickupOtp** | **string** |  | [optional] [default to undefined]
**subtotal** | **number** |  | [optional] [default to undefined]
**totalAmount** | **number** |  | [optional] [default to undefined]
**budgetAmount** | **number** |  | [optional] [default to undefined]
**deliveryFee** | **number** |  | [optional] [default to undefined]
**serviceFee** | **number** |  | [optional] [default to undefined]
**shoppingFee** | **number** |  | [optional] [default to undefined]
**shopperTip** | **number** |  | [optional] [default to undefined]
**deliveryPersonTip** | **number** |  | [optional] [default to undefined]
**paymentMethod** | [**PaymentMethods**](PaymentMethods.md) |  | [optional] [default to undefined]
**paymentStatus** | [**PaymentStatus**](PaymentStatus.md) |  | [optional] [default to undefined]
**orderStatus** | [**OrderStatus**](OrderStatus.md) |  | [optional] [default to undefined]
**replacementPreference** | **string** |  | [optional] [default to undefined]
**measurementUnit** | **string** |  | [optional] [default to undefined]
**deliveryAddressId** | **string** |  | [optional] [default to undefined]
**deliveryInstructions** | **string** |  | [optional] [default to undefined]
**shopperId** | **string** |  | [optional] [default to undefined]
**deliveryPersonId** | **string** |  | [optional] [default to undefined]
**shoppingMethod** | [**ShoppingMethod**](ShoppingMethod.md) |  | [optional] [default to undefined]
**deliveryMethod** | [**DeliveryMethod**](DeliveryMethod.md) |  | [optional] [default to undefined]
**shoppingStartTime** | **string** |  | [optional] [default to undefined]
**scheduledDeliveryTime** | **string** |  | [optional] [default to undefined]
**actualDeliveryTime** | **string** |  | [optional] [default to undefined]
**pickupOtpVerifiedAt** | **string** |  | [optional] [default to undefined]
**reasonForDecline** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**user** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]
**shopper** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]
**deliveryPerson** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]
**orderItems** | [**Array&lt;OrderItemWithRelations&gt;**](OrderItemWithRelations.md) |  | [optional] [default to undefined]
**vendor** | [**VendorWithDetails**](VendorWithDetails.md) |  | [optional] [default to undefined]
**deliveryAddress** | [**DeliveryAddress**](DeliveryAddress.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderWithRelations } from './api';

const instance: OrderWithRelations = {
    id,
    userId,
    vendorId,
    orderCode,
    pickupOtp,
    subtotal,
    totalAmount,
    budgetAmount,
    deliveryFee,
    serviceFee,
    shoppingFee,
    shopperTip,
    deliveryPersonTip,
    paymentMethod,
    paymentStatus,
    orderStatus,
    replacementPreference,
    measurementUnit,
    deliveryAddressId,
    deliveryInstructions,
    shopperId,
    deliveryPersonId,
    shoppingMethod,
    deliveryMethod,
    shoppingStartTime,
    scheduledDeliveryTime,
    actualDeliveryTime,
    pickupOtpVerifiedAt,
    reasonForDecline,
    createdAt,
    updatedAt,
    user,
    shopper,
    deliveryPerson,
    orderItems,
    vendor,
    deliveryAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
