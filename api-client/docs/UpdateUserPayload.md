# UpdateUserPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**mobileNumber** | **string** |  | [optional] [default to undefined]
**role** | [**Role**](Role.md) |  | [optional] [default to undefined]
**mobileVerified** | **boolean** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**language** | **string** |  | [optional] [default to undefined]
**notification** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**referralCode** | **string** |  | [optional] [default to undefined]
**image** | **string** | Base64 encoded image or URL | [optional] [default to undefined]
**online** | **boolean** |  | [optional] [default to undefined]
**replacementPreference** | **string** |  | [optional] [default to ReplacementPreferenceEnum_SendRequest]
**measurementUnit** | **string** |  | [optional] [default to MeasurementUnitEnum_Metric]
**biometricEnabled** | **boolean** |  | [optional] [default to false]
**darkMode** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { UpdateUserPayload } from './api';

const instance: UpdateUserPayload = {
    name,
    email,
    mobileNumber,
    role,
    mobileVerified,
    active,
    language,
    notification,
    referralCode,
    image,
    online,
    replacementPreference,
    measurementUnit,
    biometricEnabled,
    darkMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
