import styles from './style.module.scss'

import { OutputItemProps } from './types';

export const OutputItem = ({ title, value }: OutputItemProps) => {
   return (
      <div className={styles.output_item}>
         <span className={styles.output_accent}>{isNaN(value) ? '--' : value}</span>
         {title}
      </div>
   );
};

