export type InputType = {
  placeholder?: string;
  label?: string;
  radius?: any;
  size?: any;
  required?: boolean;
  icon?: any;
  className?: string;
};

export type NumberInputType = {
  label?: string;
  size?: any;
  radius?: any;
  placeholder?: string;
  defaultValue?: number;
  min?: number;
  className?: string;
  max?: number;
  icon?: React.ReactNode;
  hideControls?: boolean;
};
