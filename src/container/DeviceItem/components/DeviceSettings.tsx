import { Box, Button, Modal, ModalContent, ModalHeader, ModalOverlay, Popover, PopoverContent, PopoverTrigger, Switch, Text } from "@chakra-ui/react";
import { FC, useEffect, useMemo, useState } from "react";
import { ColorPicker, useColor, toColor} from "react-color-palette";
import _ from "lodash";
import { useUpdateLed, useUpdateLegColor } from "../../../hooks/deviceHooks";

interface IProps {
  deviceState: any;
  onClose: () => any;
}

const DeviceSetting: FC<IProps> = ({ deviceState, onClose }) => {
  const [color, setColor] = useColor("rgb", { r: deviceState.desired.red, g: deviceState.desired.green, b: deviceState.desired.blue });
  const { mutate: updateLegColor } = useUpdateLegColor();
  const { mutate: updateLedStatus } = useUpdateLed()
  const [isLedOn, setIsLedOn] = useState(_.get(deviceState, "desired.led") == "on")

  const handleToggleLed = () => {
    const newValue = isLedOn ? "off" : "on";
    const newState = {
      "led": newValue,
      "pump": _.get(deviceState, "desired.pump"),
      "red": _.get(deviceState, "desired.red"),
      "green": _.get(deviceState, "desired.green"),
      "blue": _.get(deviceState, "desired.blue")
    }
    updateLedStatus({ code: deviceState.code, newState });
  }

  const handleChangeColor = () => {
    updateLegColor({
      code: deviceState.code,
      red: color.rgb.r,
      green: color.rgb.g,
      blue: color.rgb.b
    });
    onClose();
  }

  useEffect(() => {
    setIsLedOn(_.get(deviceState, "desired.led") == "on")
  }, [_.get(deviceState, "desired.led")])

  return (
    <Box display="flex" flexDirection="column" minHeight={300}>
      <Box flex="1" mb="2">
        <Box display="flex" justifyContent="center" alignItems="center" pt="3">
          <ColorPicker hideHEX={true} hideHSV={true} hideRGB={true} color={color} onChange={setColor} width={300} />
        </Box>
      </Box>
      <Box flex="1" mb="2">
        <Text>Led</Text>
        <Switch onChange={handleToggleLed} isChecked={isLedOn} colorScheme="twitter" size="md" />
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
