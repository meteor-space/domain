Changelog
=========

### Next
#### New Features
- `Space.domain.ValueObject` and `Space.domain.Entity` are now also Versionable, 
just like `Space.domain.Event` or `Space.domain.Exception`. 
Now all domain.Objects intended to be serialized and persisted can be versioned
 to allow on the fly transformations as defined in the object.

####Breaking change
- `eventVersion` -> `schemaVersion` in `Space.domain.Event` and 
`Space.domain.Exception`. Inherited from `Space.messaging.Event`, via mixin 
`Space.messaging.Versionable`.

#### Updated dependencies
- `space:base@4.0.0` -> `space:base@4.1.1`
- `space:messaging@3.0.1` -> `space:messaging@3.1.1`

### 0.2.1
Adds specialised message classes that are drop-in replacements
for the < 3.0.0 Space.messaging.Event/Command:
- `Space.domain.Event` - Default fields: `sourceId`, `version`, and `timestamp`
- `Space.domain.Command` - Default fields: `targetId`, and `timestamp`

### 0.1.0

- `Space.domain.ValueObject`
- `Space.domain.Entity`
- `Space.domain.Exception`
