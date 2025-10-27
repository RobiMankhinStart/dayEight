import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import { createRoutesFromChildren } from "react-router";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProDetail";

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/prodetail/:proId" element={<ProductDetails />} />
        </Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;
