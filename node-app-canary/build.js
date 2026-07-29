const fs = require('fs');

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

fs.writeFileSync(
    'dist/index.html',
    '<h1>Node.js Build Successful</h1>'
);

console.log('Build completed successfully');
