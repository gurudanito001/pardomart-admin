# RatingWithRelations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**orderId** | **string** |  | [optional] [default to undefined]
**raterId** | **string** |  | [optional] [default to undefined]
**ratedVendorId** | **string** |  | [optional] [default to undefined]
**ratedUserId** | **string** |  | [optional] [default to undefined]
**ratedProductId** | **string** |  | [optional] [default to undefined]
**rating** | **number** |  | [optional] [default to undefined]
**comment** | **string** |  | [optional] [default to undefined]
**type** | [**RatingType**](RatingType.md) |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**rater** | **object** |  | [optional] [default to undefined]
**ratedUser** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]
**ratedVendor** | [**VendorSummary**](VendorSummary.md) |  | [optional] [default to undefined]
**ratedProduct** | [**RatingWithRelationsAllOfRatedProduct**](RatingWithRelationsAllOfRatedProduct.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RatingWithRelations } from './api';

const instance: RatingWithRelations = {
    id,
    orderId,
    raterId,
    ratedVendorId,
    ratedUserId,
    ratedProductId,
    rating,
    comment,
    type,
    createdAt,
    updatedAt,
    rater,
    ratedUser,
    ratedVendor,
    ratedProduct,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
