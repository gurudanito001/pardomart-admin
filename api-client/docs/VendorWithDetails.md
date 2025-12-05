# VendorWithDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**latitude** | **number** |  | [optional] [default to undefined]
**longitude** | **number** |  | [optional] [default to undefined]
**distance** | **number** | Distance to the vendor from the user\&#39;s location in kilometers. | [optional] [default to undefined]
**rating** | [**VendorWithDetailsAllOfRating**](VendorWithDetailsAllOfRating.md) |  | [optional] [default to undefined]
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
**productCount** | **number** | The total number of products this vendor has. | [optional] [default to undefined]
**documentCount** | **number** | The total number of documents this vendor has uploaded. | [optional] [default to undefined]

## Example

```typescript
import { VendorWithDetails } from './api';

const instance: VendorWithDetails = {
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
    productCount,
    documentCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
