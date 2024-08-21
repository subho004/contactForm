import { useState } from "react";

import "./App.css";

function App() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [availableTime, setavailableTime] = useState<string>("4");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!fullName) newErrors.fullName = "Full Name is Required";
    if (!email) {
      newErrors.email = "Email is Required";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      newErrors.email = "Please Select a valid Email";
    }
    if (!gender) newErrors.gender = "Please Select Your Gender";
    if (!availableTime) newErrors.availableTime = "Please Select Your Time";
    if (!message) newErrors.message = "Please select a message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Full name", fullName);
      console.log("Email", email);
      console.log("Gender", gender);
      console.log("Available Time", availableTime);
      console.log("Message", message);
      alert("Form submitted successfully");
    }
  };
  return (
    <>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h5>Contact Us</h5>
          <h2>Make an Appointment</h2>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            {errors.fullName && (
              <span className="error">{errors.fullName}</span>
            )}
            <div className="form-group">
              <input
                type="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-row">
            <div className="form-group">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Please Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {errors.gender && <span className="error">{errors.gender}</span>}

            <div className="form-group">
              <select
                value={availableTime}
                onChange={(e) => setavailableTime(e.target.value)}
              >
                <option value="4">4:00 Available</option>
                <option value="5">5:00 Available</option>
                <option value="6">6:00 Available</option>
              </select>
            </div>
            {errors.availableTime && (
              <span className="error">{errors.availableTime}</span>
            )}
          </div>

          <div className="form-message">
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit">Book Appoinment</button>
        </form>
      </div>
    </>
  );
}

export default App;
