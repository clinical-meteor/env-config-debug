## clinical:env-config-debug

Drop in config that will enable DEBUG, TRACE, and TEST environment variables.

========================================
#### Installation

``meteor add clinical:env-config-debug``

========================================
#### Usage

Adding this package enables the following API in your applicaiton.  

````js
  if (Env.isDebug) {
    // display or log debug info
  }
  if (Env.isTrace) {
    // display or log trace info
  }
  if (Env.isDevelopment) {
    // display development feature
  }
  if (Env.isTesting) {
    // display testing feature
  }
````

========================================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
