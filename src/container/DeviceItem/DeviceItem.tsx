import {
  Box,
  Flex,
  GridItem,
  SkeletonCircle,
  SkeletonText,
  Switch,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { FC, useEffect, useMemo, useState } from "react";
import { useToggleDevice } from "../../hooks/deviceHooks";
import { DeviceSettingModal, RGBState } from "./components/DeviceSettings";
import _ from "lodash";
import "react-color-palette/lib/css/styles.css";
import { toColor } from "react-color-palette";
import { IoFlashlightOutline, IoSpeedometerOutline } from "react-icons/io5";

interface IProps {
  isLed: boolean;
  isOn: boolean;
  name: string;
  deviceCode: string;
  deviceState: any;
}

const DeviceItem: FC<IProps> = (props) => {
  const [isOn, setIsOn] = useState(props.isOn);
  const [isShowSetting, setIsShowSetting] = useBoolean(false);
  const { mutate: toggleDevice } = useToggleDevice("ESP32");

  useEffect(() => {
    setIsOn(props.isOn);
  }, [props.isOn]);

  const handleToggleDevice = () => {
    const newValue = isOn ? "off" : "on";
    const state = {
      led: _.get(props.deviceState, "desired.led"),
      pump: _.get(props.deviceState, "desired.pump"),
      red: _.get(props.deviceState, "desired.red"),
      green: _.get(props.deviceState, "desired.green"),
      blue: _.get(props.deviceState, "desired.blue"),
    };
    const updatedState = _.set(state, props.name, newValue);
    toggleDevice(updatedState);
  };

  const handleChangeRGB = (rgbState: RGBState) => {
    const state = {
      led: _.get(props.deviceState, "desired.led"),
      pump: _.get(props.deviceState, "desired.pump"),
      red: rgbState.red,
      green: rgbState.green,
      blue: rgbState.blue,
    };
    toggleDevice(state);
    setIsShowSetting.off();
  };

  const rgbState = useMemo(() => {
    return {
      red: _.get(props.deviceState, "desired.red"),
      green: _.get(props.deviceState, "desired.green"),
      blue: _.get(props.deviceState, "desired.blue"),
    };
  }, [props.deviceState]);

  const deviceColor = useMemo(() => (isOn ? "black" : "gray"), [isOn]);

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
      {props.isLed ? (
        <IoFlashlightOutline size="2rem" color={deviceColor} />
      ) : (
        <IoSpeedometerOutline size="2rem" color={deviceColor} />
      )}
      <Box ml="3">
        <Text textTransform="capitalize" fontWeight="bold" color={deviceColor}>
          {props.name}
        </Text>
      </Box>
      <Box flex="1" />
      <Flex alignItems="center" justifyContent="center">
        <Switch
          onChange={handleToggleDevice}
          isChecked={isOn}
          colorScheme="twitter"
          size="md"
        />
        {!!props.isLed && (
          <Box
            onClick={setIsShowSetting.on}
            ml="2"
            height="25px"
            width="25px"
            display="flex"
            borderColor="blackAlpha.200"
            borderWidth="revert-layer"
            bgColor={
              toColor("rgb", {
                r: rgbState.red,
                g: rgbState.green,
                b: rgbState.blue,
              }).hex
            }
            borderRadius="lg"
            cursor="pointer"
          />
        )}
        {!!isShowSetting && (
          <DeviceSettingModal
            isOpen={isShowSetting}
            onClose={setIsShowSetting.toggle}
            rgbState={rgbState}
            onChange={handleChangeRGB}
          />
        )}
      </Flex>
    </GridItem>
  );
};

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
  );
};

export default DeviceItem;
