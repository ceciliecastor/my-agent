import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomInputFormik";
import Button from "./Button";
import Link from "next/link";

interface LoginFormProps {
  email: string;
  password: string;
}

const InitialLoginValues: LoginFormProps = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object({
  email: Yup.string().required("Please enter a valid email"),
  password: Yup.string().email("* Please enter a valid password").required(),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={InitialLoginValues}
      validationSchema={LoginSchema}
      onSubmit={(values, action) => {
        console.log(values);
        action.setSubmitting(false);
      }}
    >
      <Form className="border-2 py-[72px] px-[190px] w-[920px]">
        <h2 className="text-center mb-[40px]">Log ind på din konto</h2>
        <CustomInput label="Email" name="email" type="email" />
        <CustomInput label="Password" name="password" type="password" />
        <Button label="Login" />
        <div className="grid grid-cols-3 gap-[16px] mt-[24px]">
          <Link href="google.com">
            <div className="bg-[#DD4B39]">
              <h4 className="text-center text-white py-[24px]">Google</h4>
            </div>
          </Link>
          <Link href="facebook.com">
            <div className="bg-[#3B5999]">
              <h4 className="text-center text-white py-[24px]">Facebook</h4>
            </div>
          </Link>
          <Link href="google.com">
            <div className="bg-[#162A41]">
              <h4 className="text-center text-white py-[24px]">Twitter</h4>
            </div>
          </Link>
        </div>
        <div className="flex gap-2 justify-center mt-[16px]">
          <p className="text-center">Har du ikke en bruger?</p>
          <Link href="/opretbruger">Opret bruger.</Link>
        </div>
      </Form>
    </Formik>
  );
};
export default LoginForm;
