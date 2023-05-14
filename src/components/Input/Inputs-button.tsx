import styles from './style.module.scss';
import ARROW from './../../assets/images/icon-arrow.svg';

export const Button = () => {
   return (
      <button className={styles.inputs_button} type="submit">
         <img src={ARROW} />
      </button>
   );
};
