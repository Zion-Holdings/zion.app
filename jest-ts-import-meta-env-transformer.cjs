// jest-ts-import-meta-env-transformer.cjs
const ts = require('typescript');

const transformerName = 'ts-jest-import-meta-env-transformer';
const transformerVersion = 2; // Incremented version

// This is the transformer factory function.
// For `isolatedModules: true`, ts-jest often passes only the TransformationContext.
function factory(ctx) { // ctx is ts.TransformationContext
  return (sourceFile) => { // This function is ts.Transformer<ts.SourceFile>
    function visitor(node) { // node is ts.Node
      // Check for import.meta.env
      if (ts.isPropertyAccessExpression(node) &&
          node.expression.kind === ts.SyntaxKind.MetaProperty &&
          ts.isIdentifier(node.expression.name) && node.expression.name.escapedText === 'meta' &&
          ts.isIdentifier(node.name) && node.name.escapedText === 'env') {

        return ts.factory.createObjectLiteralExpression(
          [
            ts.factory.createPropertyAssignment(
              ts.factory.createIdentifier('VITE_REOWN_PROJECT_ID'),
              ts.factory.createStringLiteral('test_project_id_from_jest_transformer')
            ),
          ],
          false // multiLine
        );
      }
      return ts.visitEachChild(node, visitor, ctx);
    }
    return ts.visitNode(sourceFile, visitor); // ts.visitNode ensures the whole SourceFile is processed
  };
}

module.exports = factory;
module.exports.version = transformerVersion;
module.exports.name = transformerName;
// For compatibility, some systems might look for `factory` on the export:
module.exports.factory = factory;
