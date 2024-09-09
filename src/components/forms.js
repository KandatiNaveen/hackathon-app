import React, { useState } from "react";
import "./forms.css";
import cloud from "../images/bxs_cloud-upload.svg";
import fill from "../images/bi_image-fill.svg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
function ChallengeDetailsForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    startsIn: "",
    endDate: "",
    description: "",
    image: "",
    levelType: "Easy",
    buttonLabel: "Participate Now",
    status: "Upcoming",
  });

  const [imagePreview, setImagePreview] = useState("");

  let savedData = JSON.parse(localStorage.getItem("challenges")) || [];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    console.log("submitting")
    event.preventDefault();
    console.log("Submitted Form Data:", formData);

    savedData.push(formData);
    localStorage.setItem("challenges", JSON.stringify(savedData));
    navigate("/")
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prevFormData) => ({
          ...prevFormData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const resetFileInput = () => {
    const fileInput = document.getElementById("imageUpload");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <div>
      <Header/>
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
                  onClick={() => {
                    document.getElementById("imageUpload").click();
                    resetFileInput();
                  }}
                >
                  <span
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
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
                  onClick={() => {
                    document.getElementById("imageUpload").click();
                    resetFileInput();
                  }}
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
              Create Challenge
            </button>
        </form>
      </div>
    </div>
  );
}

export default ChallengeDetailsForm;
