import { Provider } from "react-redux/es/exports";
import store from "./store/store";
import Navbar from "./components/navbar/Navbar";
import Muestreo from "./pages/Muestreo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "./pages/Registro";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Registro} />
          <Route path="/promedio" Component={Muestreo} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
