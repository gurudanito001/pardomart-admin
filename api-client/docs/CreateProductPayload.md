# CreateProductPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**images** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**attributes** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**meta** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**categoryIds** | **Array&lt;string&gt;** | Array of category IDs to associate with the product. | [default to undefined]
**tagIds** | **Array&lt;string&gt;** | Array of tag IDs to associate with the product. | [optional] [default to undefined]
**isAlcohol** | **boolean** |  | [optional] [default to false]
**isAgeRestricted** | **boolean** |  | [optional] [default to false]
**isActive** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { CreateProductPayload } from './api';

const instance: CreateProductPayload = {
    barcode,
    name,
    description,
    images,
    attributes,
    meta,
    categoryIds,
    tagIds,
    isAlcohol,
    isAgeRestricted,
    isActive,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
