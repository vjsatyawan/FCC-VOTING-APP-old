var config = {
   entry: './public/js/main.js',
	
   output: {
      path:'./public/js/',
      filename: 'bundle.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
{ 
    test: /\.jsx?$/,         // Match both .js and .jsx files
    exclude: /node_modules/, 
    loader: "babel", 
    query:
      {
        presets:['react']
      }

         }
      ]
   }
}

module.exports = config;