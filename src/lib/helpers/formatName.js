// allowing only alphabetical characters for name

export const formatName = (value) => {
  if (!value) return value;

  return value.replace(/[\d]/g, "");
};
