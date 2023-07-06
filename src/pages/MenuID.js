import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MenuID.module.css";
const MenuID = () => {
  const navigate = useNavigate();

  const onFrameContainer2Click = useCallback(() => {
    navigate("/menuidonclick");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/menuidonclick");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/menuidonclick");
  }, [navigate]);

  const onSetmenuBlacklogo1ImageClick = useCallback(() => {
    navigate("/home-after-login");
  }, [navigate]);

  return (
    <div className={styles.menuid}>
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
      <div className={styles.ellipseParent} onClick={onFrameContainer2Click}>
        <img className={styles.frameChild} alt="" src="/ellipse-2@2x.png" />
        <div className={styles.name}>Name</div>
        <div className={styles.price}>Price</div>
        <div className={styles.description}>Description</div>
        <div className={styles.category}>Category</div>
      </div>
      <div className={styles.ellipseGroup} onClick={onFrameContainer3Click}>
        <img className={styles.frameChild} alt="" src="/ellipse-2@2x.png" />
        <div className={styles.name}>Name</div>
        <div className={styles.price}>Price</div>
        <div className={styles.description}>Description</div>
        <div className={styles.category}>Category</div>
      </div>
      <div className={styles.ellipseContainer} onClick={onFrameContainer4Click}>
        <img className={styles.frameChild} alt="" src="/ellipse-2@2x.png" />
        <div className={styles.name}>Name</div>
        <div className={styles.price}>Price</div>
        <div className={styles.description}>Description</div>
        <div className={styles.category}>Category</div>
      </div>
      <div className={styles.searchAndFilter}>
        <div className={styles.search} />
        <div className={styles.search1}>Search</div>
        <div className={styles.searchAndFilterChild} />
        <div className={styles.all}>All</div>
        <div className={styles.searchAndFilterItem} />
        <div className={styles.item1}>Item 1</div>
        <div className={styles.searchAndFilterInner} />
        <div className={styles.item2}>Item 2</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.item3}>Item 3</div>
        <div className={styles.searchAndFilterChild1} />
        <div className={styles.item4}>Item 4</div>
        <div className={styles.menu}>Menu</div>
      </div>
      <div className={styles.header}>
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

export default MenuID;
