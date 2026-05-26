# CreateCategoryPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**parentId** | **string** | The ID of the parent category, if this is a sub-category. | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**imageUrl** | **string** | Image URL or base64 encoded string | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateCategoryPayload } from './api';

const instance: CreateCategoryPayload = {
    name,
    parentId,
    type,
    imageUrl,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
