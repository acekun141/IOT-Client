import { Chart } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from "chart.js";
import { Box } from "@chakra-ui/react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DataChart = ({ data }: {data: any[]}) => {
  return (
    <Box width="100%">
      <Chart
        type="line"
        data={{
          labels: data.map(item => item.date),
          datasets: [{
            backgroundColor: '#1DA1F2',
            borderColor: '#1DA1F2',
            data: data.map(item => item.value)
          }]
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {

            }
          }
        }}
      />
    </Box>
  );
}

export default DataChart;