import { SecureAPI } from "../utils/services";
import { IResponse } from "./serviceUtils";

export const getChartSensorData = async (): Promise<IResponse> => {
    try {
        const data: any = await SecureAPI.get("/chart/sensor");
        return { data, error: null };
    } catch (error) {
        return { data: null, error: error }
    }
}