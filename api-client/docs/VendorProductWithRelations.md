# VendorProductWithRelations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**price** | **number** |  | [optional] [default to undefined]
**vendorId** | **string** |  | [optional] [default to undefined]
**productId** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**discountedPrice** | **number** |  | [optional] [default to undefined]
**images** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**isAvailable** | **boolean** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**weight** | **number** |  | [optional] [default to undefined]
**weightUnit** | **string** |  | [optional] [default to undefined]
**isAlcohol** | **boolean** |  | [optional] [default to undefined]
**isAgeRestricted** | **boolean** |  | [optional] [default to undefined]
**attributes** | **object** |  | [optional] [default to undefined]
**categoryIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**stock** | **number** |  | [optional] [default to undefined]
**published** | **boolean** |  | [optional] [default to undefined]
**meta** | **object** |  | [optional] [default to undefined]
**product** | [**Product**](Product.md) |  | [optional] [default to undefined]
**categories** | [**Array&lt;CategorySummary&gt;**](CategorySummary.md) |  | [optional] [default to undefined]
**tags** | [**Array&lt;TagSummary&gt;**](TagSummary.md) |  | [optional] [default to undefined]
**vendor** | [**VendorSummary**](VendorSummary.md) |  | [optional] [default to undefined]

## Example

```typescript
import { VendorProductWithRelations } from './api';

const instance: VendorProductWithRelations = {
    id,
    name,
    price,
    vendorId,
    productId,
    description,
    discountedPrice,
    images,
    isAvailable,
    createdAt,
    updatedAt,
    weight,
    weightUnit,
    isAlcohol,
    isAgeRestricted,
    attributes,
    categoryIds,
    stock,
    published,
    meta,
    product,
    categories,
    tags,
    vendor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
