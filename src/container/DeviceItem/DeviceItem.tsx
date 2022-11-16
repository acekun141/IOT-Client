import { Box, Flex, GridItem, Popover, PopoverContent, PopoverTrigger, Switch, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";
import { BiSliderAlt } from "react-icons/bi";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

interface IProps {
  icon: IconType;
  activeStatus?: string;
  deviceName: string;
  deviceStatus: string;
}

const DeviceItem: FC<IProps> = ({ icon: Icon, ...props }) => {
  const [color, setColor] = useColor("hex", "#121212");
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
        <Icon size="38" />
      </Box>
      <Box>
        <Text fontWeight="bold">{props.deviceName}</Text>
        <Text color="gray.500" fontSize="xs">{props.deviceStatus}</Text>
      </Box>
      <Box flex="1" />
      <Flex alignItems="center" justifyContent="center">
        <Switch colorScheme="twitter" size="md" />
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

export default DeviceItem;