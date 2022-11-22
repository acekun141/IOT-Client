import { Badge, Box, Flex, Heading } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { IconType } from "react-icons";
import { BiSun } from "react-icons/bi";
import DataChart from "../DataChart";


interface IProps {
  name: string;
  icon: IconType;
  status: "good" | "warning" | "dangerous",
  data: any[];
}

const statusBadge = {
  "good": {text: "Good", colorSchema: "green"},
  "warning": {text: "Warning", colorSchema: "orange"},
  "dangerous": {text: "Dangerous", colorSchema: "red"},
}


const Sensor: FC<IProps> = ({ icon: Icon, ...props }) => {
  const bagde = useMemo(() => {
    return statusBadge[props.status]
  }, [props.status]);

  return (
    <Box p="5" bgColor="white" boxShadow="sm" borderRadius="2xl">
      <Flex mb="5" justifyItems="center">
        <Box pr="2">
          <Icon size="20px" />
        </Box>
        <Heading textTransform="capitalize" as="h6" size="sm">{props.name}</Heading>
        <Box flex="1" />
        <Badge p="1" pl="2" pr="2" borderRadius="xl" colorScheme={bagde.colorSchema}>{bagde.text}</Badge>
      </Flex>
      <DataChart data={props.data} />
    </Box>
  );
}

export default Sensor;
