import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { StateContext } from "../StateProvider/StateProvider";
import { BiLogOutCircle, BiGridAlt, BiDevices } from "react-icons/bi";

const BaseLayout = () => {
  const { logout } = useContext(StateContext);
  return (
    <Flex direction="column" width="300px" p="6" fontSize="sm" bgColor="white">
      <Flex
        alignItems="center" p="2" bgColor="gray.100" mb="2" borderRadius="2xl" cursor="pointer"
        _hover={{ opacity: "1", bgColor: "gray.100" }}
      >
        <Box p="1">
          <BiGridAlt size="24px" />
        </Box>
        <Text pointerEvents="none" fontWeight="bold">Dashboard</Text>
      </Flex>

      <Flex 
        opacity="0.5" alignItems="center" p="2" mb="2" borderRadius="2xl" cursor="pointer"
        _hover={{ opacity: "1", bgColor: "gray.100" }}
      >
        <Box p="1">
          <BiDevices size="24px" />
        </Box>
        <Text pointerEvents="none" fontWeight="bold">Devices</Text>
      </Flex>

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