import { useQuery, useMutation } from "react-query";
import { getDevices, updateDeviceState } from "../services/deviceServices";


export const useDevices = () => {
    return useQuery(["all-devices"], () => getDevices())
} 

export const useToggleDevice = () => {
    return useMutation(({ code, isActive }: any): Promise<any> => {
        return updateDeviceState(code, { is_active: isActive })
    })
}


export const useUpdateLegColor = () => {
    return useMutation(({ code, red, green, blue }: any): Promise<any> => {
        return updateDeviceState(code, { red, green, blue })
    })
}