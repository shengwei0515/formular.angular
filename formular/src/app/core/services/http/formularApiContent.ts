export class ApiUrls {
    public static SERVICE_PRINCIPLE_GET_ALL = "/api/ServicePrincipal/GetAll";
    public static SERVICE_PRINCIPLE_CREATE = "/api/ServicePrincipal/Create";
    public static SERVICE_PRINCIPLE_DELETE = "/api/ServicePrincipal/Delete";

    public static AZURE_ENV_GET_AVALIALE_SUBSCRIPTIONS = "/api/AzureEnv/GetAvailableSubscriptions"
    public static AZURE_ENV_GET_BY_SUBSCRIPTION = "/api/AzureEnv/Get"

    public static JENKINS_ACCOUNT = "/api/JenkinsAccount"
}

export class ServicePrincipleGetAllResponse {
    public SubscriptionId: string = "";
    public ClientId: string = "";
    public TenantId: string = "";
}

export class ServicePrincipleCreateParameter {
    public SubscriptionId: string = "";
    public ClientSecret: string = "";
    public ClientId: string = "";
    public TenantId: string = "";
}

export class AzureEnvGetAvailiableSubscriptionResponse {
    public subscriptionId: string = "" ;
    public subscriptionName: string = "" ;
}

export type AzureEnvGetBySubscriptionResponse = {
    createdDatetime: Date; 
    updatedDatetime: Date;
    resourceGroupName: string;
    terraformWorkspace: string;
    jenkinsServerName: string;
    envOwner: string;
    jenkinsJobBranch: string;
}

export type JenkinsAccountResponse = {
    id: number;
    account: string;
    serverName: string;
}

export type JenkinsAccountParameter = {
    account: string;
    secret: string;
    serverName: string;
}