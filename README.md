# Node Test Server TypeScript

Server running on [Heroku](https://sonny-test-server.herokuapp.com/)

## 1-Click Deployment

<a href="https://heroku.com/deploy?template=https://github.com/andreasonny83/node-test-server-ts">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>

## Requirements

1.  NodeJS >=10
2.  NPM >=6
3.  Yarn 1.x

## Setup

clone this repository on your local machine.
Then install all the npm dependencies with:

```bash
$ yarn
```

## Development

1.  Open your terminal and `cd` to the root folder for this repository
2.  Rename the `.env.sample` file to `.env` and configure it with your custom settings
3.  Run your local server
   ```sh
   $ yarn start
   ```
3.  You should see a message telling you on which port is the server listening (3001 by default)
4.  Open your browser to [http://localhost:3001](http://localhost:3001)

## Production

Build your distribution version of the server

```sh
$ yarn start
```

Then upload the `dist` folder to your server and run the application using [pm2](https://pm2.keymetrics.io/)

## License

MIT © [Andrea Sonny](https://andreasonny.mit-license.org/)