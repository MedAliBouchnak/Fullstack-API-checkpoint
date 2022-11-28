import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import UserList from "./Components/UserList";
function App() {
  const [listOfUser, setListOfUser] = useState([]);
  const [keySearch, setkeySearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setListOfUser(res.data);
      })
      .catch((err) => console.log("Error", err));
  }, []);
  const Search = (text) => {
    setkeySearch(text);
  };
  return (
    <div>
      <UserList
        search={Search}
        listOfUser={listOfUser.filter((el) =>
          el.name.toLowerCase().includes(keySearch.toLowerCase())
        )}
        
      />
    </div>
  );
}
export default App;
