import React from 'react';
import styles from './Styles.module.css';

const ContactSection = () => {
  return (
    <section className={styles['contact-us']}>
      <div className={styles.row}>
        <div className={styles['contact-col']}>
          <div>
            <i className="fa fa-home"></i>
            <span>
              <h5>Xyz Road, Abc Building</h5>
              <p>Bangalore, Karnataka, IN</p>
            </span>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <span>
              <h5>+1 0123456789</h5>
              <p>Monday to Saturday 10 AM to 6 PM</p>
            </span>
          </div>
          <div>
            <i className="fa fa-envelope-o"></i>
            <span>
              <h5>info@easytutorialspro.com</h5>
              <p>Email us your query</p>
            </span>
          </div>
        </div>
        <div className={styles['contact-col']}>
          <form method="post" action="contact-form-handler.php">
            <input type="text" name="name" placeholder="Enter your name" required />
            <input type="email" name="email" placeholder="Enter email address" required />
            <input type="text" name="subject" placeholder="Enter your subject" required />
            <textarea rows="8" name="message" placeholder="Message" required />
            <button type="submit" className={`hero-btn red-btn ${styles.button}`}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
