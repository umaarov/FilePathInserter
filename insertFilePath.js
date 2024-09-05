const fs = require('fs');
const path = require('path');
const filePath = process.argv[2];
let content = fs.readFileSync(filePath, 'utf8');
const extension = path.extname(filePath);
let commentSyntax = '';

function getCommentSyntax(extension, content) {
  switch (extension) {
    case '.php':
      if (content.trim().startsWith('<?php')) {
        return '<!--';
      } else {
        return '//';
      }
    case '.js':
    case '.ts':
    case '.cpp':
    case '.java':
    case '.cs':
    case '.go':
      return '//';
    case '.py':
    case '.sh':
    case '.rb':
    case '.pl':
    case '.yml':
    case '.yaml':
    case '.env':
    case '.toml':
      return '#';
    case '.html':
    case '.xml':
      return '<!--';
    case '.css':
    case '.scss':
      return '/*';
    default:
      return '//';
  }
}

commentSyntax = getCommentSyntax(extension, content);
const relativeFilePath = path.relative(process.cwd(), filePath);
const comment = extension === '.php' ? `${commentSyntax} ${relativeFilePath} -->\n` : `${commentSyntax} ${relativeFilePath}\n`;

if (!content.startsWith(comment)) {
  fs.writeFileSync(filePath, comment + content, 'utf8');
}
