export class ApiUrls {
    public static SERVICE_PRINCIPLE_GET_ALL = "/api/ServicePrincipal/GetAll";
    public static SERVICE_PRINCIPLE_CREATE = "/api/ServicePrincipal/Create";
    public static SERVICE_PRINCIPLE_DELETE = "/api/ServicePrincipal/Delete";

    public static AZURE_ENV_GET_AVALIALE_SUBSCRIPTIONS = "/api/AzureEnv/GetAvailableSubscriptions"
    public static AZURE_ENV_GET_BY_SUBSCRIPTION = "/api/AzureEnv/Get"

    public static JENKINS_ACCOUNT = "/api/JenkinsAccount"

    public static JENKINS_JOB = "/api/JenkinsJob"

    public static JENKINS_CLIENT_JOB_BRANCH_LIST = "/api/JenkinsClient/Job/BranchList"
    public static JENKINS_CLIENT_JOB_TRIGGER_DESTROY_ENV = "/api/JenkinsClient/Job/TriggerDestroyEnv"
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
    terraformProject: string;
    jenkinsServerName: string;
    jenkinsJobName: string;
    jenkinsJobBranch: string;
    envOwner: string;
}

export type JenkinsJob = {
    id: number;
    jenkinsJobName: string;
    jenkinsJobFullUrl: string;
    jenkinsAccountId: number;
}

export type JenkinsJobParameter = {
    jenkinsJobName: string;
    jenkinsJobFullUrl: string;
    jenkinsAccountId: number;
}

export type JenkinsAccountResponse = {
    id: number;
    account: string;
    serverName: string;
    serverBaseUrl: string;
    jenkinsJobs: JenkinsJob[];
}

export type JenkinsAccountParameter = {
    account: string;
    secret: string;
    serverName: string;
    serverBaseUrl: string;
}

export type JenkinsJobBranchGetParameter = {
    serverName: string;
    jobName: string;
}

export type JenkinsJobTriggerDestroyEnvParameter = {
    serverName: string;
    jobName: string;
    jobBranch: string;
    envName: string;
}