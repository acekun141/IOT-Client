import { Chart } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from "chart.js";
import { Box } from "@chakra-ui/react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DataChart = () => {
  return (
    <Box width="100%">
      <Chart
        type="line"
        data={{
          labels: ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '13 PM'],
          datasets: [{
            backgroundColor: '#1DA1F2',
            borderColor: '#1DA1F2',
            data: [30, 10, 5, 2, 20, 30, 45]
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