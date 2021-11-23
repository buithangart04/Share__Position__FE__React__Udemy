import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const UserPlaces = (props) => {
  const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Đại Học FPT",
      description: "University in Viet Nam",
      imageUrl:
        "https://lh5.googleusercontent.com/p/AF1QipMXn9uMCOUe5AicyQXygyYLDakVog-G_-GRqX2j=w408-h306-k-no",
      address:
        "khu công nghệ cao Hòa Lạc – Km29, ĐCT08, Thạch Hoà, Thạch Thất, Hà Nội 10000, Việt Nam",
      location: {
        lat: 21.01325,
        lng: 105.5248756,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "Đại Học FPT",
      description: "University in Viet Nam",
      imageUrl:
        "https://lh5.googleusercontent.com/p/AF1QipMXn9uMCOUe5AicyQXygyYLDakVog-G_-GRqX2j=w408-h306-k-no",
      address:
        "khu công nghệ cao Hòa Lạc – Km29, ĐCT08, Thạch Hoà, Thạch Thất, Hà Nội 10000, Việt Nam",
      location: {
        lat: 21.01325,
        lng: 105.5248756,
      },
      creator: "u2",
    },
  ];
  const userId = useParams().userId;
  const loadPlaces= DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadPlaces} />;
};

export default UserPlaces;
