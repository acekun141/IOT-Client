import { Grid } from "@chakra-ui/react";
import DeviceItem from "../DeviceItem";
import { useDevice, useDevices } from "../../hooks/deviceHooks";
import { DeviceItemLoading } from "../DeviceItem/DeviceItem";
import _ from "lodash"
import { useEffect } from "react";
import { queryClient, socketIO } from "../../main";
import configs from "../../utils/configs";


const DeviceList = () => {
  const { status, data, error, isFetching, isLoading, refetch } = useDevice("ESP32");


  useEffect(() => {
    socketIO.on(configs.SOCKET_DEVICE_CHANGE_EVENT, (msg) => {
      queryClient.cancelQueries("all-devices")
      refetch();
    })
    return () => {
      socketIO.removeAllListeners(configs.SOCKET_DEVICE_CHANGE_EVENT);
    }
  }, [])

  return (
    <Grid
      templateColumns='repeat(auto-fill, minmax(max(250px, 300px), 1fr))'
      gap={6}
    >
      {(isLoading || !data) ? (
        <>
          <DeviceItemLoading />
          <DeviceItemLoading />
          <DeviceItemLoading />
        </>
      ) : (
        <>
          <DeviceItem
            name="pump"
            isOn={_.get(data, "device.desired.pump") == "on"}
            isLed={false}
            deviceCode={_.get(data, "device.code")}
            deviceState={_.get(data, "device")}
          />
          <DeviceItem
            name="led"
            isOn={_.get(data, "device.desired.led") == "on"}
            isLed={true}
            deviceCode={_.get(data, "device.code")}
            deviceState={_.get(data, "device")}
          />
        </>
      )}
    </Grid>
  );
}

export default DeviceList;