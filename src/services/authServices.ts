import { nakedAPI } from "../utils/services"
import { IResponse } from "./serviceUtils";

export const signIn = async (username: string, password: string): Promise<IResponse> => {
    try {
        const data: any = await nakedAPI.post("/auth/login", { username, password });
        return { data, error: null };
    } catch (error) {
        return { data: null, error: error }
    }
}