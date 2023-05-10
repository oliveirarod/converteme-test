// Styles
import "./App.css";
import GlobalStyles from "./GlobalStyles";

// Components
import Navbar from "./components/Navbar/Navbar";
import Charges from "./pages/Charges";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Charges />
    </div>
  );
}

export default App;
