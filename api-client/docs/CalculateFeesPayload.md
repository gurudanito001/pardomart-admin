# CalculateFeesPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderItems** | [**Array&lt;CalculateFeesPayloadOrderItemsInner&gt;**](CalculateFeesPayloadOrderItemsInner.md) |  | [default to undefined]
**vendorId** | **string** |  | [default to undefined]
**deliveryAddressId** | **string** | Required if deliveryType is not \&#39;customer_pickup\&#39;. | [default to undefined]
**deliveryType** | [**DeliveryMethod**](DeliveryMethod.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CalculateFeesPayload } from './api';

const instance: CalculateFeesPayload = {
    orderItems,
    vendorId,
    deliveryAddressId,
    deliveryType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
