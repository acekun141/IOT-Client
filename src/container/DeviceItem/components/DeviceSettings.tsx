import { Box, Button, Modal, ModalContent, ModalHeader, ModalOverlay, Popover, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { ColorPicker, useColor, toColor} from "react-color-palette";
import _ from "lodash";
import { useUpdateLegColor } from "../../../hooks/deviceHooks";

interface IProps {
  deviceState: any;
  onClose: () => any;
}

const DeviceSetting: FC<IProps> = ({ deviceState, onClose }) => {
  const [color, setColor] = useColor("rgb", { r: deviceState.desired.red, g: deviceState.desired.green, b: deviceState.desired.blue });
  const { mutate: updateLegColor } = useUpdateLegColor();

  const handleChangeColor = () => {
    updateLegColor({
      code: deviceState.code,
      red: color.rgb.r,
      green: color.rgb.g,
      blue: color.rgb.b
    });
    onClose();
  }

  return (
    <Box display="flex" flexDirection="column" minHeight={300}>
      <Box flex="1" mb="2">
        <Box display="flex" justifyContent="center" alignItems="center" pt="3">
          <ColorPicker hideHEX={true} hideHSV={true} hideRGB={true} color={color} onChange={setColor} width={300} />
        </Box>
      </Box>
      <Button onClick={handleChangeColor} width="100%" colorScheme="twitter">Change Led Color</Button>
    </Box>
  );
}

interface IModalProps { isOpen: boolean, onClose: () => any, device: any }
export const DeviceSettingModal: FC<IModalProps> = ({ isOpen, onClose, device }) => {
  return (
    <Modal trapFocus={false} isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent p="5" pt="0" borderRadius="2xl">
        <Box p="3">
          <Text textAlign="center" fontSize="lg" fontWeight="bold" textTransform="uppercase">{device.name}</Text>
        </Box>
        <DeviceSetting onClose={onClose} deviceState={device} />
      </ModalContent>
    </Modal>
  )
}

export default DeviceSetting;