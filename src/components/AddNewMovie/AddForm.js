import { useState } from "react";
import "./AddForm.css";
import { Form, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Popup from "./Popup";

export default function AddForm({ addNewMovie }) {
  const [formError, setFormError] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    year: 0,
    rating: "",
    duration: "",
  });

  const { image, title, duration, year, rating } = formData;
  const [isOpen, setIsOpen] = useState(false); //for popup of add

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  function yearValidation() {
    //not an empty string
    if (!formData.year) {
      setFormError(false);
      alert("year is required");
    } else {
      setFormError(true);
    }
    //constraints for year
    var text = /^[0-9]+$/;
    if (formData.year != 0) {
      if (formData.year != "" && !text.test(formData.year)) {
        alert("Please Enter Numeric Values Only");
        setFormError(false);
      } else setFormError(true);

      if (formData.year.length != 4) {
        alert("Year is not proper. Please check");
        setFormError(false);
      } else setFormError(true);

      var currentYear = new Date().getFullYear();
      if (formData.year < 1920 || formData.year > currentYear) {
        alert("Year should be in range 1920 to current year");
        setFormError(false);
      } else setFormError(true);
    }
  }
  function titleValidation() {
    if (!formData.title) {
      setFormError(false);
      alert("Title is required");
    } else {
      setFormError(true);
    }
  }
  function durationValidation() {
    if (!formData.duration) {
      setFormError(false);
      alert("Duration is required");
    } else {
      setFormError(true);
    }
  }
  function ratingValidation() {
    if (!formData.rating) {
      setFormError(false);
      alert("Rating is required");
    } else {
      setFormError(true);
    }
    //constraints for rating
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function Vadilation() {
    yearValidation(formData);
    titleValidation(formData);
    durationValidation(formData);
    ratingValidation(formData);
  }

  const handleSubmit = () => {
    setIsOpen(!isOpen);
    Vadilation(formData);
    if (formError) {
      addNewMovie(formData);
    } else {
      return null;
    }
  };

  return (
    <div>
      <input type="button" value="Add New Movie" onClick={togglePopup} />
      {/* {showForm ? <AddForm addNewMovie={addNewMovie} /> : null} */}

      {isOpen && (
        <Popup
          content={
            <Form>
              <p>Please Fill The Details Of Movie</p>
              <Form.Group as={Row} controlId="formFile" className="mb-3">
                <Form.Label column sm={2}>
                  Select an Image
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="file" onChange={(e) => handleChange(e)} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formtitle">
                <Form.Label column sm={2}>
                  Title
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    name={"title"}
                    value={title}
                    onChange={(e) => handleChange(e)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formyear">
                <Form.Label column sm={2}>
                  Year
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Year"
                    name={"year"}
                    value={year}
                    onChange={(e) => handleChange(e)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formrating">
                <Form.Label column sm={2}>
                  Rating
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Rating"
                    name={"rating"}
                    value={rating}
                    onChange={(e) => handleChange(e)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="duration">
                <Form.Label column sm={2}>
                  Duration
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Duration eg:'1h20min','3h'"
                    name={"duration"}
                    value={duration}
                    onChange={(e) => handleChange(e)}
                  />
                </Col>
              </Form.Group>

              <Button onClick={handleSubmit}> Add Movie</Button>
            </Form>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
