import { Box, Grid, Heading } from "@chakra-ui/react";
import BaseLayout from "../../container/BaseLayout";
import DeviceSwitcher from "../../container/DeviceItem";
import DeviceList from "../../container/DeviceList";

const DevicesPage = () => {
  return (
    <BaseLayout>
      <Box>
        <Heading as="h4" size="md" mb="2">Devices</Heading>
        <DeviceList />
      </Box>
    </BaseLayout>
  );
}

export default DevicesPage;