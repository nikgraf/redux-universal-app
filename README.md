This is a case-study application to investigate a possible future boilerplate for new projects.

# Setup & Run

```
npm install
npm run update-schema
npm start
```

To lint & test the project you also will need `flow` and `phantomjs`.

# Linting

To run all linters (flow & eslint & jscs) you can run `npm run lint`

# Test

Run the tests via `npm test`. To run them continuously.

Run `npm run test:coverage:open` to run the tests and open a code coverage document in your browser.

# Technologies

## Core

- React
- React Router
- Immutable
- Redux
- GraphQL

## Testing

- Chai
- Mocha
- Istanbul

## Linting

- Eslint
- Flow
- Jscs

# What is react-pure-ui

Idea: Create a tool to allow creating a simple component guide.

https://twitter.com/srikrishnaholla/status/645208563485274113

"Represent UI as state, just like designers do" - Guillermo Rauch

## How can I run code only on the client?

The component lifecycle method [componentDidMount](https://facebook.github.io/react/docs/component-specs.html#mounting-componentdidmount) only runs on the client and therefor can be leveraged to execute code that should not be executed on the server.

```
class SomeComponent extends Component {

  componentWillMount(props) {
    console.log('This will only be executed on the server & client');
  }

  componentDidMount() {
    console.log('This will only be executed on the client');
  }
}
```

# Thanks to

https://github.com/eiriklv/react-redux-router-universal
https://github.com/bananaoomarang/isomorphic-redux
https://github.com/erikras/react-redux-universal-hot-example/
https://github.com/tomchentw/redux-universal

# Ideas

- move it to async await?
- detailed documentation
- fix localhost port issue
- use keymirror
- add reselect
- add normalize
- fix build
- make flow descriptions for all objects (Immutable Records vs Flow?)
- use @connect decorator
- use async/await
- add pure ui gui
- extract react-universal
- extract update schema script
- add goals/why?
- add examples for various data fetching situations
- jsxstyle/cssmodules
- add belle
- add comments (jsdoc)
- add concepts & limitations
- add docs about (react-pure-ui)
- add demo video
- add error logging middleware (universal) to sentry
- use hashing for building js files
- add e2e setup
- split graphql & front-end serving app and add docker containers?
- unit tests for action creators
- for production config
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
- add graphql relay to benefit from connections/pagination ect
- only use arrow functiosn (james long) jlongster
- valid usecase for this https://github.com/matystl/redux-effect-reducers/blob/master/src/sideEffects.js
- make it a chat & add websockets
- split server to server & api server
- component abstraction to implement shouldComponentUpdate with immutable (also with connect)
