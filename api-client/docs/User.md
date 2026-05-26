# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**mobileNumber** | **string** |  | [optional] [default to undefined]
**role** | [**Role**](Role.md) |  | [optional] [default to undefined]
**mobileVerified** | **boolean** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**language** | **string** |  | [optional] [default to undefined]
**notification** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**referralCode** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**image** | **string** |  | [optional] [default to undefined]
**dynamicMediaUrls** | **object** |  | [optional] [default to undefined]
**online** | **boolean** |  | [optional] [default to undefined]
**rememberToken** | **string** |  | [optional] [default to undefined]
**stripeCustomerId** | **string** |  | [optional] [default to undefined]
**vendorId** | **string** |  | [optional] [default to undefined]
**replacementPreference** | **string** |  | [optional] [default to ReplacementPreferenceEnum_SendRequest]
**measurementUnit** | **string** |  | [optional] [default to MeasurementUnitEnum_Metric]
**biometricEnabled** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { User } from './api';

const instance: User = {
    id,
    name,
    email,
    mobileNumber,
    role,
    mobileVerified,
    active,
    language,
    notification,
    referralCode,
    createdAt,
    updatedAt,
    image,
    dynamicMediaUrls,
    online,
    rememberToken,
    stripeCustomerId,
    vendorId,
    replacementPreference,
    measurementUnit,
    biometricEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
