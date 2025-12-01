import React from "react";

import ParentChildAlert from "../components/ParentChildAlert.jsx";
import Logincheck from "../components/Logincheck.jsx";
import LiveInput from "../components/LiveInput.jsx";
import SmallForm from "../components/SmallForm.jsx";
import FruitsList from "../components/FruitsList.jsx";
import ProfileEditor from "../components/ProfileEditor.jsx";
import PostForm from "../components/PostForm.jsx";
import EditUser from "../components/EditUser.jsx";
import PaginationUsers from "../components/PaginationUsers.jsx";

function Home() {
  return (
    <div className="home-container">

      <section className="component-section">
        <h2>Alerts & Login</h2>
        <ParentChildAlert />
        <Logincheck />
      </section>

      <section className="component-section">
        <h2>Forms & Inputs</h2>
        <LiveInput />
        <SmallForm />
      </section>

      <section className="component-section">
        <h2>Fruits & Profiles</h2>
        <FruitsList />
        <ProfileEditor />
        <PostForm />
        <EditUser />
        <PaginationUsers />
      </section>

    </div>
  );
}

export default Home;
