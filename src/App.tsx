import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Styles
import "./App.css";
import GlobalStyles from "./GlobalStyles";

// Contexts
import { StepperContextProvider } from "./context/StepperContext";
import { AdditionalOptionsContextProvider } from "./context/AdditionalOptions";

// Components
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Charges from "./pages/Charges";

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Navbar />

        <div className="page-content">
          <Sidebar />

          <AdditionalOptionsContextProvider>
            <StepperContextProvider>
              <Routes>
                <Route path="/cobranca" element={<Charges />} />
                <Route path="/" element={<Navigate to="/cobranca" />} />
              </Routes>
            </StepperContextProvider>
          </AdditionalOptionsContextProvider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
