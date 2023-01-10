import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "react-query";
import socketIOClient from "socket.io-client";
import configs from './utils/configs';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

// 3. Extend the theme
const theme = extendTheme({ breakpoints })

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})

export const socketIO = socketIOClient(configs.API_ENDPONT);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme} portalZIndex={5000}>
      <App />
    </ChakraProvider>
  </QueryClientProvider>
)
