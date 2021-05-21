const pluralize = require('pluralize');

module.exports = {
  helpers: {
    capitalizeFirstLetter(string, isSingular = false) {
      if (isSingular) {
        return pluralize.singular(
          string.charAt(0).toUpperCase() + string.slice(1),
        );
      }
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    lowercaseFirstLetter(string, isSingular = false) {
      if (isSingular) {
        return pluralize.singular(
          string.charAt(0).toLowerCase() + string.slice(1),
        );
      }
      return string.charAt(0).toLowerCase() + string.slice(1);
    },
  },
};
