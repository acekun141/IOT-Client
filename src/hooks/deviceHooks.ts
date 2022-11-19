import { useQuery, useMutation } from "react-query";
import { getDevice, getDevices, updateDeviceState } from "../services/deviceServices";


export const useDevices = () => {
    return useQuery(["all-devices"], () => getDevices())
} 

export const useDevice = (code: string) => {
    return useQuery(["device"], () => getDevice(code))
} 

export const useToggleDevice = (code: string) => {
    return useMutation((state: any): Promise<any> => {
        return updateDeviceState(code, { ...state })
    })
}


export const useUpdateLegColor = () => {
    return useMutation(({ code, red, green, blue }: any): Promise<any> => {
        return updateDeviceState(code, { red, green, blue })
    })
}

export const useUpdateLed = () => {
    return useMutation(({ code, newState }: any): Promise<any> => {
        return updateDeviceState(code, { ...newState })
    })
}