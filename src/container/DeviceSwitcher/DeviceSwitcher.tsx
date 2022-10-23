import { Box, GridItem, Switch, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";

interface IProps {
  icon: IconType;
  deviceName: string;
  deviceStatus: string;
}

const DeviceSwitcher: FC<IProps> = ({ icon: Icon, ...props }) => {
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
      <Box flex="1">
        <Text fontWeight="bold">{props.deviceName}</Text>
        <Text color="gray.500" fontSize="xs">{props.deviceStatus}</Text>
      </Box>
      <Box>
        <Switch colorScheme="twitter" size="md" />
      </Box>
    </GridItem>
  );
}

export default DeviceSwitcher;