# OrderHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**orderId** | **string** |  | [optional] [default to undefined]
**status** | [**OrderStatus**](OrderStatus.md) |  | [optional] [default to undefined]
**changedBy** | **string** |  | [optional] [default to undefined]
**notes** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**user** | [**OrderHistoryUser**](OrderHistoryUser.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderHistory } from './api';

const instance: OrderHistory = {
    id,
    orderId,
    status,
    changedBy,
    notes,
    createdAt,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
