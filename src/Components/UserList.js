import PersonCard from "./PersonCard";
import "../CSS/UserList.css";

const UserList = ({ listOfUser, search }) => {
  return (
    <div className="users">
      <h1>Social Cards</h1>
      <input
        className="search-box"
        placeholder="Search..."
        type="text"
        onInput={(e) => search(e.target.value)}
      />
      <div className="Cards-Container">
        {listOfUser.map((user, key) => (
          <PersonCard userData={user} key={key} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
