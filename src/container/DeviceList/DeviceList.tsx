import { Box, Grid } from "@chakra-ui/react";
import DeviceItem from "../DeviceItem";
import { BiWind, BiTv, BiBrightness, BiCloudSnow } from "react-icons/bi"
import { useDevices } from "../../hooks/deviceHooks";
import { DeviceItemLoading } from "../DeviceItem/DeviceItem";
import _ from "lodash"


const DeviceList = () => {
  const { status, data, error, isFetching } = useDevices();

  return (
    <Grid
      templateColumns='repeat(auto-fill, minmax(max(250px, 300px), 1fr))'
      gap={6}
    >
      {(isFetching || !data) ? (
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
              isActive={_.get(device, "desired.is_active", false)}
              deviceName={device.name}
              deviceCode={device.code}
            />
          ))}
        </>
      )}
    </Grid>
  );
}

export default DeviceList;