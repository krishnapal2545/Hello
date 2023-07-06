import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MymenuRemoveonclick.module.css";
const MymenuRemoveonclick = () => {
  const navigate = useNavigate();

  const onClose2ImageClick = useCallback(() => {
    navigate("/mymenuadded-items-publish");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/mymenuadded-items-publish");
  }, [navigate]);

  const onRectangle10Click = useCallback(() => {
    navigate("/mymenuadded-items-publish");
  }, [navigate]);

  return (
    <div className={styles.mymenuremoveonclick}>
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
        <div className={styles.frameChild} />
        <div className={styles.edit}>Edit</div>
        <div className={styles.frameItem} />
        <div className={styles.remove}>Remove</div>
        <b className={styles.name}>Name</b>
        <div className={styles.category}>Category</div>
        <div className={styles.description}>Description</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} />
        <div className={styles.edit}>Edit</div>
        <div className={styles.frameItem} />
        <div className={styles.remove}>Remove</div>
        <b className={styles.name}>Name</b>
        <div className={styles.category}>Category</div>
        <div className={styles.description}>Description</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild1} />
        <div className={styles.yourMenuIs}>Your Menu is available at:</div>
        <div className={styles.generatedLink}>Generated Link</div>
        <div className={styles.menuQrCode}>Menu QR Code</div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.lineDiv} />
        <div className={styles.frameChild2} />
        <div className={styles.mainMenu}>Main Menu</div>
        <div className={styles.publish}>Publish</div>
        <div className={styles.frameChild3} />
        <div className={styles.ellipseDiv} />
        <img
          className={styles.plusCircle1Icon}
          alt=""
          src="/pluscircle-11.svg"
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
      <div className={styles.mymenuremoveonclickChild} />
      <div className={styles.mymenuremoveonclickItem} />
      <img
        className={styles.close2Icon}
        alt=""
        src="/close-2@2x.png"
        onClick={onClose2ImageClick}
      />
      <div
        className={styles.mymenuremoveonclickInner}
        onClick={onRectangle9Click}
      />
      <b className={styles.no}>No</b>
      <div className={styles.doYouWantContainer}>
        <p className={styles.doYouWant}>Do you want to remove</p>
        <p className={styles.doYouWant}>thsi item?</p>
      </div>
      <div
        className={styles.mymenuremoveonclickChild1}
        onClick={onRectangle10Click}
      />
      <b className={styles.yes}>Yes</b>
    </div>
  );
};

export default MymenuRemoveonclick;
