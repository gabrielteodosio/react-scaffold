const name_generator = (name) => {
  return (
    name.charAt(0).toLocaleUpperCase() +
    name.toLocaleLowerCase().substring(1, name.length)
  );
};

module.exports = name_generator;
