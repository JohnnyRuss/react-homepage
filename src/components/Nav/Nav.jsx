import styles from "./Nav.module.scss";

import Logo from "assets/images/logo.png";
import { baseNav, LoginSVG, LogoutSVG, authorizedNav } from "data/nav";
import NavButton from "./NavButton";

export default function Nav() {
  const isAuthenticated = false;

  return (
    <nav className={styles.nav}>
      <figure className={styles["logo-fig"]}>
        <img src={Logo} alt="" />
      </figure>

      <ul className={styles["nav__list"]}>
        {authorizedNav.map((route, i) => (
          <NavButton
            withCaption={true}
            route={route}
            key={`${route.id}__${i}`}
          />
        ))}

        {baseNav.map((route, i) => (
          <NavButton
            withCaption={true}
            route={route}
            key={`${route.id}__${i}`}
          />
        ))}

        {isAuthenticated ? (
          <NavButton
            withCaption={false}
            route={{ icon: LogoutSVG, label: "" }}
          />
        ) : (
          <NavButton
            withCaption={false}
            route={{ icon: LoginSVG, label: "" }}
          />
        )}
      </ul>
    </nav>
  );
}
