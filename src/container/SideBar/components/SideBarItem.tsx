import { Box, Flex, Text } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { IconType } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import cn from "classnames";

interface IProps {
  icon: IconType;
  name: string;
  path: string;
}

const SideBarItem: FC<IProps> = ({ icon: Icon, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = useMemo(() => {
    return location.pathname.startsWith(props.path);
  }, [props.path, location])

  const handleClick = () => {
    navigate(props.path)
  }

  return (
    <Flex
      onClick={handleClick}
      alignItems="center"
      p="2"
      bgColor={cn({"gray.100": isActive, "white": !isActive})}
      mb="2"
      borderRadius="2xl"
      cursor="pointer"
      _hover={{ opacity: "1", bgColor: "gray.100" }}
    >
      <Box p="1">
        <Icon size="24px" />
      </Box>
      <Text pointerEvents="none" fontWeight="bold">{props.name}</Text>
    </Flex>
  )
}

export default SideBarItem;