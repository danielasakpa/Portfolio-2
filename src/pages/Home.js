import React, { useState, useEffect } from "react";
import HeaderBanner from "../components/HeaderBanner";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import MovingText from "../components/Moving-text";
import { toast } from "react-toastify";

function Home() {
  const [emailSent, setEmailSent] = useState("");

  useEffect(() => {
    console.log(emailSent);

    if (!emailSent) {
      return;
    }

    if (emailSent === "OK") {
      toast.success("Message sent ✅");
    }

    if (emailSent !== "OK" && emailSent !== "loading") {
      toast.error("Error sending message ❌");
    }
  }, [emailSent]);

  return (
    <main>
      <HeaderBanner />
      <MovingText />
      <Projects />
      <About />
      <MovingText />
      <Testimonials />
      <Contact emailSent={emailSent} setEmailSent={setEmailSent} />
    </main>
  );
}

export default Home;
