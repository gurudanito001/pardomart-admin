# SupportTicket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**userId** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**image** | **string** |  | [optional] [default to undefined]
**category** | [**TicketCategory**](TicketCategory.md) |  | [optional] [default to undefined]
**status** | [**TicketStatus**](TicketStatus.md) |  | [optional] [default to undefined]
**meta** | **object** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SupportTicket } from './api';

const instance: SupportTicket = {
    id,
    userId,
    title,
    description,
    image,
    category,
    status,
    meta,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
