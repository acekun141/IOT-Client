import { Box, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { StateContext } from "../StateProvider/StateProvider";
import { BiLogOutCircle, BiGridAlt, BiDevices, BiMicrochip } from "react-icons/bi";
import SideBarItem from "./components/SideBarItem";


const SIDEBAR_ITEMS = [
  { icon: BiGridAlt, name: "Dashboard", path: "/dashboard" },
  { icon: BiDevices, name: "Devices", path: "/devices" },
  { icon: BiMicrochip, name: "Sensors", path: "/sensors" },
]


const BaseLayout = () => {
  const { logout } = useContext(StateContext);
  return (
    <Flex direction="column" width="300px" p="6" fontSize="sm" bgColor="white" boxShadow="md">
      {SIDEBAR_ITEMS.map((item) => (
        <SideBarItem key={item.path} icon={item.icon} name={item.name} path={item.path} />
      ))}
      <Box flex={1} />
      <Flex
        opacity="0.5"
        onClick={() => logout()}
        alignItems="center"
        p="2" 
        mb="2"
        borderRadius="2xl"
        cursor="pointer"
        _hover={{ opacity: "1", bgColor: "gray.100" }}
      >
        <Box p="1">
          <BiLogOutCircle size="24px" />
        </Box>
        <Text pointerEvents="none" fontWeight="bold">Logout</Text>
      </Flex>
    </Flex>
  );
}

export default BaseLayout;