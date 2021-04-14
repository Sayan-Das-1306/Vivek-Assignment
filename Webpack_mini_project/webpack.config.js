const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports ={

    entry: "./src_file/app.ts" ,
    output: {
        filename : "bundle.js" ,
        path: path.resolve(__dirname,"public")
    },
    resolve : {
        extensions: [".ts",".js"]
    },
    devServer: {
        contentBase: "./public"
    },
    mode : "development",
    module : {
        rules:[{
            test : /\.css$/ , 
            use : ["style-loader" , "css-loader" ] ,
            //include: [path.resolve(__dirname,"Css")]
        },
        {
            test : /\.ts$/ , 
            use : ["ts-loader"] ,
            //include: [path.resolve(__dirname,"src_file")]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: "url-loader"
        }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./public/default.html" ,
        })
    ]
}