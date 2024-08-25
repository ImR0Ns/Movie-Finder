//bootstrap for now, later tailwind
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { createBrowserRouter, RouterProvider, } from "react-router-dom";

//import my components
import Navbar from "./components/Navbar/Navbar";
import SearchMovie from "./components/SearchMovie/SearchMovie";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";


const router = createBrowserRouter([
  {
    path: "/", 
    element: (
      <>
        <Navbar />
        <SearchMovie />
      </>
    ),
  },
  {
    path: "/movie",
    element: (
      <>
        <Navbar />
        <MovieDetails />
      </>
    )
  },
]);

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

