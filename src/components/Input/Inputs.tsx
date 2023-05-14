import { Formik } from 'formik';

import styles from './style.module.scss';

import { validation } from './validation';
import { InputProps, Values } from './types';
import { InputsForm } from './Inputs-form';

export const Inputs = ({ setDate }: InputProps) => {
   return (
      <div className={styles.inputs}>
         <Formik
            initialValues={{ day: '', mouth: '', year: '' }}
            validate={validation}
            onSubmit={(values: Values) => setDate(values)}>
            {({ errors, touched }) => <InputsForm />}
         </Formik>
      </div>
   );
};
