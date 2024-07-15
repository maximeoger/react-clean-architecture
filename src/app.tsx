import * as React from "react";
import ErrorBoundary, { ErrorLayout } from "components/error-boundary/index";
import Router from "./router";

export default function App() {
  return (
    <ErrorBoundary fallback={<ErrorLayout />}>
      <Router />
    </ErrorBoundary>
  );
}
