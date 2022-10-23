import { SecureAPI } from "../utils/services";
import { IResponse } from "./serviceUtils";

export const getUserData = async (): Promise<IResponse> => {
    try {
        const data: any = await SecureAPI.get("/user");
        return { data, error: null };
    } catch (error) {
        return { data: null, error: error }
    }
}