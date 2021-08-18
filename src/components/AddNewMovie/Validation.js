import React, { Component } from "react";
import AddForm from "./AddForm";
const ratingValidation = (rating) => {
  if (!rating) {
    return "Rating is Required";
  }
  if (rating != "G" || "PG" || "PG - 13" || "R" || "NC - 17") {
    return "must be valid rating";
  }
  return null;
};

const numberValidation = (year) => {
  console.log("hii");
  if (!year) {
    return "Year is requires";
  }
  return null;
};

const Validate = {
  // title: (string) => stringValidation("Title", string),
  year: numberValidation,
  rating: ratingValidation,
  // duration: duarationValidation,
};

export default function Vadilation(props) {
  return (
    <div>
      <AddForm Validate={Validate} />
    </div>
  );
}
