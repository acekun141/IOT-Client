import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import Header from "../Header";
import SideBar from "../SideBar";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const BaseLayout: FC<IProps> = ({ children }) => (
  <Box>
    <Box display={{ md: "none", sm: "block" }} boxShadow="lg">
      <Header />
    </Box>
    <Flex minHeight="100vh" maxHeight="100vh" direction="row" className="base-layout">
      <Box width="300px" display={{ md: "block", sm: "none" }} boxShadow="md">
        <SideBar />
      </Box>
      <Box flex={1} p="6" bgColor="gray.50" maxHeight="100vh" overflowY="auto">
        {children}
      </Box>
    </Flex>
  </Box>
)

export default BaseLayout;