import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, } from "react-router-dom";
import "./index.css";
import router from "./Routes/Route";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="max-width-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);