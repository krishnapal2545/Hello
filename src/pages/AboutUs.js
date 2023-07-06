import styles from "./AboutUs.module.css";
const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.rectangle} />
          <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
          <img className={styles.imageIcon1} alt="" src="/image8.svg" />
          <div className={styles.frame2}>
            <div className={styles.rectangle1} />
            <div className={styles.aboutUs1}>About Us</div>
            <div className={styles.setmenuWasFounded}>
              SetMenu was founded in 2022 by a technology enthusiasts who saw an
              opportunity to improve the way restaurants share their menus with
              the world. We are constantly working to improve our platform and
              add new features that help restaurants succeed. If you are a
              restaurant or food business owner or manager and would like to
              learn more about how SetMenu can help you grow your business,
              please don't hesitate to contact us.
            </div>
            <div className={styles.setmenuIsA}>
              SetMenu is a company that provides a platform for restaurants to
              create and manage their online menus. Our goal is to make it easy
              for restaurants to showcase their offerings and for customers to
              find and order the dishes they love.
            </div>
            <div className={styles.weWouldLove}>
              We would love to hear from you!
            </div>
          </div>
        </div>
        <div className={styles.frame3}>
          <div className={styles.rectangle2} />
          <div className={styles.frame4}>
            <div className={styles.frame5}>
              <div className={styles.about}>About</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.contact}>Contact</div>
              <div className={styles.termsOfUse}>Terms of Use</div>
            </div>
            <div className={styles.copyright2022}>Copyright © 2022 SetMenu</div>
          </div>
        </div>
      </div>
      <div className={styles.rectangle3} />
    </div>
  );
};

export default AboutUs;
