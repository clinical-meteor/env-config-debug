Package.describe({
  name: 'clinical:env-config-debug',
  version: '0.0.1',
  summary: 'Drop in config that will enable DEBUG, TRACE, and TEST environment variables.',
  git: 'http://github.com/clinical-meteor/env-config-debug',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.use('clinical:env@3.2.0');
  api.addFiles('server/Env.js', 'server');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:env-config-default');
});
