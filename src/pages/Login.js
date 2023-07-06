import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
const Login = () => {
  const navigate = useNavigate();

  const onIMAGEClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogInText1Click = useCallback(() => {
    navigate("/home-after-login");
  }, [navigate]);

  const onCreateAccountTextClick = useCallback(() => {
    navigate("/sign-in");
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
    <div className={styles.login}>
      <div className={styles.frame}>
        <div className={styles.rectangle} />
        <img
          className={styles.imageIcon}
          alt=""
          src="/image2@2x.png"
          onClick={onIMAGEClick}
        />
        <div className={styles.frame1}>
          <img className={styles.frameIcon} alt="" src="/frame1.svg" />
          <div className={styles.logIn}>Log in</div>
          <div className={styles.frame2}>
            <div className={styles.frame3}>
              <div className={styles.rectangle1} />
              <img className={styles.imageIcon1} alt="" src="/image6.svg" />
              <div className={styles.email}>Email</div>
            </div>
            <div className={styles.rectangle2} />
            <div className={styles.frame4}>
              <div className={styles.rectangle1} />
              <img className={styles.imageIcon1} alt="" src="/image7.svg" />
              <div className={styles.password}>Password</div>
            </div>
            <div className={styles.logIn1} onClick={onLogInText1Click}>
              Log in
            </div>
          </div>
        </div>
        <div className={styles.frame5}>
          <div className={styles.rectangle4} />
          <div
            className={styles.createAccount}
            onClick={onCreateAccountTextClick}
          >
            Create Account
          </div>
          <div className={styles.frame6}>
            <div className={styles.rectangle5} />
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
          <div className={styles.dontHaveAn}>Don't have an account?</div>
        </div>
      </div>
      <div className={styles.rectangle6} />
    </div>
  );
};

export default Login;
