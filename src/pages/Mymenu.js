import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Mymenu.module.css";
const Mymenu = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/mymenueditonclick");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/mymenu-publish");
  }, [navigate]);

  const onSetmenuBlacklogo1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.mymenu}>
      <div className={styles.footer}>
        <div className={styles.rectangle} />
        <div className={styles.frame}>
          <div className={styles.frame1}>
            <div className={styles.contact}>Contact</div>
            <div className={styles.termsOfUse}>Terms of Use</div>
            <div className={styles.about}>About</div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
          </div>
          <div className={styles.copyright2022}>Copyright © 2022 SetMenu</div>
        </div>
      </div>
      <div className={styles.searchParent}>
        <div className={styles.search} />
        <div className={styles.search1}>Search</div>
        <div className={styles.noItemsAre}>No Items are there</div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} onClick={onRectangle1Click} />
        <div className={styles.mainMenu}>Main Menu</div>
        <div className={styles.publish}>Publish</div>
        <div className={styles.frameInner} onClick={onRectangle2Click} />
        <div className={styles.ellipseDiv} />
        <img
          className={styles.plusCircle1Icon}
          alt=""
          src="/pluscircle-1.svg"
        />
        <b className={styles.addFood}>Add Food</b>
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
    </div>
  );
};

export default Mymenu;
