import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../util/validators";
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
const UpdatePlace = () => {
  const [isLoading, setLoading] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const placeId = useParams().placeId;
  const indentifyPlace = DUMMY_PLACES.find((place) => place.id === placeId);
  useEffect(() => {
    setTimeout(()=>{
      setFormData(
        {
          title: {
            value: indentifyPlace.title,
            isValid: false,
          },
          description: {
            value: indentifyPlace.description,
            isValid: true,
          },
          address: {
            value: indentifyPlace.address,
            isValid: true,
          },
        },
        true
      );
      setLoading(false);
    }, 1000);
   
  }, [setFormData,indentifyPlace]);

  if (!indentifyPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading ...</h2>
      </div>
    );
  }
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        errorText="Please enter a valid title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        initialValid={formState.inputs.title.isValid}
        initialValue={formState.inputs.title.value}
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        errorText="Please enter a valid address"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        initialValid={formState.inputs.address.isValid}
        initialValue={formState.inputs.address.value}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        errorText="Please enter a valid description (at least 5 characters)."
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        initialValid={formState.inputs.description.isValid}
        initialValue={formState.inputs.description.value}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};
export default UpdatePlace;
