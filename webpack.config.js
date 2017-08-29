var config = {
   entry: './main.js',

   output: {
      path:'/',
      filename: './index.js',
   },

   devServer: {
      inline: true,
      port: 7777
   },

   module: {
      loaders: [
         {
            test: /\.(jsx?|css?)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
           test: /\.css$/,
           loaders: ['style-loader', 'css-loader']
         }
      ]
   }
}

module.exports = config;
