import { Box, Flex, GridItem, Popover, PopoverContent, PopoverTrigger, SkeletonCircle, SkeletonText, Switch, Text, useBoolean } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";
import { BiSliderAlt } from "react-icons/bi";
import { ColorPicker, useColor } from "react-color-palette";
import { useToggleDevice } from "../../hooks/deviceHooks";
import "react-color-palette/lib/css/styles.css";

interface IProps {
  deviceName: string;
  deviceCode: string;
  isActive: boolean;
}

const DeviceItem: FC<IProps> = (props) => {
  const [color, setColor] = useColor("hex", "#121212");
  const [isActive, setIsActive] = useBoolean(props.isActive)
  const { mutate: toggleDevice } = useToggleDevice()

  const handleToggleDevice = () => {
    toggleDevice({code: props.deviceCode, isActive: !isActive});
    setIsActive.toggle();
  }

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
        <Text fontWeight="bold">{props.deviceName}</Text>
        <Text color="gray.500" fontSize="xs">{props.deviceCode}</Text>
      </Box>
      <Box flex="1" />
      <Flex alignItems="center" justifyContent="center">
        <Switch onChange={handleToggleDevice} isChecked={isActive} colorScheme="twitter" size="md" />
        <Popover>
          <PopoverTrigger>
            <Box ml="2" p="1" display="flex" bgColor="gray.200" borderRadius="lg" cursor="pointer">
              <BiSliderAlt />
            </Box>
          </PopoverTrigger>
          <PopoverContent mr="3" border="none" boxShadow="base" borderRadius="2xl">
            <Box p="3">
              <ColorPicker hideHEX={true} hideHSV={true} hideRGB={true} color={color} onChange={setColor} width={300}  />
            </Box>
          </PopoverContent>
        </Popover>
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