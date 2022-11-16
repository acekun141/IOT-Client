import { SecureAPI } from "../utils/services";
import { IResponse } from "./serviceUtils";


export const getDevices = async (): Promise<any> => {
    const data = await SecureAPI.get("/device");
    return data;
}


export const updateDeviceState = async (code: string, desired: any): Promise<any> => {
    return await SecureAPI.put("/device", { deviceCode: code, desired })
}