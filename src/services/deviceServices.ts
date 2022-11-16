import { SecureAPI } from "../utils/services";
import { IResponse } from "./serviceUtils";

export const getDevices = async (): Promise<IResponse> => {
    try {
        const data: any = await SecureAPI.get("/device");
        return { data, error: null };
    } catch (error) {
        return { data: null, error: error }
    }
}