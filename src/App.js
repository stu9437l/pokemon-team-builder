import "./App.css";
import Routing from "./route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routing />
      <ToastContainer />
    </>
  );
}

export default App;
