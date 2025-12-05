# VendorWithRelations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**latitude** | **number** |  | [optional] [default to undefined]
**longitude** | **number** |  | [optional] [default to undefined]
**distance** | **number** | Distance in kilometers from the user. | [optional] [default to undefined]
**rating** | [**VendorRating**](VendorRating.md) |  | [optional] [default to undefined]
**image** | **string** |  | [optional] [default to undefined]
**address** | **string** |  | [optional] [default to undefined]
**userId** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**tagline** | **string** |  | [optional] [default to undefined]
**details** | **string** |  | [optional] [default to undefined]
**timezone** | **string** |  | [optional] [default to undefined]
**isVerified** | **boolean** |  | [optional] [default to undefined]
**meta** | **object** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**isPublished** | **boolean** |  | [optional] [default to undefined]
**availableForShopping** | **boolean** |  | [optional] [default to undefined]
**user** | [**User**](User.md) |  | [optional] [default to undefined]
**openingHours** | [**Array&lt;VendorOpeningHours&gt;**](VendorOpeningHours.md) |  | [optional] [default to undefined]

## Example

```typescript
import { VendorWithRelations } from './api';

const instance: VendorWithRelations = {
    id,
    name,
    description,
    latitude,
    longitude,
    distance,
    rating,
    image,
    address,
    userId,
    email,
    tagline,
    details,
    timezone,
    isVerified,
    meta,
    createdAt,
    updatedAt,
    isPublished,
    availableForShopping,
    user,
    openingHours,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
