import React from "react";
import note1 from "../assets/notes icon.svg";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="container-fluied ">
        <div className="row">
          <h1 className="topick"> Notes App</h1>

          <div className="col text-white align-items-center p-4 pt-5">
            <Link style={{ textDecoration: "none" }} to="/note">
              <div className="side d-flex gap-3  ">
                <img
                  style={{ width: "32px", height: "32px" }}
                  src={note1}
                  alt=""
                />
                <p className=" text-white">Notes</p>
              </div>
            </Link>
          </div>
        </div>


      </div>
    </>
  );
}

export default Sidebar;
