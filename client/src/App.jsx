import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Notes from "./components/Notes";
import AddNote from "./components/Note/AddNote";
import EditNote from "./components/Note/EditNote";
import Favorites from "./components/Favorites";
import Notifications from "./components/Notifications";
import Settings from "./components/Settings";
import Login from "./components/Login";
import Register from "./components/Register";

const Main = () => {
  return (
    <main>
      <Navigation />
      <Outlet />
    </main>
  );
};

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="notes" element={<Notes />} />
            <Route path="add-note" element={<AddNote />} />
            <Route path="edit-note" element={<EditNote />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
