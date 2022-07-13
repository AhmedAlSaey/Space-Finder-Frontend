import { Space } from "../model/Model";

export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];
    result.push({
      location: "Paris",
      name: "Best Location",
      spaceId: "1234",
    });
    result.push({
      location: "Paris",
      name: "Best Location",
      spaceId: "123",
    });
    result.push({
      location: "Paris",
      name: "Best Location",
      spaceId: "123",
    });
    return result;
  }

  public async reserveSpace(spaceId: string): Promise<string | undefined> {
    if (spaceId === "1234") {
      return "5555";
    }
    return undefined;
  }
}
