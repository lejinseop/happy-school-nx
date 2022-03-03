import React from "react";
import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import Pages from "./pages";

const App: FC = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <React.Suspense fallback="Loading">
        <Pages />
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
