# UpdateProductBasePayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**images** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**attributes** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**meta** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**categoryIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**tagIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**weight** | **number** |  | [optional] [default to undefined]
**weightUnit** | **string** |  | [optional] [default to undefined]
**isAlcohol** | **boolean** |  | [optional] [default to undefined]
**isAgeRestricted** | **boolean** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateProductBasePayload } from './api';

const instance: UpdateProductBasePayload = {
    barcode,
    name,
    description,
    images,
    attributes,
    meta,
    categoryIds,
    tagIds,
    weight,
    weightUnit,
    isAlcohol,
    isAgeRestricted,
    isActive,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
