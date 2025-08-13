export default {
    endpoint: "auth",
    configureEndpoints: ["auth", "core", "purchasing-azure", "inventory-azure", "sales", "finance", "garment-production", "packing-inventory"],
    loginUrl: "authenticate",
    profileUrl: "me",

    authTokenType: "Bearer",
    accessTokenProp: "data",

    storageChangedReload: true
};
