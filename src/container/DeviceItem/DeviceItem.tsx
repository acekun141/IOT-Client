import { Box, color, Flex, GridItem, Popover, PopoverContent, PopoverTrigger, SkeletonCircle, SkeletonText, Switch, Text, useBoolean } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { BiSliderAlt } from "react-icons/bi";
import { useToggleDevice } from "../../hooks/deviceHooks";
import DeviceSetting, { DeviceSettingModal } from "./components/DeviceSettings";
import _ from "lodash"
import "react-color-palette/lib/css/styles.css";
import { toColor } from "react-color-palette";

interface IProps {
  isLed: boolean;
  isOn: boolean;
  name: string;
  deviceCode: string;
  deviceState: any;
}

const DeviceItem: FC<IProps> = (props) => {
  const [isOn, setIsOn] = useState(props.isOn);
  const { mutate: toggleDevice } = useToggleDevice("ESP32");
  useEffect(() => { setIsOn(props.isOn) }, [props.isOn]);

  const handleToggleDevice = () => {
    const newValue = isOn ? "off" : "on"
    const state = {
      "led": _.get(props.deviceState, "desired.led"),
      "pump": _.get(props.deviceState, "desired.pump"),
      "red": _.get(props.deviceState, "desired.red"),
      "green": _.get(props.deviceState, "desired.green"),
      "blue": _.get(props.deviceState, "desired.blue")     
    }
    const updatedState = _.set(state, props.name, newValue)
    toggleDevice(updatedState);
  };

  return (
    <GridItem
      display="flex"
      flexDirection="row"
      paddingX="5"
      paddingY="3"
      bgColor="white"
      boxShadow="sm"
      borderRadius="2xl"
      alignItems="center"
    >
      <Box>
        <Text fontWeight="bold">{props.name}</Text>
      </Box>
      <Box flex="1" />
      <Flex alignItems="center" justifyContent="center">
        <Switch onChange={handleToggleDevice} isChecked={isOn} colorScheme="twitter" size="md" />
        {/* {!!device.have_led && (
          <Box
            onClick={setIsShowSetting.on}
            ml="2"
            height="25px"
            width="25px"
            display="flex"
            borderColor="blackAlpha.200"
            borderWidth="revert-layer"
            bgColor={toColor("rgb", { r: device.desired.red, g: device.desired.green, b: device.desired.blue }).hex}
            borderRadius="lg"
            cursor="pointer"
          />
        )}
        <DeviceSettingModal isOpen={isShowSetting} onClose={setIsShowSetting.toggle} device={device} /> */}
      </Flex>
    </GridItem>
  );
}


export const DeviceItemLoading = () => {
  return (
    <GridItem
      display="flex"
      flexDirection="row"
      p="3"
      bgColor="white"
      boxShadow="sm"
      borderRadius="2xl"
      alignItems="center"
    >
      <Box p="2">
        <SkeletonCircle />
      </Box>
      <Box flex="1">
        <SkeletonText />
      </Box>
    </GridItem>
  )
}

export default DeviceItem;
