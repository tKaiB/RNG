import React from "react";
import NavBar from "../components/Navbar";
import "./styles.css";

/**
 *
 * @returns {JSX} - FAQ page
 */

function FAQ() {
  return (
    <div style={{ fontFamily: "Inter" }}>
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
            that suits their individual health needs.
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
            Do we have to pay for any usage on this web application?{" "}
            <span class="faq-open-icon">+</span>
          </summary>
          <span class="faq-card-spoiler">
            No! Our website is absolutely free for usage and will not request
            for any form of payment.
          </span>
        </details>
        <details class="faq-card">
          <summary>
            Will this application help me to guarantee fat loss or gain muscles?{" "}
            <span class="faq-open-icon">+</span>
          </summary>
          <span class="faq-card-spoiler">
            Our application only provides recommendations and does not guarantee
            fat loss or gain muscles. However, we strongly believe that our
            recommendations will assist Users in their journey towards their
            desired goals!
          </span>
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
