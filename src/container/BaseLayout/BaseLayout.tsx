import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import SideBar from "../SideBar";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const BaseLayout: FC<IProps> = ({ children }) => {
  return (
    <Flex minHeight="100vh" maxHeight="100vh" direction="row" className="base-layout">
      <SideBar />
      <Box flex={1} p="6" bgColor="gray.50">
        {children}
      </Box>
    </Flex>
  );
}

export default BaseLayout;