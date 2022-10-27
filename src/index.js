import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import {
  // createBrowserRouter,
  // RouterProvider,
  // Route

  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const Expensify = () => <h2>From dash board</h2>;
const Create = () => <h2>From create</h2>;
const Edit = () => <h2>Feom edit </h2>;
const Help = () => <h2>Feom help </h2>;
const NotFound = () => (
  <h2>
    404! Go Home <Link to="/">Home page</Link>
  </h2>
);
const Header = () => {
  return (
  <header>
    <h1>Expensify App</h1>
    <NavLink to="/" style={{fontWeight:"bold"}} >Dashboard</NavLink>
    <NavLink to="/create" >Create</NavLink>
    <NavLink to="/edit" >Edit</NavLink>
    <NavLink to="/help">Help</NavLink>
  </header>
)};

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Expensify/>,
//   },
//   {
//     path:"/create",
//     element: <Create/>
//   },
//   {
//     path:"/edit",
//     element: <Edit/>
//   },
//   {
//     path:"/help",
//     element: <Help/>
//   },
//   {
//     path:"*",
//     element:<NotFound/>
//   }

// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/help" element={<Help />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/ex" element={<Expensify />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
