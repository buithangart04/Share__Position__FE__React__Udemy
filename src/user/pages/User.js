import React from "react";
import UsersList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "thangpro",
      image:
        "https://i.pinimg.com/originals/60/d8/b6/60d8b611ff25ee1e59788c7eefca8a27.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default User;
