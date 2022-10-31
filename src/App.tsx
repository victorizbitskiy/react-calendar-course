import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App: FC = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
