import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  palceholder?: string;
};

function FormInput({
  name,
  type,
  label,
  defaultValue,
  palceholder,
}: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-4 ml-2">
        {label || name}
      </Label>
      <Input
        name={name}
        id={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={palceholder}
        required
      />
    </div>
  );
}
export default FormInput;
