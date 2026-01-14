# ProductWithRelations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**barcode** | **string** |  | [optional] [default to undefined]
**imageUrl** | **string** |  | [optional] [default to undefined]
**images** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**weight** | **number** |  | [optional] [default to undefined]
**weightUnit** | **string** |  | [optional] [default to undefined]
**attributes** | **object** |  | [optional] [default to undefined]
**meta** | **object** |  | [optional] [default to undefined]
**categoryIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**isAlcohol** | **boolean** |  | [optional] [default to undefined]
**isAgeRestricted** | **boolean** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**categories** | [**Array&lt;CategorySummary&gt;**](CategorySummary.md) |  | [optional] [default to undefined]
**tags** | [**Array&lt;TagSummary&gt;**](TagSummary.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ProductWithRelations } from './api';

const instance: ProductWithRelations = {
    id,
    name,
    description,
    barcode,
    imageUrl,
    images,
    weight,
    weightUnit,
    attributes,
    meta,
    categoryIds,
    isAlcohol,
    isAgeRestricted,
    isActive,
    createdAt,
    updatedAt,
    categories,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
