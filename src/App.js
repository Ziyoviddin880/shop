import Main from "./components/mainSection/Main";
import Product from "./components/product/Product";
import Orders from "./components/orders/Orders";
import jsonData from "./data/data.json";
import { createContext } from "react";
import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";

export const dataContext = createContext();

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
    )
  );
  const [data, setData] = useState(jsonData);
  return (
    <div>
      <dataContext.Provider value={{ data, setData }}>
        <RouterProvider router={routes} />
      </dataContext.Provider>
    </div>
  );
}

export default App;
