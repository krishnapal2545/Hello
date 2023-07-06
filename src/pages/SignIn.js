import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";
const SignIn = () => {
  const navigate = useNavigate();

  const onIMAGEClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCreateAccountText1Click = useCallback(() => {
    navigate("/home-after-login");
  }, [navigate]);

  const onLogInTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onTermsAndConditionsClick = useCallback(() => {
    navigate("/terms-and-conditions");
  }, [navigate]);

  const onPrivacyPolicyTextClick = useCallback(() => {
    navigate("/privacy-policy");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className={styles.signIn}>
      <div className={styles.frame}>
        <div className={styles.rectangle} />
        <img
          className={styles.imageIcon}
          alt=""
          src="/image2@2x.png"
          onClick={onIMAGEClick}
        />
        <div className={styles.main}>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
          <div className={styles.createAccount}>Create Account</div>
          <div className={styles.frame1}>
            <div className={styles.frame2}>
              <div className={styles.rectangle1} />
              <img className={styles.imageIcon1} alt="" src="/image3.svg" />
              <div className={styles.name}>Name</div>
            </div>
            <div className={styles.frame3}>
              <div className={styles.rectangle1} />
              <img className={styles.imageIcon2} alt="" src="/image4.svg" />
              <div className={styles.password}>Password</div>
            </div>
            <div className={styles.rectangle3} />
            <div className={styles.frame4}>
              <div className={styles.rectangle1} />
              <img className={styles.imageIcon1} alt="" src="/image5.svg" />
              <div className={styles.email}>Email</div>
            </div>
            <div className={styles.frame5}>
              <div className={styles.rectangle1} />
              <img className={styles.imageIcon2} alt="" src="/image4.svg" />
              <div className={styles.confirmedPassword}>Confirmed Password</div>
            </div>
            <div
              className={styles.createAccount1}
              onClick={onCreateAccountText1Click}
            >
              Create Account
            </div>
          </div>
        </div>
        <div className={styles.frame6}>
          <div className={styles.rectangle6} />
          <div className={styles.logIn} onClick={onLogInTextClick}>
            Log in
          </div>
          <div className={styles.frame7}>
            <div className={styles.rectangle7} />
            <div className={styles.contact} onClick={onContactTextClick}>
              Contact
            </div>
            <div
              className={styles.termsAndConditions}
              onClick={onTermsAndConditionsClick}
            >
              Terms and Conditions
            </div>
            <div
              className={styles.privacyPolicy}
              onClick={onPrivacyPolicyTextClick}
            >
              Privacy Policy
            </div>
            <div className={styles.about} onClick={onAboutTextClick}>
              About
            </div>
            <div className={styles.setmenu}>© 2022 SetMenu.</div>
          </div>
          <div className={styles.doYouAlready}>
            Do you already have an account?
          </div>
        </div>
      </div>
      <div className={styles.rectangle8} />
    </div>
  );
};

export default SignIn;
