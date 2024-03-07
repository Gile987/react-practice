import { useState } from "react";
import { styled } from "@mui/material";

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  backgroundColor: 'lightgray',
});

const Label = styled('label')({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  margin: '0.5rem 0 0 0.5rem',
});

const Input = styled('input')({
  padding: '0.5rem',
  margin: '0 0.5rem 0 0.5rem',
  border: '1px solid gray',
});

const TextArea = styled('textarea')({
  padding: '0.5rem',
  margin: '0.5rem',
  border: '1px solid gray',
});

const Button = styled('button')({
  padding: '0.5rem',
  margin: '0.5rem',
  backgroundColor: 'blue',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  maxWidth: 'fit-content',
});

const SubmittedMessage = styled('div')({
  marginTop: '1rem',
  padding: '1rem',
  border: '1px solid green',
  borderRadius: '5px',
  backgroundColor: '#f0f0f0',
});

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
    }, 4000);
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
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name:</Label>
      <Input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Label htmlFor="email">Email:</Label>
      <Input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Label htmlFor="message">Message:</Label>
      <TextArea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Button type="submit">Submit</Button>
      {isSubmitted && (
        <SubmittedMessage>
          <p>Thank you, {name}!</p>
          <p>Your email is: {email}</p>
          <p>You entered the following message:</p>
          <p>{message}</p>
        </SubmittedMessage>
      )}
    </Form>
  );
};

export default ContactForm;