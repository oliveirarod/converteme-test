import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Hooks
import { useEffect, useState } from "react";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1275);

  // Control sidebar
  useEffect(() => {
    const handleResize = () => setIsSidebarOpen(window.innerWidth > 1275);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Navbar />

        <div
          className="page-content"
          style={{ marginLeft: isSidebarOpen ? "" : "4rem" }}
        >
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

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
