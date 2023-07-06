import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeAfterLogin.module.css";
const HomeAfterLogin = () => {
  const navigate = useNavigate();

  const onContactTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onTermsOfUseClick = useCallback(() => {
    navigate("/terms-and-conditions");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onPrivacyPolicyTextClick = useCallback(() => {
    navigate("/privacy-policy");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/mymenu");
  }, [navigate]);

  const onSetmenuBlacklogo1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.homeAfterLogin}>
      <div className={styles.footer}>
        <div className={styles.rectangle} />
        <div className={styles.frame}>
          <div className={styles.frame1}>
            <div className={styles.contact} onClick={onContactTextClick}>
              Contact
            </div>
            <div className={styles.termsOfUse} onClick={onTermsOfUseClick}>
              Terms of Use
            </div>
            <div className={styles.about} onClick={onAboutTextClick}>
              About
            </div>
            <div
              className={styles.privacyPolicy}
              onClick={onPrivacyPolicyTextClick}
            >
              Privacy Policy
            </div>
          </div>
          <div className={styles.copyright2022}>Copyright © 2022 SetMenu</div>
        </div>
      </div>
      <div className={styles.yourOrdersParent}>
        <div className={styles.yourOrders}>Your Orders</div>
        <img
          className={styles.arrowCard11Icon}
          alt=""
          src="/arrowcard1-1.svg"
        />
      </div>
      <div className={styles.yourMenuParent} onClick={onFrameContainer3Click}>
        <div className={styles.yourOrders}>Your Menu</div>
        <img
          className={styles.arrowCard11Icon}
          alt=""
          src="/arrowcard1-1.svg"
        />
      </div>
      <div className={styles.mainMenuParent}>
        <div className={styles.mainMenu}>Main Menu</div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.myMenuParent}>
        <div className={styles.myMenu}>My Menu</div>
        <div className={styles.orders}>Orders</div>
      </div>
      <div className={styles.header}>
        <div className={styles.frame2}>
          <img className={styles.profile1Icon} alt="" src="/profile-1@2x.png" />
          <div className={styles.userName}>User Name</div>
          <div className={styles.signOut}>Sign Out</div>
        </div>
        <img
          className={styles.setmenuBlacklogo1Icon}
          alt=""
          src="/setmenublacklogo-1@2x.png"
          onClick={onSetmenuBlacklogo1ImageClick}
        />
      </div>
      <img className={styles.card11Icon} alt="" src="/card1-1@2x.png" />
      <img className={styles.card21Icon} alt="" src="/card2-1@2x.png" />
    </div>
  );
};

export default HomeAfterLogin;
