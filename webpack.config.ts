import * as path from 'path';
import * as webpack from 'webpack';

type TMode = 'development' | 'production';

interface IEnvVariables {
  mode: TMode
}

export default function(ENV: IEnvVariables):webpack.Configuration {
  const isDev:boolean = ENV.mode === 'development';
  
  const config: webpack.Configuration = {
    mode: ENV.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isDev ? 'index.js' : '[name].[contenthash].js',
      clean: true
    },
    resolve: {
      extensions: ['.js', '.ts']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    }
  }

  return config;
}