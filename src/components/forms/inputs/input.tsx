export enum InputType {
  text = "text",
  email = "email",
}
type InputProps = {
  type: InputType;
  name: string;
  placeholder?: string;
  value?: string;
  label?: string;
  icon?: JSX.Element;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reference?: React.RefObject<HTMLInputElement>;
};

const Input = ({
  type = InputType.text,
  name,
  placeholder,
  label,
  value = "",
  icon,
  reference,
  onChange = () => {},
}: InputProps) => {
  return (
    <fieldset className="flex flex-col items-start gap-2">
      {label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="relative mt-2 rounded-md shadow-sm w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </div>
        <input
          ref={reference}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          id={name}
          className="bg-[#EFF2F7] focus:bg-white focus:border border-[#322B8C] border-collapse box-border block w-full rounded-md border-0 py-4 pl-12 text-gray-900 outline-none ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </fieldset>
  );
};

export { Input };
