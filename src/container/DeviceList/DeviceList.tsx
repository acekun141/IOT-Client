import { Grid } from "@chakra-ui/react";
import DeviceItem from "../DeviceItem";
import { BiWind, BiTv, BiBrightness, BiCloudSnow } from "react-icons/bi"

interface IProps {
  devices: any[];
}

const DeviceList = () => {
  return (
    <Grid
      templateColumns='repeat(auto-fill, minmax(max(250px, 300px), 1fr))'
      gap={6}
    >
      <DeviceItem icon={BiWind} deviceName="Air Conditioner" deviceStatus="25°C Temperature" />
      <DeviceItem icon={BiCloudSnow} deviceName="Sprinklers" deviceStatus="" />
      <DeviceItem icon={BiBrightness} deviceName="Light" deviceStatus="" />
    </Grid>
  );
}

export default DeviceList;