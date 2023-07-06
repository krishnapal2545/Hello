import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MymenuAddedItemsPublish.module.css";
const MymenuAddedItemsPublish = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/mymenueditonclick");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/mymenuremoveonclick");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/mymenueditonclick");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/mymenuremoveonclick");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/menuid");
  }, [navigate]);

  const onGeneratedLinkTextClick = useCallback(() => {
    navigate("/menuid");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/mymenueditonclick");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/mymenu");
  }, [navigate]);

  const onSetmenuBlacklogo1ImageClick = useCallback(() => {
    navigate("/home-after-login");
  }, [navigate]);

  return (
    <div className={styles.mymenuaddedItemsPublish}>
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
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} onClick={onRectangle1Click} />
        <div className={styles.edit}>Edit</div>
        <div className={styles.frameItem} onClick={onRectangle2Click} />
        <div className={styles.remove}>Remove</div>
        <b className={styles.name}>Name</b>
        <div className={styles.category}>Category</div>
        <div className={styles.description}>Description</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} onClick={onRectangle3Click} />
        <div className={styles.edit}>Edit</div>
        <div className={styles.frameItem} onClick={onRectangle4Click} />
        <div className={styles.remove}>Remove</div>
        <b className={styles.name}>Name</b>
        <div className={styles.category}>Category</div>
        <div className={styles.description}>Description</div>
      </div>
      <div className={styles.searchParent}>
        <div className={styles.search} />
        <div className={styles.search1}>Search</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild1} onClick={onRectangle5Click} />
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
        <div className={styles.lineDiv} />
        <div className={styles.frameChild2} onClick={onRectangle6Click} />
        <div className={styles.mainMenu}>Main Menu</div>
        <div className={styles.publish}>Publish</div>
        <div className={styles.frameChild3} onClick={onRectangle7Click} />
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

export default MymenuAddedItemsPublish;
