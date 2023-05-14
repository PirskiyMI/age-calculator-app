import styles from './style.module.scss';
import { ErrorMessage, Field } from 'formik';
import { InputsItemProps } from './types';

export const InputsItem = ({ type, placeholder }: InputsItemProps) => {
   return (
      <div className={styles.inputs_item}>
         <label className={styles.inputs_label}>{type}</label>
         <Field type="text" name={type} placeholder={placeholder} className={styles.inputs_field} />
         <ErrorMessage name={type} component="div" className={styles.inputs_error} />
      </div>
   );
};
