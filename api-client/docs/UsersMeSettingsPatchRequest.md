# UsersMeSettingsPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replacementPreference** | **string** | User\&#39;s preference for product replacements during shopping. | [optional] [default to ReplacementPreferenceEnum_SendRequest]
**measurementUnit** | **string** | User\&#39;s preferred measurement unit. | [optional] [default to MeasurementUnitEnum_Metric]
**biometricEnabled** | **boolean** | Whether FaceID/Biometrics is enabled for login. | [optional] [default to false]
**darkMode** | **boolean** | Whether Dark Mode is enabled. | [optional] [default to false]

## Example

```typescript
import { UsersMeSettingsPatchRequest } from './api';

const instance: UsersMeSettingsPatchRequest = {
    replacementPreference,
    measurementUnit,
    biometricEnabled,
    darkMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
