import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MenuIDonclick.module.css";
const MenuIDonclick = () => {
  const navigate = useNavigate();

  const onEllipseClick = useCallback(() => {
    navigate("/menuid");
  }, [navigate]);

  return (
    <div className={styles.menuidonclick}>
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
      <div className={styles.ellipseParent}>
        <img className={styles.frameChild} alt="" src="/ellipse-2@2x.png" />
        <div className={styles.name}>Name</div>
        <div className={styles.price}>Price</div>
        <div className={styles.description}>Description</div>
        <div className={styles.category}>Category</div>
      </div>
      <div className={styles.ellipseGroup}>
        <img className={styles.frameChild} alt="" src="/ellipse-2@2x.png" />
        <div className={styles.name}>Name</div>
        <div className={styles.price}>Price</div>
        <div className={styles.description}>Description</div>
        <div className={styles.category}>Category</div>
      </div>
      <div className={styles.ellipseContainer}>
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
        />
      </div>
      <div className={styles.menuidonclickChild} />
      <div className={styles.menuidonclickItem} onClick={onEllipseClick} />
      <img className={styles.close1Icon} alt="" src="/close-1@2x.png" />
      <b className={styles.name3}>Name</b>
      <b className={styles.price3}>Price</b>
      <div className={styles.category3}>Category</div>
      <div className={styles.description3}>Description</div>
    </div>
  );
};

export default MenuIDonclick;
