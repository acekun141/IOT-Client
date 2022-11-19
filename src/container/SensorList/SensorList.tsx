import { Box, Grid, Text } from "@chakra-ui/react";
import Sensor from "../Sensor";
import { BiSun, BiDroplet } from "react-icons/bi";
import { useEffect, useState } from "react";
import { socketIO } from "../../main";
import configs from "../../utils/configs";
import _ from "lodash";

const SensorList = () => {
  const [state, setState] = useState<any>({});

  const getSensorValue = (name: string) => {
    return _.get(state, name, "unknown");
  };

  useEffect(() => {
    socketIO.on(configs.SENSOR_EVENT, (data) => {
      setState(data);
    })
    return () => {
      socketIO.removeAllListeners(configs.SOCKET_DEVICE_CHANGE_EVENT);
    }
  }, []);

  return (
    <Grid
      templateColumns='repeat(auto-fill, minmax(max(350px, 350px), 1fr))'
      gap={6}
    >
      <Box p="5" bgColor="white" boxShadow="sm" borderRadius="2xl">
        <Box display="flex">
          <Text fontWeight="bold" flex="1">Humidity</Text>
          <Text>{getSensorValue("humidity")}</Text>
        </Box>
        <Box display="flex">
          <Text fontWeight="bold" flex="1">Light</Text>
          <Text>{getSensorValue("light")}</Text>
        </Box>
        <Box display="flex">
          <Text fontWeight="bold" flex="1">Moisture</Text>
          <Text>{getSensorValue("moisture")}</Text>
        </Box>
        <Box display="flex">
          <Text fontWeight="bold" flex="1">Temperature</Text>
          <Text>{getSensorValue("temperature")}</Text>
        </Box>
      </Box>
      <Sensor icon={BiSun} name="Light" status="good" />
      <Sensor icon={BiDroplet} name="Humidity" status="warning" />
    </Grid>
  );
}

export default SensorList;