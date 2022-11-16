import { useQuery, useMutation } from "react-query";
import { queryClient } from "../main";
import { getDevices, updateDeviceState } from "../services/deviceServices";


export const useDevices = () => {
    return useQuery(["all-devices"], () => getDevices())
} 

export const useToggleDevice = () => {
    return useMutation(({ code, isActive }: any): Promise<any> => {
        return updateDeviceState(code, { is_active: isActive })
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries("all-devies")
        }
    })
}