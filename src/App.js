import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
const App = () => {
const [users, setUsers] = useState([]);
useEffect(() => {
const fetchData = async () => {
try {
  const response = await axios.get("https://api.github.com/users");
  console.log(response);
  setUsers(response.data);
} catch (error) {
console.error("Error fetching data:", error);
}
};
fetchData();
}, []);
return (
  <div className="App">
    <Navbar />
    <div className="container">
      <h1>GitHub Users Data</h1>
      <Search />
    </div>
    <Users users={users} />
  </div>
);
};
export default App;