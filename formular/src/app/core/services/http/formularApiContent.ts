export class ApiUrls {
    public static SERVICE_PRINCIPLE_GET_ALL = "/api/ServicePrincipal/GetAll";
}

export class ServicePrincipleGetAllResponse {
    public SubscriptionId: string = "";
    public ClientId: string = "";
    public TenantId: string = "";
}