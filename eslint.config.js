const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory : __dirname,
});

module.exports = [
  {
    // ignores test/sample.js if needed
    // ignores : ['**/test/sample.js'],
  },
  ...compat.config({
    extends : [
      // 'plugin:perfectionist-align/recommended'
      //
      //
      'airbnb-base',
    ],
    plugins : [
      'perfectionist-align',
    ],
    rules : {
      'perfectionist-align/align-import'     : [1],
      'perfectionist-align/align-assignment' : [1],

      // align config
      'keyword-spacing' : [1],
      'key-spacing'     : [1, { align : 'colon', beforeColon : true }],
      'no-multi-spaces' : [1, {
        exceptions :
          {
            AssignmentExpression : true,
            ImportDeclaration    : true,
            VariableDeclarator   : true,
          },
      }],
      indent : [1, 2, {
        SwitchCase             : 1,
        flatTernaryExpressions : true,
        VariableDeclarator     : 'first',
        ArrayExpression        : 'first',
        ObjectExpression       : 'first',
        ImportDeclaration      : 'first',
        FunctionDeclaration    : { parameters : 'first' },
        FunctionExpression     : { parameters : 'first' },
        CallExpression         : { arguments : 'first' },
      },
      ],

      // airbnb rules
      'import/no-extraneous-dependencies' : [0],
      'global-require'                    : [0],
      'linebreak-style'                   : [0],
      'no-plusplus'                       : [0],
      'consistent-return'                 : [0],
      'no-use-before-define'              : [0],
      'max-len'                           : [0],
      'no-template-curly-in-string'       : [0],
    },
  }),
];
