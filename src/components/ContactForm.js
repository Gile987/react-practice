import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(false);
    }, 2000);
  };

  /*
  const new formData = new FormData();
  we dont have value and we dont need onChange
  we could use useRef to save the value
  if i dont use useRef, then i need to use formData to get the value

  we could use const newFormData = FormData(formRef.current) to get the value
  and then use it to set form data
  that way we dont render the component on every change, because we wont use onChange
  */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          console.log("Name:", name);
        }}
        required
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          console.log("Email:", email);
        }}
        required
      />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          console.log("Message:", message);
        }}
        required
      />
      <br />
      <button type="submit">Submit</button>
      {isSubmitted && (
        <div>
          <p>Thank you, {name}!</p>
          <p>Your email is: {email}</p>
          <p>You entered the following message:</p>
          <p>{message}</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;