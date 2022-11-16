import { Grid } from "@chakra-ui/react";
import DeviceItem from "../DeviceItem";
import { BiWind, BiTv, BiBrightness, BiCloudSnow } from "react-icons/bi"
import { FC } from "react";

interface IProps {
  devices?: any[];
}

const DeviceList: FC<IProps> = ({ devices = [] }) => {
  return (
    <Grid
      templateColumns='repeat(auto-fill, minmax(max(250px, 300px), 1fr))'
      gap={6}
    >
      {devices.map((device: any) => (
        <DeviceItem icon={BiWind} deviceName={device.name} deviceStatus="" />
      ))}
    </Grid>
  );
}

export default DeviceList;