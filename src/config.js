export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-central-1",
    BUCKET: "birsak-app-uploads"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://fcx02b7rla.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_adGhwW6rc",
    APP_CLIENT_ID: "26i0rbe427savfl1t270tgsmcd",
    IDENTITY_POOL_ID: "eu-central-1:160d0673-322b-45fa-a8b9-718c58fde6f1"
  }
};
