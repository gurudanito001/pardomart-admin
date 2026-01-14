# Notification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | UUID | [optional] [default to undefined]
**userId** | **string** |  | [optional] [default to undefined]
**type** | [**NotificationType**](NotificationType.md) |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**body** | **string** |  | [optional] [default to undefined]
**isRead** | **boolean** |  | [optional] [default to undefined]
**meta** | **{ [key: string]: any; }** | To store related IDs like orderId, etc. for deep linking | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Notification } from './api';

const instance: Notification = {
    id,
    userId,
    type,
    title,
    body,
    isRead,
    meta,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
