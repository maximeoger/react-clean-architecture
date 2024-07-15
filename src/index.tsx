import * as React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./app";

const container = document.getElementById("root");
const root = createRoot(container);


const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });

  
root.render(
<QueryClientProvider client={queryClient}>
    <App />
</QueryClientProvider>
);