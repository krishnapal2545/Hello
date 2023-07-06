import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onIMAGE1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onLogInTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.rectangle} data-scroll-to="rectangle" />
      <img className={styles.imageIcon} alt="" src="/image.svg" />
      <div className={styles.mainContent}>
        <div className={styles.rectangle1} />
        <div className={styles.improveTheQuality}>
          Improve the quality of your restaurant's menu.
        </div>
        <div className={styles.theFinestSoftware}>
          The finest software for creating digital menus is SetMenu.
        </div>
        <div className={styles.frame} onClick={onFrameContainerClick}>
          <div className={styles.rectangle2} />
          <img className={styles.imageIcon1} alt="" src="/image1.svg" />
          <div className={styles.signUpFor}>Sign up for free</div>
        </div>
      </div>
      <div className={styles.header}>
        <img
          className={styles.imageIcon2}
          alt=""
          src="/image2@2x.png"
          onClick={onIMAGE1Click}
        />
        <div className={styles.frame1}>
          <div className={styles.frame2} onClick={onFrameContainer1Click}>
            <div className={styles.rectangle3} />
            <div className={styles.signUpFor1}>Sign up for free</div>
          </div>
          <div className={styles.logIn} onClick={onLogInTextClick}>
            Log in
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
