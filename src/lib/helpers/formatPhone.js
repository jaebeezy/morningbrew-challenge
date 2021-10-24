// allowing only digits for phone number
// also automatically formatting its value

export const formatPhone = (value) => {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "");

  if (phoneNumber.length < 4) return phoneNumber;

  if (phoneNumber.length < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};
