module.exports = {
  configs : {
    recommended : require('./configs/recommended'),
  },
  rules : {
    'align-import'     : require('./rules/align-import'),
    'align-assignment' : require('./rules/align-assignment'),
  },
};
