import React from "react";
import "./App.css";
import Homepage from "./page/Homepage";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useRoutes,
} from "react-router-dom";
import DetailNovel from "./page/DetailNovel";

function App() {
  // const routes = useRoutes([
  //   { path: "/", element: <Homepage /> },
  //   {
  //     path: "/story",
  //     element: <DetailNovel />,
  //   },
  //   // {
  //   //   path: "/users",
  //   //   element: <Users />,
  //   //   children: [
  //   //     { path: ":id", element: <Profile /> },
  //   //     { path: "/settings", element: <Settings /> },
  //   //   ],
  //   // },
  // ]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/story" element={<DetailNovel />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
