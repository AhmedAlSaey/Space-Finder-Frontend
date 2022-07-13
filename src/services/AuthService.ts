import { User, UserAttribute } from "../model/Model";

export class AuthService {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    if (userName === "user" && password === "123") {
      return {
        userName: userName,
        email: "dummy@email.com",
      };
    } else {
      return undefined;
    }
  }

  public async getUserAttributes(user: User): Promise<UserAttribute[]> {
    const result: UserAttribute[] = [];
    result.push({ Name: "description", Value: "tired user" });
    result.push({ Name: "age", Value: "24" });
    result.push({ Name: "job", Value: "engineer" });
    return result;
  }
}
