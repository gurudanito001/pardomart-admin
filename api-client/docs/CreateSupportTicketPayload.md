# CreateSupportTicketPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**category** | [**TicketCategory**](TicketCategory.md) |  | [default to undefined]
**meta** | **object** | Optional. e.g., { \&quot;orderId\&quot;: \&quot;uuid-goes-here\&quot; } | [optional] [default to undefined]
**image** | **string** | Optional. Base64 encoded image. | [optional] [default to undefined]

## Example

```typescript
import { CreateSupportTicketPayload } from './api';

const instance: CreateSupportTicketPayload = {
    title,
    description,
    category,
    meta,
    image,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
