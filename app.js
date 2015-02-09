var traceur = require('traceur');

var compiler = new traceur.NodeCompiler({modules: 'commonjs', experimental: true});

compiler.compileSingleFile('./esnext.js', './transpiled.js', function(err){

    console.log("transpiled?!");
});
