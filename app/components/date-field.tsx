import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  className: string;
  value: string | null | undefined;
  onChange: (value: string | undefined) => void;
}

export const DateField = ({ className, value, onChange }: Props) => {
  return (
    <DatePicker
      selected={value ? new Date(value) : undefined}
      onChange={(date: any) => {
        onChange(date || undefined);
      }}
      className={className}
    />
  );
};
