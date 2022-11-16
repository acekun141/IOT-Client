import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "react-query";
import socketIOClient from "socket.io-client";
import configs from './utils/configs';

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
    <ChakraProvider portalZIndex={5000}>
      <App />
    </ChakraProvider>
  </QueryClientProvider>
)
