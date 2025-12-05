# SupportApi

All URIs are relative to *http://localhost:5000/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**supportAdminOverviewGet**](#supportadminoverviewget) | **GET** /support/admin/overview | Get platform-wide support ticket overview (Admin)|
|[**supportTicketsGet**](#supportticketsget) | **GET** /support/tickets | Get all support tickets (Admin)|
|[**supportTicketsMeGet**](#supportticketsmeget) | **GET** /support/tickets/me | Get my support tickets|
|[**supportTicketsPost**](#supportticketspost) | **POST** /support/tickets | Create a new support ticket|
|[**supportTicketsTicketIdGet**](#supportticketsticketidget) | **GET** /support/tickets/{ticketId} | Get a single support ticket by ID|
|[**supportTicketsTicketIdStatusPatch**](#supportticketsticketidstatuspatch) | **PATCH** /support/tickets/{ticketId}/status | Update a support ticket\&#39;s status (Admin)|

# **supportAdminOverviewGet**
> SupportAdminOverviewGet200Response supportAdminOverviewGet()

Retrieves aggregate data about support tickets, such as total count, open tickets, and closed tickets. Only accessible by admins.

### Example

```typescript
import {
    SupportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

const { status, data } = await apiInstance.supportAdminOverviewGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SupportAdminOverviewGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An object containing the support ticket overview data. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supportTicketsGet**
> PaginatedSupportTickets supportTicketsGet()

Retrieves a paginated list of all support tickets. Requires admin privileges.

### Example

```typescript
import {
    SupportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

let customerName: string; //Filter by customer name (case-insensitive). (optional) (default to undefined)
let status: TicketStatus; //Filter by ticket status. (optional) (default to undefined)
let createdAtStart: string; //Filter tickets created on or after this date. (optional) (default to undefined)
let createdAtEnd: string; //Filter tickets created on or before this date. (optional) (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let size: number; //Number of items per page. (optional) (default to 20)

const { status, data } = await apiInstance.supportTicketsGet(
    customerName,
    status,
    createdAtStart,
    createdAtEnd,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerName** | [**string**] | Filter by customer name (case-insensitive). | (optional) defaults to undefined|
| **status** | **TicketStatus** | Filter by ticket status. | (optional) defaults to undefined|
| **createdAtStart** | [**string**] | Filter tickets created on or after this date. | (optional) defaults to undefined|
| **createdAtEnd** | [**string**] | Filter tickets created on or before this date. | (optional) defaults to undefined|
| **page** | [**number**] | Page number for pagination. | (optional) defaults to 1|
| **size** | [**number**] | Number of items per page. | (optional) defaults to 20|


### Return type

**PaginatedSupportTickets**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A paginated list of support tickets. |  -  |
|**401** | Unauthorized. |  -  |
|**403** | Forbidden. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supportTicketsMeGet**
> Array<SupportTicket> supportTicketsMeGet()

Retrieves all support tickets submitted by the authenticated user.

### Example

```typescript
import {
    SupportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

const { status, data } = await apiInstance.supportTicketsMeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<SupportTicket>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of the user\&#39;s support tickets. |  -  |
|**401** | Unauthorized. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supportTicketsPost**
> SupportTicket supportTicketsPost(createSupportTicketPayload)

Allows an authenticated user (customer, vendor, etc.) to submit a support ticket for issues or bugs.

### Example

```typescript
import {
    SupportApi,
    Configuration,
    CreateSupportTicketPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

let createSupportTicketPayload: CreateSupportTicketPayload; //

const { status, data } = await apiInstance.supportTicketsPost(
    createSupportTicketPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSupportTicketPayload** | **CreateSupportTicketPayload**|  | |


### Return type

**SupportTicket**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created support ticket. |  -  |
|**400** | Bad request (e.g., invalid input). |  -  |
|**401** | Unauthorized. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supportTicketsTicketIdGet**
> SupportTicket supportTicketsTicketIdGet()

Retrieves the details of a specific support ticket. Accessible by the user who created the ticket or an admin.

### Example

```typescript
import {
    SupportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

let ticketId: string; //The ID of the support ticket to retrieve. (default to undefined)

const { status, data } = await apiInstance.supportTicketsTicketIdGet(
    ticketId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ticketId** | [**string**] | The ID of the support ticket to retrieve. | defaults to undefined|


### Return type

**SupportTicket**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The support ticket details. |  -  |
|**403** | Forbidden (user is not authorized to view this ticket). |  -  |
|**404** | Ticket not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supportTicketsTicketIdStatusPatch**
> SupportTicket supportTicketsTicketIdStatusPatch(updateSupportTicketStatusPayload, )

Updates the status of a specific support ticket. Requires admin privileges.

### Example

```typescript
import {
    SupportApi,
    Configuration,
    UpdateSupportTicketStatusPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

let updateSupportTicketStatusPayload: UpdateSupportTicketStatusPayload; //
let ticketId: string; // (default to undefined)

const { status, data } = await apiInstance.supportTicketsTicketIdStatusPatch(
    updateSupportTicketStatusPayload,
    ticketId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSupportTicketStatusPayload** | **UpdateSupportTicketStatusPayload**|  | |
| **ticketId** | [**string**] |  | defaults to undefined|


### Return type

**SupportTicket**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated support ticket. |  -  |
|**400** | Bad request (e.g., invalid status). |  -  |
|**401** | Unauthorized. |  -  |
|**403** | Forbidden. |  -  |
|**404** | Ticket not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

