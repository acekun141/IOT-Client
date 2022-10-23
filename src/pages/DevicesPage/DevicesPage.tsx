import { Box, Grid, Heading } from "@chakra-ui/react";
import BaseLayout from "../../container/BaseLayout";
import DeviceSwitcher from "../../container/DeviceSwitcher";
import { BiWind, BiTv } from "react-icons/bi"

const DevicesPage = () => {
  return (
    <BaseLayout>
      <Box>
        <Heading as="h4" size="md" mb="2">Devices</Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          <DeviceSwitcher icon={BiWind} deviceName="Air Conditioner" deviceStatus="25°C Temperature" />
          <DeviceSwitcher icon={BiTv} deviceName="TV" deviceStatus="37% Volume" />
        </Grid>
      </Box>
    </BaseLayout>
  );
}

export default DevicesPage;