Package.describe({
  summary: 'Domain Driven Design patterns for Space applications.',
  name: 'space:domain',
  version: '0.1.0',
  git: 'https://github.com/meteor-space/domain.git',
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'space:base@3.2.1',
    'space:messaging@2.1.0'
  ]);

  // SHARED
  api.addFiles([
    'source/namespace.js',
    'source/value-object.js',
  ]);

  // SERVER ONLY
  api.addFiles([
    'source/entity.js',
  ], 'server');

});

Package.onTest(function(api) {

  api.use([
    'check',
    'space:testing@2.0.0',
    'space:domain',
    'practicalmeteor:munit@2.1.5',
  ]);

  api.addFiles([
    'tests/value-object.tests.js',
  ]);

  api.addFiles([
    'tests/entity.tests.js',
  ], 'server');

});
