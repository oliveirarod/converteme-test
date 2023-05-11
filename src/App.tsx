// Styles
import "./App.css";
import GlobalStyles from "./GlobalStyles";

// Contexts
import { StepperContextProvider } from "./context/StepperContext";

// Components
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Charges from "./pages/Charges";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />

      <div className="page-content">
        <Sidebar />
        <StepperContextProvider>
          <Charges />
        </StepperContextProvider>
      </div>
    </>
  );
}

export default App;
