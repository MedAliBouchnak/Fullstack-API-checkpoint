import Myimg from "../profile.png"
import React from "react";
import '../CSS/PersonCard.css'
import Location from "./Location";
import PhoneNumber from "./PhoneNumber";
import EmailAdd from "./EmailAdd"
const PersonCard = ({ userData }) => {
  console.log(userData);
  return (
    <div className="card">
      <div className="card_Title">{userData.name}</div>
      <div className="card_Body">
        <Location location={userData}/>
        <PhoneNumber type="Phone" number={userData.phone}/>
        <EmailAdd type="E-mail" email={userData.email}/>
        <div className="card_Image"><img src={Myimg }alt="" /></div>
      </div>
    </div>
  );
};

export default PersonCard;
