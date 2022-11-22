import { useQuery } from "react-query";
import { getChartSensorData } from "../services/chartServices";


export const useGetSensorData = () => {
    return useQuery(["chart-sensor-datas"], () => getChartSensorData())
} 
