import { Grid } from "@chakra-ui/react";
import DeviceItem from "../DeviceItem";
import { useDevices } from "../../hooks/deviceHooks";
import { DeviceItemLoading } from "../DeviceItem/DeviceItem";
import _ from "lodash"
import { useEffect } from "react";
import { queryClient, socketIO } from "../../main";
import configs from "../../utils/configs";


const DeviceList = () => {
  const { status, data, error, isFetching, isLoading, refetch } = useDevices();


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
          {_.get(data, "devices", []).map((device: any) => (
            <DeviceItem
              key={device.code}
              deviceState={device}
            />
          ))}
        </>
      )}
    </Grid>
  );
}

export default DeviceList;