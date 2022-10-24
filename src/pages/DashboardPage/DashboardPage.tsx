import { Box, Heading, Grid, GridItem, Text, Switch, Flex } from "@chakra-ui/react";
import BaseLayout from "../../container/BaseLayout";
import DeviceList from "../../container/DeviceList";
import SensorList from "../../container/SensorList";

const DashboardPage = () => {
  return (
    <BaseLayout>
      <Box mb="6">
        <Heading as="h4" size="md" mb="2">Devices</Heading>
        <DeviceList />
      </Box>
      <Box>
        <Heading as="h4" size="md" mb="2">Sensors</Heading>
        <SensorList />
      </Box>
      </BaseLayout>
    );
  }

export default DashboardPage;