import { Box, Heading } from "@chakra-ui/react";
import BaseLayout from "../../container/BaseLayout";
import SensorList from "../../container/SensorList";

const DevicesPage = () => {
  return (
    <BaseLayout>
      <Box>
        <Heading as="h4" size="md" mb="2">Sensors</Heading>
        <SensorList />
      </Box>
    </BaseLayout>
  );
}

export default DevicesPage;
