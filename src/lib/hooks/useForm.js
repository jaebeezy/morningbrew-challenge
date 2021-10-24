import { useState, useEffect } from "react";

// helper functions
import { validateForm } from "../helpers/validateForm";
import { formatPhone } from "../helpers/formatPhone";
import { formatName } from "../helpers/formatName";

const useForm = () => {
  // empty form state obj
  const initialFormState = {
    name: "",
    email: "",
    dob: { month: "", day: "", year: "" },
    phone: "",
    availability: { morning: false, afternoon: false, evening: false },
    bio: "",
  };

  const initialErrors = {
    nameError: "",
    emailError: "",
    availabilityError: "",
    phoneError: "",
  };

  // states
  const [values, setValues] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  // retrieving form date from localstorage when component mounts
  useEffect(() => {
    const storedFormValues = localStorage.getItem("form");
    !storedFormValues
      ? setValues(initialFormState)
      : setValues(JSON.parse(storedFormValues));
  }, []);

  // whenever values update, add to localStorage
  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(values));
  }, [values]);

  // on change handler function
  // also checks if error currently exists to
  // update field requirements real-time
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        if (errors.nameError) {
          setErrors((errors) => ({
            ...errors,
            [`${name}Error`]:
              value.length < 2 ? "Please enter your full name." : "",
          }));
        }

        setValues((values) => ({
          ...values,
          [name]: formatName(value),
        }));
        break;

      case "email":
        if (errors.emailError) {
          setErrors((errors) => ({
            ...errors,
            [`${name}Error`]:
              !values.email.includes(".") || !values.email.includes("@")
                ? "Please enter a valid email."
                : "",
          }));
        }

        setValues((values) => ({
          ...values,
          [name]: value,
        }));
        break;

      case "phone":
        if (errors.phoneError) {
          setErrors((errors) => ({
            ...errors,
            [`${name}Error`]:
              values.phone.length !== 13
                ? "Please enter a valid phone number."
                : "",
          }));
        }

        setValues((values) => ({
          ...values,
          [name]: formatPhone(value),
        }));
        break;

      case "bio":
        setValues((values) => ({
          ...values,
          [name]: value,
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // flag to see if form is valid in order to send POST req
    let validated = validateForm(values, setErrors);

    if (validated) {
      try {
        // api request
        const response = await fetch("/api/hello", {
          method: "POST",
          body: JSON.stringify({ values }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);

        // logging out the values sent
        const data = await response.json();
        console.log("form submitted! values: ", data.values);

        setSubmitted(true);

        // returning back to empty form and error state if API req success
        setErrors(initialErrors);
        setValues(initialFormState);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleDobInput = (e) => {
    const { name, value } = e.target;

    setValues((values) => ({
      ...values,
      dob: {
        ...values.dob,
        [name]: name !== "month" ? value.replace(/[^\d]/g, "") : value,
      },
    }));
  };

  const handleAvailInput = (e) => {
    if (errors.availabilityError) {
      setErrors((errors) => ({
        ...errors,
        ["availabilityError"]: !Object.values(values.availability).includes(
          true
        )
          ? ""
          : "Please check at least one box.",
      }));
    }

    setValues((values) => ({
      ...values,
      availability: {
        ...values.availability,
        [e.target.name]: e.target.checked,
      },
    }));
  };

  return {
    values,
    errors,
    submitted,
    handleChange,
    handleSubmit,
    handleDobInput,
    handleAvailInput,
  };
};

export default useForm;
