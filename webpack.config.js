const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    "entry": "./src/index.js",
    "output": {
        "path": __dirname+'/bin',
        "filename": "[name].[chunkhash:8].js"
    },
    "plugins": [
        new HtmlWebpackPlugin()
    ],
    "module": {
        "rules": [
            {
                "test": /\.glsl$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "webpack-glsl-loader",
                }
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env"
                        ]
                    }
                }
            }
        ]
    }
};
