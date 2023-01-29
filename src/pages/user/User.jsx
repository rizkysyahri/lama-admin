import { PermIdentity } from "@mui/icons-material";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://preview.redd.it/utyxvf0mij051.jpg?width=640&crop=smart&auto=webp&s=8e3e763f70b59b21d0d3e42915f17fbe57888502"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Devin Booker</span>
              <span className="userShowUser">Sofware Engineer</span>
            </div>
          </div>
          <div className="userShowButton">
            <div className="userShowInfo">
              <span className="userShowTitle">Account Details</span>
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">dbook99</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowTitle">Account Details</span>
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">dbook99</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowTitle">Account Details</span>
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">dbook99</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowTitle">Account Details</span>
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">dbook99</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowTitle">Account Details</span>
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">dbook99</span>
            </div>
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
}
