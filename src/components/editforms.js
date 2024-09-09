import React, { useState, useRef } from "react";
import "./forms.css";
import cloud from "../images/bxs_cloud-upload.svg";
import fill from "../images/bi_image-fill.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function EditForms() {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef(null); // Use useRef to create a reference to the file input element

  const challenge = location.state?.challenge || {
    title: "",
    startsIn: "",
    endDate: "",
    description: "",
    image: "",
    levelType: "Easy",
    buttonLabel: "Participate Now"
  };

  const index = location.state?.index || {};

  const [formData, setFormData] = useState({
    title: challenge.title,
    startsIn: challenge.startsIn,
    endDate: challenge.endDate,
    description: challenge.description,
    image: challenge.image,
    levelType: challenge.levelType,
    buttonLabel: "Participate Now"
  });

  const [imagePreview, setImagePreview] = useState(challenge.image);

  let savedData = JSON.parse(localStorage.getItem("challenges")) || [];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Form Data:", formData);

    savedData[index] = formData;
    localStorage.setItem("challenges", JSON.stringify(savedData));
    navigate("/");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prevFormData) => ({
          ...prevFormData,
          image: reader.result, // Save the base64 image to formData
        }));
      };
      reader.readAsDataURL(file); // Convert image to base64 format
    }
  };

  const handleChangeImageClick = () => {
    // Trigger the click event using the ref to the input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <Header />
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Challenge Name</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="startsIn">Start Date</label>
            <input
              type="date"
              id="startsIn"
              name="startsIn"
              value={formData.startsIn}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Image</label>
            {imagePreview ? (
              <div className="image-container">
                <img
                  src={imagePreview}
                  alt="Challenge Preview"
                  style={{
                    width: "300px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                />
                <button
                  type="button"
                  className="upload-button"
                  onClick={handleChangeImageClick} // Use the function that triggers the ref
                >
                  <span style={{ display: "inline-flex", alignItems: "center" }}>
                    <img
                      src={fill}
                      alt="Change Icon"
                      style={{ width: "20px", marginRight: "5px" }}
                    />
                    Change image
                  </span>
                </button>
              </div>
            ) : (
              <div>
                <input
                  type="file"
                  id="imageUpload"
                  name="image"
                  ref={fileInputRef} // Use the ref to reference this input
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
                <button
                  type="button"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "10px",
                    backgroundColor: "#00ab41",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={handleChangeImageClick} // Use the function that triggers the ref
                >
                  <img
                    src={cloud}
                    alt="Icon"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "8px",
                    }}
                  />
                  Upload
                </button>
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="levelType">Level Type</label>
            <select
              id="levelType"
              name="levelType"
              value={formData.levelType}
              onChange={handleInputChange}
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditForms;
