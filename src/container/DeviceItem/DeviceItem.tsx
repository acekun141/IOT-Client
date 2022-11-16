import { Box, color, Flex, GridItem, Popover, PopoverContent, PopoverTrigger, SkeletonCircle, SkeletonText, Switch, Text, useBoolean } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { BiSliderAlt } from "react-icons/bi";
import { useToggleDevice } from "../../hooks/deviceHooks";
import DeviceSetting, { DeviceSettingModal } from "./components/DeviceSettings";
import _ from "lodash"
import "react-color-palette/lib/css/styles.css";
import { toColor } from "react-color-palette";

interface IProps { deviceState: any }

const DeviceItem: FC<IProps> = ({ deviceState: device }) => {
  const [isShowSetting, setIsShowSetting] = useBoolean(false);
  const [isActive, setIsActive] = useState(_.get(device, "desired.is_active", false))
  const { mutate: toggleDevice } = useToggleDevice();

  const handleToggleDevice = () => {
    toggleDevice({code: device.code, isActive: !isActive});
    setIsActive((prev: any) => !prev)
  }

  useEffect(() => {
    setIsActive(_.get(device, "desired.is_active", false))
  }, [_.get(device, "desired.is_active", false)])

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
        <Text fontWeight="bold">{device.name}</Text>
        <Text color="gray.500" fontSize="xs">{device.code}</Text>
      </Box>
      <Box flex="1" />
      <Flex alignItems="center" justifyContent="center">
        <Switch onChange={handleToggleDevice} isChecked={isActive} colorScheme="twitter" size="md" />
        {!!device.have_led && (
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
        <DeviceSettingModal isOpen={isShowSetting} onClose={setIsShowSetting.toggle} device={device} />
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