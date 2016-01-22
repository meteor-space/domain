Package.describe({
  summary: 'Domain Driven Design patterns for Space applications.',
  name: 'space:domain',
  version: '0.2.0',
  git: 'https://github.com/meteor-space/domain.git'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.0.1');

  api.use([
    'check',
    'underscore',
    'ecmascript',
    'space:base@4.0.0',
    'space:messaging@3.0.1'
  ]);

  // SHARED
  api.addFiles([
    'source/namespace.js',
    'source/value-object.js',
    'source/command.js'
  ]);

  // SERVER ONLY
  api.addFiles([
    'source/server/entity.js',
    'source/server/event.js',
    'source/server/exception.js'
  ], 'server');

});

Package.onTest(function(api) {

  api.use([
    'check',
    'ecmascript',
    'ejson',
    'space:testing@3.0.1',
    'space:domain',
    'practicalmeteor:munit@2.1.5'
  ]);

  api.addFiles([
    'tests/value-object.tests.js',
    'tests/command.tests.js'
  ]);

  api.addFiles([
    'tests/server/entity.tests.js',
    'tests/server/event.tests.js',
    'tests/server/exception.tests.js'
  ], 'server');

});
