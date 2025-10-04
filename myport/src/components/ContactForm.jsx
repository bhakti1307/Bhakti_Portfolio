import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const form = new FormData(e.target);
    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: form,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setStatus("Message sent! ✅");
      e.target.reset();
    } else {
      setStatus("Oops! Try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
        margin: "2rem auto",
      }}
    >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows="5" placeholder="Your Message" required />
      <button type="submit">Send</button>
      <p>{status}</p>
    </form>
  );
}
