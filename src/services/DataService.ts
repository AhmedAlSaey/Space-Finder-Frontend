import { ICreateSpaceState } from "../components/spaces/CreateSpace";
import { Space } from "../model/Model";
import { S3, config } from "aws-sdk";
import { config as appConfig } from "./config";
import { generateRandomId } from "../utils/Utils";

config.update({
  region: appConfig.REGION,
});
export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const requestUrl = appConfig.api.spacesUrl;
    const requestResult = await fetch(requestUrl, {
      method: "GET",
    });
    const responseJSON = await requestResult.json();
    return responseJSON;
  }

  public async reserveSpace(spaceId: string): Promise<string | undefined> {
    if (spaceId === "1234") {
      return "5555";
    }
    return undefined;
  }

  public async createSpace(iCreateSpace: ICreateSpaceState) {
    if (iCreateSpace.photo) {
      const photoUrl = await this.uploadPublicFile(
        iCreateSpace.photo,
        appConfig.SPACES_PHOTOS_BUCKET
      );
      iCreateSpace.photoURL = photoUrl;
      iCreateSpace.photo = undefined;
    }
    const requestUrl = appConfig.api.spacesUrl;
    const requestOptions: RequestInit = {
      method: "POST",
      body: JSON.stringify(iCreateSpace),
    };
    const requestResult = await fetch(requestUrl, requestOptions);
    const result = await requestResult.json();
    return JSON.stringify(result.id);
  }

  private async uploadPublicFile(file: File, bucket: string) {
    const fileName = generateRandomId() + file.name;
    const uploadResult = await new S3({
      region: appConfig.REGION,
    })
      .upload({
        Bucket: bucket,
        Key: fileName,
        Body: file,
        ACL: "public-read",
      })
      .promise();
    return uploadResult.Location;
  }
}
