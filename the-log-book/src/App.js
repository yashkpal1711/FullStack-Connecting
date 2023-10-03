import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Users from "./Pages/Users";

function App() {
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Users
                form={form}
                setForm={setForm}
                users={users}
                setUsers={setUsers}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
