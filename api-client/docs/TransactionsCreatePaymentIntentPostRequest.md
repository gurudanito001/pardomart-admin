# TransactionsCreatePaymentIntentPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Optional. The specific amount to charge for this payment intent. If not provided, the full order budget will be used. Useful for partial payments (e.g., EBT). | [optional] [default to undefined]
**orderId** | **string** |  | [default to undefined]
**paymentType** | **string** | Optional. Specifies the type of payment. Use \&#39;ebt\&#39; to configure the intent for EBT processing, otherwise defaults to standard automatic payment methods. | [optional] [default to undefined]

## Example

```typescript
import { TransactionsCreatePaymentIntentPostRequest } from './api';

const instance: TransactionsCreatePaymentIntentPostRequest = {
    amount,
    orderId,
    paymentType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
