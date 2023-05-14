import { Values } from './types';

export const validation = (values: Values) => {
   const errors: Values = {};
   if (!values.day?.trim()) {
      errors.day = 'Required';
   } else if (Number(values.day) > 31 || Number(values.day) <= 0) {
      errors.day = 'Must be a valid day';
   }
   if (!values.mouth?.trim()) {
      errors.mouth = 'Required';
   } else if (Number(values.mouth) > 12 || Number(values.mouth) <= 0) {
      errors.mouth = 'Must be a valid month';
   }
   if (!values.year?.trim()) {
      errors.year = 'Required';
   } else if (Number(values.year) > 2023) {
      errors.year = 'Must be in the past';
   } else if (Number(values.year) <= 0) {
      errors.mouth = 'Must be a valid year';
   }
   return errors;
};
