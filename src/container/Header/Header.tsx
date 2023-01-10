import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import SideBar from "../SideBar";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
    <Flex alignItems="center" justifyContent="space-between" px={6} py={3}>
        <Text fontWeight="black" fontSize="1.2em">
            IOT APP
        </Text>
        <Button onClick={onOpen} height={45} width={45} p={0} m={0}>
            <IoMenu size="1.5em" />
        </Button>
        <Modal size="full" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalCloseButton />
            <ModalBody px={0} py={5}>
                <SideBar />
            </ModalBody>
            </ModalContent>
        </Modal>
    </Flex>
  );
};

export default Header;
