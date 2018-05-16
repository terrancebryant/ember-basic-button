[![Build Status](https://travis-ci.org/terrancebryant/ember-basic-button.svg?branch=master)](https://travis-ci.org/terrancebryant/ember-basic-button)

ember-basic-button
==============================================================================

[Short description of the addon.]

Installation
------------------------------------------------------------------------------

```
ember install ember-basic-button
```


Usage
------------------------------------------------------------------------------

### Standard Usage
```
{{basic-button 
  name="play button" 
  value="Play" 
  type="button" 
  autocomplete="off"
  action=(action 'play')
}}
```
### Block Usage
```
{{#basic-button 
  name="Play Button" 
  value="play" 
  type="button" 
  autocomplete="off"
  action=(action 'play')
}}
  Play
{{/basic-button}}
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-basic-button`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
