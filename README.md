# Node Test Server TypeScript

Server running on [Heroku](https://node-test-server-ts.herokuapp.com/)

## Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

<a href="https://heroku.com/deploy?template=https://github.com/andreasonny83/node-test-server-ts/tree/main">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>

## Requirements

1.  NodeJS >=10
2.  NPM >=6

## Setup

clone this repository on your local machine.
Then install all the npm dependencies with:

```bash
$ npm install
```

## Development

1.  Open your terminal and `cd` to the root folder for this repository
2.  Rename the `.env.sample` file to `.env` and configure it with your custom settings
3.  Run your local server
   ```sh
   $ npm start
   ```
3.  You should see a message telling you on which port is the server listening (3002 by default)
4.  Open your browser to [http://localhost:3002](http://localhost:3002)

## Production

Build your distribution version of the server

Make sure you correctly export a `NODE_ENV` environment variable set to `production`.
You can also make use of the `.env` file if you prefer, depending on your server configuration.

```sh
$ npm run build
```

Then upload the `dist` folder to your server and run the application using [pm2](https://pm2.keymetrics.io/)

## Docker

If you want to run the Node server app using Docker,
you can build your image by running the following command:

```sh
docker build -t express-app .
```

Then, to run the application, just run:

```sh
docker run -p 3002:3002 express-app
```

Now you can open a browser, go to [http://localhost:3002](http://localhost:3002)
and you should be able see the app running.

You can also pass the following environment variables to your Docker container,
to override the Port and and the Environment:

```sh
docker run -p 3002:3002 -e PORT=5000 -e NODE_ENV=production express-app
```

Now your app should run in `Production` mode against the port `5000`.

## License

MIT © [Andrea Sonny](https://andreasonny.mit-license.org/)