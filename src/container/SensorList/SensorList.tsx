import { Box, Grid, Text } from "@chakra-ui/react";
import Sensor from "../Sensor";
import { WiUmbrella, WiCloud, WiThermometerExterior, WiDaySunny } from "react-icons/wi";
import { useEffect, useMemo, useState } from "react";
import { socketIO } from "../../main";
import configs from "../../utils/configs";
import _ from "lodash";
import { useGetSensorData } from "../../hooks/chartHooks";
import moment from "moment/moment";

const SENSOR_FIELDS = [
  {icon: WiCloud, name: "humidity"},
  {icon: WiDaySunny, name: "light"},
  {icon: WiUmbrella, name: "moisture"},
  {icon: WiThermometerExterior, name: "temperature"},
]
const _get_chart_data = (item: any, name: string) => {
  return {
    value: _.get(item, `device_data.${name}`, 0),
    date: moment(_.get(item, "sample_time", 0)).utc().format("HH:mm A")
  }
}

const SensorList = () => {
  const [state, setState] = useState<any>({});
  const { data, isLoading } = useGetSensorData();

  const getSensorValue = (name: string) => {
    return _.get(state, name, "unknown");
  };

  useEffect(() => {
    socketIO.on(configs.SENSOR_EVENT, (data) => {
      setState(data);
    })
    return () => {
      socketIO.removeAllListeners(configs.SENSOR_EVENT);
    }
  }, []);

  const sensorChartState = useMemo(() => {
    let sensor_data = _.get(data, "data.data", []);
    _.reverse(sensor_data);
    sensor_data = sensor_data.filter((_: any, index: number) => index % 2 == 0) 
    return {
      humidity: sensor_data.map((item: any) => _get_chart_data(item, "humidity")),
      light: sensor_data.map((item: any) => _get_chart_data(item, "light")),
      moisture: sensor_data.map((item: any) => _get_chart_data(item, "moisture")),
      temperature: sensor_data.map((item: any) => _get_chart_data(item, "temperature")),
    }
  }, [data]);

  return (
    <Box>
      <Box mb="3" p="5" bgColor="white" boxShadow="sm" borderRadius="2xl">
        {SENSOR_FIELDS.map(item => (
          <Box key={item.name} display="flex">
            <Box flex="1" display="flex" justifyContent="center" alignItems="center">
              <item.icon size={30} />
              <Text textTransform="capitalize" flex="1">{item.name}</Text>
              {/* <Text textTransform="capitalize" fontWeight="bold" flex="1">{item.name}</Text> */}
            </Box>
            <Text>{getSensorValue(item.name)}</Text>
          </Box>
        ))}
      </Box>
      <Grid
        templateColumns='repeat(auto-fill, minmax(500px, 1fr))'
        gap={6}
        overflow="auto"
      >
        <Sensor data={sensorChartState.humidity} icon={WiCloud} name="humidity" status="good" />
        <Sensor data={sensorChartState.light} icon={WiDaySunny} name="light" status="good" />
        <Sensor data={sensorChartState.moisture} icon={WiUmbrella} name="moisure" status="good" />
        <Sensor data={sensorChartState.temperature} icon={WiThermometerExterior} name="temperature" status="good" />
      </Grid>
    </Box>
  );
}

export default SensorList;
