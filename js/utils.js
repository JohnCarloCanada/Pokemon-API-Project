const lowerCaseFunc = (data) => {
  return data.trim().toLowerCase();
};

const upperCaseFunc = (data) => {
  return data.charAt(0).toUpperCase() + data.slice(1);
};

export { lowerCaseFunc, upperCaseFunc };
