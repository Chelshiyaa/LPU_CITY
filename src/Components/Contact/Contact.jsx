import React from "react";
import "./Contact.css";
import msgicon from "../../assets/msgicon.png";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "afca1705-b59a-41b6-802f-b24252f41c0c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msgicon} alt="" />
        </h3>
        <p>
          Feel Free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={email} alt="" />
            lpu123@gmail.com{" "}
          </li>
          <li>
            <img src={phone} alt="" />
            +11234567890{" "}
          </li>
          <li>
            <img src={location} alt="" />
            123 Main St, City, State, Zip
          </li>
        </ul>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Write your message here"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
