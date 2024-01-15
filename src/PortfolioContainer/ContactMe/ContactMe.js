import React from "react";
import styles from "./ContactMe.module.scss";

const ContactMe = () => {
  return (
    <section className={styles.contact_container} id="contact">
      <div className={styles.contact_parent}>
        <div className={styles.contact_form}>
          <h2>Get in touch</h2>
          <form action="https://formspree.io/f/xbjnlrwe" method="POST">
            <label>Name</label>
            <input type="text" name="username" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" id="message"></textarea>

            <button className="btn highlighted-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
