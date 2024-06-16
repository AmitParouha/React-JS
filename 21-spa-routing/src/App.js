import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./components/ErrorPage";
import ProductDetails from "./components/ProductDetails";
import ProductPage from "./components/ProductPage";

// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />}/>
//     <Route path='/about' element={<AboutPage />}/>
//   </Route>
// )

// const router = createBrowserRouter(routerDefinition);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true,  element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/product/:productId", element: <ProductDetails/>}
    ],
  },
]);

function App() {
  console.log("app page render");
  return <RouterProvider router={router} />;
}

export default App;
