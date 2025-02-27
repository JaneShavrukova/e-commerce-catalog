import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './UserActions.module.scss';
import { closeMenu } from 'modules/shared/helpers/handlers';
import { useMenuContext } from 'contexts/MenuContext';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.icon, {
    [styles.linkActive]: isActive,
  });

export const UserActions: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();

  return (
    <div
      className={classNames(styles.userActions, {
        [styles.menuOpen]: isMenuOpen,
      })}
    >
      <NavLink
        to="/favorites"
        className={getLinkClass}
        onClick={() => closeMenu(isMenuOpen, toggleMenu)}
      >
        <img
          className={styles.image}
          src="img/icons/heart.svg"
          alt="Favorites"
        />
      </NavLink>

      <NavLink
        to="/cart"
        className={getLinkClass}
        onClick={() => closeMenu(isMenuOpen, toggleMenu)}
      >
        <img className={styles.image} src="img/icons/cart.svg" alt="Cart" />
      </NavLink>
    </div>
  );
};
