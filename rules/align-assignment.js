/**
 * @fileoverview align-assignments
 * @author Lucas Florio <https://github.com/lucasefe>
 * PR:
 * @author starlingjon <https://github.com/starlingSolutions/eslint-plugin-align-assignments>
 * @author pdl <https://github.com/lucasefe/eslint-plugin-align-assignments/pull/15>
 * Contributors:
 * Laten Path <https://github.com/latenpath>- @author eslint-plugin-perfectionist-align
 */

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const hasRequire   = /require\(/;
const spaceMatcher = /(\s*)((?:\+|-|\*|\/|%|&|\^|\||<<|>>|\*\*|>>>|&&|\|\||\?\?)?=)/;

const assignmentTokens = [
  '=', '+=', '-=', '*=', '/=', '%=', '&=', '^=', '|=', '<<=', '>>=', '**=', '>>>=', '&&=', '||=', '??=',
];

module.exports = {
  meta : {
    fixable : 'code',
  },

  create(context) {
    const { options }  = context;
    const requiresOnly = options && options.length > 0 && options[0].requiresOnly;
    const sourceCode   = context.getSourceCode();
    const groups       = [];
    let previousNode;

    return {
      VariableDeclaration(node) {
        const source = sourceCode.getText(node);
        if (requiresOnly && !hasRequire.test(source)) { return; }

        addNode(node, node);
      },

      ExpressionStatement(node) {
        // Does it contain an assignment expression?
        const hasAssignmentExpression = node.expression.type === 'AssignmentExpression';
        if (!hasAssignmentExpression) { return; }

        addNode(node, node.expression);
      },
      'Program:exit' : checkAll,
    };

    function checkAll() {
      groups.forEach(check);
    }

    function isAssignmentExpression(node) {
      return node.type === 'AssignmentExpression';
    }

    function addNode(groupNode, node) {
      if (shouldStartNewGroup(groupNode, previousNode)) { groups.push([node]); } else { getLast(groups).push(node); }

      previousNode = groupNode;
    }

    function shouldStartNewGroup(node) {
      // first line of all
      if (!previousNode) return true;

      // switching parent nodes
      if (node.parent !== previousNode.parent) { return true; }

      // If previous node was a for and included the declarations, new group
      if (previousNode.parent.type === 'ForStatement' && previousNode.declarations) { return true; }

      // previous line was blank.
      const lineOfNode = sourceCode.getFirstToken(node).loc.start.line;
      const lineOfPrev = sourceCode.getLastToken(previousNode).loc.start.line;
      return lineOfNode - lineOfPrev !== 1;
    }

    function check(group) {
      const maxPos = getMaxPos(group);

      if (!areAligned(maxPos, group)) {
        context.report({
          loc : {
            start : group[0].loc.start,
            end   : getLast(group).loc.end,
          },
          message : 'This group of assignments is not aligned',
          fix     : (fixer) => {
            const fixings = group.map((node) => {
              const tokens          = sourceCode.getTokens(node);
              const firstToken      = tokens[0];
              const assignmentToken = tokens.find((token) => assignmentTokens.includes(token.value));
              const line            = sourceCode.getText(node);
              const lineIsAligned   = line.charAt(maxPos) === '=';

              if (lineIsAligned || !assignmentToken || isMultiline(firstToken, assignmentToken)) { return fixer.replaceText(node, line); }

              // source line may include spaces, we need to accomodate for that.
              const assignmentPos  = findAssignment(node);
              const spacePrefix    = firstToken.loc.start.column;
              const startDelimiter = assignmentToken.loc.start.column - spacePrefix;
              const endDelimiter   = assignmentToken.loc.end.column - spacePrefix;
              const start          = line.slice(0, startDelimiter).replace(/\s+$/m, '');
              const ending         = line.slice(endDelimiter).replace(/^\s+/m, '');
              const spacesRequired = maxPos - assignmentPos + 1;
              const spaces         = ' '.repeat(spacesRequired);
              const fixedText      = `${start}${spaces}${assignmentToken.value} ${ending}`;
              return fixer.replaceText(node, fixedText);
            });

            return fixings.filter((fix) => fix);
          },
        });
      }
    }

    function isMultiline(firstToken, assignmentToken) {
      return firstToken.loc.start.line !== assignmentToken.loc.start.line;
    }

    function findAssignment(node) {
      const nodeBefore  = isAssignmentExpression(node)
        ? node.left
        : node.declarations.find((dcl) => dcl.type === 'VariableDeclarator').id;
      const source      = sourceCode.getText(node);
      const spacePrefix = sourceCode.getTokens(node)[0].loc.start.column;
      const match       = source.substr(nodeBefore.loc.end.column - spacePrefix - 1).match(spaceMatcher);
      const position    = match ? nodeBefore.loc.end.column - spacePrefix + match.index + match[2].length - 1 : null;

      return position;
    }

    function areAligned(maxPos, nodes) {
      return nodes
        .filter(assignmentOnFirstLine)
        .every(
          (node) => sourceCode.getText(node).charAt(maxPos) === '=',
        );
    }

    function getMaxPos(nodes) {
      return nodes
        .filter(assignmentOnFirstLine)
        .map(findAssignment)
        .reduce((last, current) => Math.max(last, current), []);
    }

    function assignmentOnFirstLine(node) {
      if (isAssignmentExpression(node)) {
        const onFirstLine = node.left.loc.start.line === node.right.loc.start.line;
        return onFirstLine;
      }
      const source = sourceCode.getText(node);
      const lines  = source.split('\n');
      return lines[0].includes('=');
    }

    function getLast(ary) {
      return ary[ary.length - 1];
    }
  },
};
