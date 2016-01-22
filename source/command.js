
Space.messaging.Command.extend('Space.domain.Command', {

  Constructor(params) {
    let data = params || {};
    this._applyDefaultValues(data);
    return Space.messaging.Command.call(this, data);
  },

  fields() {
    let fields = Space.Struct.prototype.fields.call(this);
    // Add default fields to all commands
    if (!fields.targetId) fields.targetId = Match.OneOf(String, Guid);
    fields.timestamp = Date;
    fields.meta = Match.Optional(Object);
    return fields;
  },

  _applyDefaultValues(data) {
    if (!data.timestamp) data.timestamp = new Date();
  }

});
