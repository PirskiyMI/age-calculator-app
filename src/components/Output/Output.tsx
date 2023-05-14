import { OutputItem } from './Output-item';
import styles from './style.module.scss';
import { OutputProps } from './types';


export const Output = ({ value }: OutputProps) => {
   return (
      <div className={styles.output}>
         <OutputItem title={'year'} value={value.year} />
         <OutputItem title={'month'} value={value.month} />
         <OutputItem title={'day'} value={value.day} />
      </div>
   );
};
