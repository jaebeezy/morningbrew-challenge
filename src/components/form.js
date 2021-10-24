import React from "react";

// components
import TextInput from "./textinput";
import AvailabilityPicker from "./availabilitypicker";
import DatePicker from "./datepicker";
import TextBox from "./textbox";

// hooks
import useForm from "../lib/hooks/useForm";

const Form = () => {
  const {
    values,
    errors,
    submitted,
    handleChange,
    handleSubmit,
    handleDobInput,
    handleAvailInput,
  } = useForm();

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Your Full Name *"
          name="name"
          placeholder="Full Name"
          value={values.name}
          onChange={handleChange}
          errors={errors.nameError}
        />
        <TextInput
          label="Your Email *"
          name="email"
          placeholder="email@email.com"
          value={values.email}
          onChange={handleChange}
          errors={errors.emailError}
        />
        <DatePicker
          label="Date of Birth"
          name="dob"
          value={values.dob}
          onChange={handleDobInput}
        />
        <TextInput
          label="Phone Number *"
          name="phone"
          placeholder="(111) 111-1111"
          value={values.phone}
          onChange={handleChange}
          errors={errors.phoneError}
          max={14}
        />
        <AvailabilityPicker
          label="Best time to contact *"
          name="availability"
          value={values.availability}
          onChange={handleAvailInput}
          errors={errors.availabilityError}
        />
        <TextBox
          label="Bio"
          name="bio"
          value={values.bio}
          onChange={handleChange}
          max={300}
        />
        {submitted ? (
          <button className="submitted" disabled>
            SUBMITTED!
          </button>
        ) : (
          <button>SUBMIT</button>
        )}
      </form>
    </div>
  );
};

export default Form;
