import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = (values, options) => {
    handleAddContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    options.resetForm();
  };

  const checkValues = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name should be at least 3 characters")
      .max(50, "Name should be at most 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .matches(/^[0-9\s\-+()]*$/, "Invalid phone number format")
      .min(3, "Number should be at least 3 characters")
      .max(50, "Number should be at most 50 characters")
      .required("Number is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={checkValues}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field type='text' name='name' className={css.input} />
          <ErrorMessage name='name' component='p' className={css.error} />
        </label>
        <label className={css.label}>
          Number
          <Field type='tel' name='number' className={css.input} />
          <ErrorMessage name='number' component='p' className={css.error} />
        </label>

        <button type='submit'>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
