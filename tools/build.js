
// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html

// Allow console calls since this is a build file.
/*eslint-disable no-console */

import webpack       from 'webpack';
import colors        from 'colors';

import webpackConfig from '../webpack.config.prod';

process.env.NODE_ENV = 'production';    // This assures the Babel DEV config (for hot reloading) doesn't apply.

console.log('Generating minified bundle for production via Webpack. This may take a moment...'.bgCyan);

webpack(webpackConfig).run((err, stats) => {
    
    // Stop here if a fatal error occurred...
    if (err) {
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings: '.bold.yellow);
        jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`Webpack stats: ${stats}`);

    // If the code got this far, then the build succeeded...
    console.log('Your app has comiled in production mode and written to /dist. It is read...'.green);

    return 0;
});