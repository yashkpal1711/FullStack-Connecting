import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Users from "./Pages/Users";
import UpdateUser from "./Pages/UpdateUser";

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
          <Route path="/update/:id" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
