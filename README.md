# Ctu Collaboration Client

This application is available at [ctu-collaboration.cz](https://ctu-collaboration.cz/)

## Development

To run this project, you need:

- Install all dependencies with `yarn` or `npm i`
- Run `yarn serve` or `npm run serve` to start dev server

## Production

This fronted is served by [Node.js server](https://github.com/doomkit/ctu-server), that should be located in the same directory with this project. Output directory for fronted build is configured in `vue.config.js`.

To build this project use `yarn build` or `npm run build`. Pay attention to enviroment variables (more about that in the following section).

## Environment Variables

[Vue.js documentation - Environment Variables](https://cli.vuejs.org/guide/mode-and-env.html#environment-variables)

- File `.env` is used for `--mode development`. Development mode is used for `yarn serve` or `npm run serve` by default.
- File `.env.production` is used for `--mode production`. Production mode is used for `yarn build` or `npm run build` by default.
