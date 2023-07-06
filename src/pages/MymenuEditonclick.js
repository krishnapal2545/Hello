import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MymenuEditonclick.module.css";
const MymenuEditonclick = () => {
  const navigate = useNavigate();

  const onEllipse1Click = useCallback(() => {
    navigate("/mymenuadded-items-publish");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/mymenuadded-items-publish");
  }, [navigate]);

  return (
    <div className={styles.mymenueditonclick}>
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
      <div className={styles.mymenueditonclickChild} />
      <div className={styles.mymenueditonclickItem} onClick={onEllipse1Click} />
      <img className={styles.close2Icon} alt="" src="/close-2@2x.png" />
      <b className={styles.edit2}>Edit</b>
      <div
        className={styles.mymenueditonclickInner}
        onClick={onRectangle9Click}
      />
      <b className={styles.editFood}>Edit Food</b>
      <div className={styles.name2}>Name</div>
      <div className={styles.category2}>Category</div>
      <div className={styles.description2}>Description</div>
      <div className={styles.price}>Price</div>
      <div className={styles.mymenueditonclickChild1} />
      <div className={styles.mymenueditonclickChild2} />
      <div className={styles.mymenueditonclickChild3} />
      <div className={styles.mymenueditonclickChild4} />
    </div>
  );
};

export default MymenuEditonclick;
