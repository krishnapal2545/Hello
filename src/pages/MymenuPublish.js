import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MymenuPublish.module.css";
const MymenuPublish = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/menuid");
  }, [navigate]);

  const onGeneratedLinkTextClick = useCallback(() => {
    navigate("/menuid");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/mymenueditonclick");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/mymenu");
  }, [navigate]);

  return (
    <div className={styles.mymenuPublish}>
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
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} onClick={onRectangle1Click} />
        <div className={styles.yourMenuIs}>Your Menu is available at:</div>
        <div
          className={styles.generatedLink}
          onClick={onGeneratedLinkTextClick}
        >
          Generated Link
        </div>
        <div className={styles.menuQrCode}>Menu QR Code</div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} onClick={onRectangle2Click} />
        <div className={styles.mainMenu}>Main Menu</div>
        <div className={styles.publish}>Publish</div>
        <div className={styles.rectangleDiv} onClick={onRectangle3Click} />
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
        />
      </div>
    </div>
  );
};

export default MymenuPublish;
