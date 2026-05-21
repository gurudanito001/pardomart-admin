# UpdateSupportTicketPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**category** | [**TicketCategory**](TicketCategory.md) |  | [optional] [default to undefined]
**image** | **string** | Base64 encoded image. | [optional] [default to undefined]
**meta** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateSupportTicketPayload } from './api';

const instance: UpdateSupportTicketPayload = {
    title,
    description,
    category,
    image,
    meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
