import React from "react";
import styles from "../../scss/components/Menu.module.scss";

export type Types = {} & React.HTMLAttributes<HTMLHeadingElement>;

const Menu: React.FC<Types> = ({ ...arg }) => {
  const menu = [
    {
      main: { title: "Stats", image: "" },
      sub: [],
    },
    {
      main: { title: "Act", image: "" },
      sub: [
        { title: "Sports", image: "" },
        { title: "Bath", image: "" },
        { title: "Cleaning", image: "" },
        { title: "Game", image: "" },
        { title: "Lunch", image: "" },
        { title: "Sleep", image: "" },
        { title: "Sound", image: "" },
      ],
    },
  ];
  return (
    <nav className={styles.menu} {...arg}>
      <ul className={styles.menu__unit}>
        {menu.map((item, index) => (
          <li className={styles.menu__unit__list} key={index}>
            <button
              className={`${styles.menu__unit__list__button}`}
              aria-label={item.main.title.toLowerCase()}
            ></button>
            {item.sub && (
              <ul className={styles.menu__subUnit}>
                {item.sub.map((subItem, subIndex) => (
                  <li className={styles.menu__subUnit__list} key={subIndex}>
                    <button
                      aria-label={subItem.title.toLowerCase()}
                      className={styles.menu__subUnit__list__button}
                    ></button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <button className={styles.menu__live} aria-label={"Live"}></button>
    </nav>
  );
};
export default Menu;
