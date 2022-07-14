const spacesUrl =
  "https://d3a4d83llb.execute-api.eu-central-1.amazonaws.com/prod/";

export const config = {
  REGION: "eu-central-1",
  USER_POOL_ID: "eu-central-1_OCbtVMMz9",
  APP_CLIENT_ID: "3vqra7cnujurbdikj5f47s59n7",
  IDENTITY_POOL_ID: "eu-central-1:738132b4-d3e0-47f3-931f-cef2c4b00990",
  SPACES_PHOTOS_BUCKET: "spaces-photos-02750edc6eb2",
  api: {
    baseUrl: spacesUrl,
    spacesUrl: `${spacesUrl}spaces`,
  },
};
