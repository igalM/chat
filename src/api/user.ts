import { Api } from "../shared/axios";
import { User } from "../types";

class UserApi extends Api {

    public async signinNewUser(user: User): Promise<User> {
        const response = await this.post<User, User>('/user', user);
        return response.data;
    }

    public async deleteUser(id: string): Promise<number> {
        const response = await this.delete<string, number>(`/user/${id}`);
        return response;
    }

}

export const userApi = new UserApi();