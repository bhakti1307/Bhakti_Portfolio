import React from "react";
import PageWrapper from "../components/PageWrapper";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <PageWrapper>
      <h1>Contact Me</h1>
      <p>Let’s build something amazing together.</p>
      <ContactForm />
    </PageWrapper>
  );
}
