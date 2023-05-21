import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  agree: boolean;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  agree: false,
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("*Indtast dit navn"),
  email: Yup.string()
    .email("*Ugyldig email")
    .required("*Indtast venligst din email"),
  subject: Yup.string().required("*Indtast venligst et emne"),
  message: Yup.string().required("*Indtast venligst en besked"),
  agree: Yup.bool().oneOf([true, false]),
});

const ContactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        // handle form submission here
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {() => (
        <Form className="p-[40px] border-2 bg-white">
          <section className="flex gap-[16px]">
            <div className="grid mb-[16px]">
              <label htmlFor="name">Navn</label>
              <Field
                className="border-2 p-[8px]"
                name="name"
                type="text"
                placeholder="Indtast dit navn"
              />

              <ErrorMessage
                className="text-red-800 text-xs"
                name="name"
                component="div"
              />
            </div>
            <div className="grid mb-[16px]">
              <label htmlFor="email">Email</label>
              <Field
                className="border-2 p-[8px]"
                name="email"
                type="email"
                placeholder="Indtast din email"
              />

              <ErrorMessage
                className="text-red-800 text-xs"
                name="email"
                component="div"
              />
            </div>
          </section>
          <div className="grid mb-[16px]">
            <label className="mb-[8px]" htmlFor="subject">
              Emne
            </label>
            <Field
              className="border-2 p-[8px]"
              name="subject"
              type="text"
              placeholder="Indtast emne"
            />

            <ErrorMessage
              className="text-red-800 text-xs"
              name="subject"
              component="div"
            />
          </div>
          <div className="grid mb-[16px]">
            <label className="mb-[8px]" htmlFor="message">
              Besked
            </label>
            <Field
              className="border-2 p-[8px] h-[214px]"
              name="message"
              as="textarea"
              placeholder="Indtast din besked..."
            />

            <ErrorMessage
              className="text-red-800 text-xs"
              name="message"
              component="div"
            />
          </div>
          <div className="mb-[16px]">
            <label className="flex gap-4 mb-[8px]">
              <Field type="checkbox" name="agree" />
              Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev
            </label>

            <ErrorMessage name="agree" component="div" />
          </div>
          <button
            className="bg-[#162A41] px-[8%] py-[4%] text-white"
            type="submit"
          >
            Send besked
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
