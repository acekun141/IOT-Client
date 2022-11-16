import { Grid } from "@chakra-ui/react";
import Sensor from "../Sensor";
import { BiSun, BiDroplet } from "react-icons/bi";

const SensorList = () => {
  return (
    <Grid
      templateColumns='repeat(auto-fill, minmax(max(350px, 350px), 1fr))'
      gap={6}
    >
      <Sensor icon={BiSun} name="Light" status="good" />
      <Sensor icon={BiDroplet} name="Humidity" status="warning" />
      <Sensor icon={BiDroplet} name="Moisture" status="warning" />
      <Sensor icon={BiDroplet} name="Temperature" status="warning" />
    </Grid>
  );
}

export default SensorList;