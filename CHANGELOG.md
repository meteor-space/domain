Changelog
=========

### 0.2.1
Adds specialised message classes that are drop-in replacements
for the < 3.0.0 Space.messaging.Event/Command:
- `Space.domain.Event` - Default fields: `sourceId`, `version`, and `timestamp`
- `Space.domain.Command` - Default fields: `targetId`, and `timestamp`

### 0.1.0

- `Space.domain.ValueObject`
- `Space.domain.Entity`
- `Space.domain.Exception`
