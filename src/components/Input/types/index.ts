export interface Values {
   day?: string;
   mouth?: string;
   year?: string;
}

export interface InputProps {
   setDate: (val: Values) => void;
}

export interface InputsItemProps {
   type: string;
   placeholder: string;
}