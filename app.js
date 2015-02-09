var traceur = require('traceur');

var compiler = new traceur.NodeCompiler({modules: 'commonjs', experimental: true});

compiler.compileSingleFile('./esnext.js', './transpiled.js', function(err){

    console.log("transpiled?!");
});


/*
Running this produces: 

/source/examples/node-traceur-spike/node_modules/traceur/bin/traceur.js:27224
        throw errorReporter.errors;
                           ^
./esnext.js:14:7: Semi-colon expected,./esnext.js:15:25: Semi-colon expected

*/