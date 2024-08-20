import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import AppRoutes from "./pages/AppRoutes";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
