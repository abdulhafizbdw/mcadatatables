import { React, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ConfigProvider } from "antd";
import "./App.css";
import DashboardLayout from "./components/Layout/index.js";
import ASMEB36 from "./ASMEB36.js";
import ASMEB16C from "./ASMEB16C.js";
import ASMEB16F from "./ASMEB16F.js";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2573f9",
          // colorText: "#6E6B7B",
        },
        components: {
          Collapse: {
            headerBg: "#ffffff",
          },
        },
      }}
    >
      <Suspense fallback="loading">
        <Router basename={"/tables"}>
          <Routes>
            <Route path="/" element={<DashboardLayout />}>
              <Route path="/" element={<Navigate to="/asmeB36" replace />} />
              <Route exact path="/asmeB36" element={<ASMEB36 />} />
              <Route exact path="/asmeB16(C)" element={<ASMEB16C />} />
              <Route exact path="/asmeB16(F)" element={<ASMEB16F />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
