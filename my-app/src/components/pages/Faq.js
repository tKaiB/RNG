import React from "react";
import NavBar from "../Navbar";
import "./styles.css";

function FAQ() {
  return (
    <div>
      <NavBar />
      <div class="container">
        <h2 class="faq-heading">Frequently asked questions</h2>
        <p>Answers to frequently asked questions can be found here.</p>
        <details class="faq-card">
          <summary>
            What is this website about? <span class="faq-open-icon">+</span>
          </summary>
          <span class="faq-card-spoiler">
            This website is about providing a platform for users to find recipes
            that suits their individual heatlh needs.
          </span>
        </details>
        <details class="faq-card">
          <summary>
            Do I need an account to use this platform?{" "}
            <span class="faq-open-icon">+</span>
          </summary>
          <span class="faq-card-spoiler">
            Yes. You will need to create an account to use this platform.
          </span>
          <span class="faq-card-spoiler">
            Our platform is user profile based, hence it is necessary for users
            to have their individual account.{" "}
          </span>
        </details>
        <details class="faq-card">
          <summary>
            To be filled in <span class="faq-open-icon">+</span>
          </summary>
          <span class="faq-card-spoiler">To be filled in</span>
        </details>
        <details class="faq-card">
          <summary>
            To be filled in <span class="faq-open-icon">+</span>
          </summary>
          <span class="faq-card-spoiler">To be filled in</span>
        </details>
        <details class="faq-card">
          <summary>
            To be filled in <span class="faq-open-icon">+</span>
          </summary>
          <span class="faq-card-spoiler">To be filled in</span>
        </details>

        <h2 class="faq-heading">Still have questions?</h2>
        <p class="faq-aftertext">
          If you cannot find answer to your question in our FAQ, you can always
          contact us at 1800-we-need-help. We will answer shortly!
        </p>
      </div>
    </div>
  );
}

export default FAQ;
