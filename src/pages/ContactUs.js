import styles from "./ContactUs.module.css";
const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.rectangle} />
          <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
          <div className={styles.frame2}>
            <div className={styles.rectangle1} />
            <div className={styles.contactUs1}>Contact Us</div>
            <div className={styles.mailUsAt}>
              Mail Us at Business.setmenu@gmail.com
            </div>
          </div>
        </div>
        <div className={styles.frame3}>
          <div className={styles.rectangle2} />
          <div className={styles.frame4}>
            <div className={styles.frame5}>
              <div className={styles.about}>About</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.termsOfUse}>Terms of Use</div>
              <div className={styles.contact}>Contact</div>
            </div>
            <div className={styles.copyright2022}>Copyright © 2022 SetMenu</div>
          </div>
        </div>
      </div>
      <div className={styles.rectangle3} />
    </div>
  );
};

export default ContactUs;
