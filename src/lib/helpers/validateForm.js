export const validateForm = (values, setErrors) => {
  let nameError = "";
  let emailError = "";
  let availabilityError = "";
  let phoneError = "";

  if (!Object.values(values.availability).includes(true)) {
    availabilityError = "Please check at least one box.";
  }

  if (!values.name) {
    nameError = "Please enter your full name.";
  } else if (values.name.length < 2 || values.name.length > 64) {
    nameError = "Name must be between 2 and 64 characters.";
  }

  if (!values.email) {
    emailError = "Please enter your email.";
  } else if (!values.email.includes(".") || !values.email.includes("@")) {
    emailError = "Please enter a valid email.";
  }

  if (values.phone.length < 14) {
    phoneError = "Please enter a valid phone number.";
  }

  if (availabilityError || nameError || emailError || phoneError) {
    setErrors({ nameError, availabilityError, emailError, phoneError });

    return false;
  }

  return true;
};
