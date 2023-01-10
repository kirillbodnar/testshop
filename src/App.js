import { Provider } from "react-redux";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { store } from "./redux";

import { Navbar } from "./components/Navbar/Navbar";
import { Shop } from "./pages/Shop/Shop";
import { Cart } from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
