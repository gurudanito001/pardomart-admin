# ReturnsPostRequestItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendorProductId** | **string** | The ID of the vendor product being returned. | [default to undefined]
**quantity** | **number** | The quantity of the product being returned. | [default to undefined]
**reason** | **string** | Optional reason for returning this specific item. | [optional] [default to undefined]
**isEbtEligible** | **boolean** | Whether the item was EBT eligible at the time of purchase (snapshotted). | [optional] [default to undefined]

## Example

```typescript
import { ReturnsPostRequestItemsInner } from './api';

const instance: ReturnsPostRequestItemsInner = {
    vendorProductId,
    quantity,
    reason,
    isEbtEligible,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
