import { Form } from 'formik';
import { InputsItem } from './Inputs-item';
import { Button } from './Inputs-button';

import styles from './style.module.scss';

export const InputsForm = () => {
   return (
      <Form className={styles.inputs_form}>
         <div className={styles.inputs_fields}>
            <InputsItem type="day" placeholder="DD" />
            <InputsItem type="mouth" placeholder="MM" />
            <InputsItem type="year" placeholder="YYYY" />
         </div>
         <Button />
      </Form>
   );
};
