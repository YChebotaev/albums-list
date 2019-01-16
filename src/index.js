import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "react-error-boundary";
import { App } from "./components/App";
import { FullscreenSpinner } from "./components/FullscreenSpinner";
import { ShowError } from "./components/ShowError";
import { ApolloProvider } from "react-apollo-hooks";
import { createApolloClient } from "./createApolloClient";
import "typeface-roboto";
import "normalize.css";
import "./index.css";

const rootElement = document.getElementById("root");
const apolloClient = createApolloClient();
const renderApp = () => (
  <Suspense fallback={<FullscreenSpinner />}>
    <ErrorBoundary FallbackComponent={ShowError}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </ErrorBoundary>
  </Suspense>
);
ReactDOM.render(renderApp(), rootElement);
