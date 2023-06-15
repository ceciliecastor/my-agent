"use client";

import { useField } from "formik";

interface LabelProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  border?: boolean;
}

const CustomInput: React.FC<LabelProps> = ({ label, border, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <div>
      <label className="">{label}</label>
      <input
        {...field}
        {...props}
        className={`
        text-[#7B7B7B]
        bg-white 
        rounded 
        w-full 
        p-[25px]
        mb-[24px]
        ${border ? "border-0" : "border-2"}
        ${meta.touched && meta.error ? "" : ""}`}
      />
      {meta.touched && meta.error && <p className="">{meta.error}</p>}
    </div>
  );
};

export default CustomInput;
