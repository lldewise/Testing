// For a full list of msal.js configuration parameters, 
// visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
export const msalConfig = {
    auth: {
        clientId: "675fdfbc-296f-4a14-81fe-3dadc9b47b91",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "http://localhost:3000"
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
    },
}

// Coordinates and required scopes for your web api
export const apiConfig = {
    resourceUri: "http://localhost:44351/api/profile",
    resourceScope: "api://84ab99b0-34ab-4fc0-bbf9-8402f5790d8e/.default"
}

/** 
 * Scopes you enter here will be consented once you authenticate. For a full list of available authentication parameters, 
 * visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const loginRequest = {
    scopes: ["openid", "profile", "offline_access"]
}

// Add here scopes for access token to be used at the API endpoints.
export const tokenRequest = {
    scopes: [apiConfig.resourceScope]
}

// Add here scopes for silent token request
export const silentRequest = {
    scopes: ["openid", "profile", apiConfig.resourceScope]
}
