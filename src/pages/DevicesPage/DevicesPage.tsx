import { Box, Grid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BaseLayout from "../../container/BaseLayout";
import DeviceSwitcher from "../../container/DeviceItem";
import DeviceList from "../../container/DeviceList";
import { getDevices } from "../../services/deviceServices";

const DevicesPage = () => {
  const [devices, setDevices] = useState<any[]>([]);
  const handleGetDevice = async () => {
    const { data, error } = await getDevices();
    setDevices(data.devices);
  }
  useEffect(() => {
    handleGetDevice();
  }, [])

  return (
    <BaseLayout>
      <Box>
        <Heading as="h4" size="md" mb="2">Devices</Heading>
        <DeviceList devices={devices} />
      </Box>
    </BaseLayout>
  );
}

export default DevicesPage;