// Кастомный рендерер, чтобы все работало, а не только стилусовские миксины
var stylus = require('stylus')
    , nib = require('./lib/nib')
    , fs = require('fs')
    // Для примера рендерим всегда test.styl
    , str = fs.readFileSync(__dirname + '/test.styl', 'utf8');

stylus(str)
    .set('filename', __dirname + '/test.styl')
    .use(nib())
    .render(function(err, css){
        if (err) throw err;
        fs.writeFileSync(__dirname + '/test.css', css, 'utf-8')
        console.log('WRITE FILE: test.css');
    });
