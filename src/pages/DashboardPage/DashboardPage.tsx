import { Box, Heading, Grid, GridItem, Text, Switch } from "@chakra-ui/react";
import BaseLayout from "../../container/BaseLayout";
import { BiWind, BiTv } from "react-icons/bi"

const DashboardPage = () => {
  return (
    <BaseLayout>
      <Box>
        <Heading as="h4" size="md" mb="2">Devices</Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          <GridItem
            display="flex"
            flexDirection="row"
            p="3"
            bgColor="white"
            boxShadow="sm"
            borderRadius="2xl"
            alignItems="center"
          >
            <Box p="2">
              <BiWind size="38" />
            </Box>
            <Box flex="1">
              <Text fontWeight="bold">Air Conditioner</Text>
              <Text color="gray.500" fontSize="xs">25°C Temperature</Text>
            </Box>
            <Box>
              <Switch colorScheme="teal" size="md" />
            </Box>
          </GridItem>
          <GridItem
            display="flex"
            flexDirection="row"
            p="3"
            bgColor="white"
            boxShadow="sm"
            borderRadius="2xl"
            alignItems="center"
          >
            <Box p="2">
              <BiTv size="38" />
            </Box>
            <Box flex="1">
              <Text fontWeight="bold">TV</Text>
              <Text color="gray.500" fontSize="xs">37% Volume</Text>
            </Box>
            <Box>
              <Switch colorScheme="teal" size="md" />
            </Box>
          </GridItem>
        </Grid>
        </Box>
      </BaseLayout>
    );
  }

export default DashboardPage;