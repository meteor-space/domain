
Space.messaging.Event.extend('Space.domain.Event', {

  Constructor(params) {
    let data = params || {};
    this._applyDefaultValues(data);
    return Space.messaging.Event.call(this, data);
  },

  fields() {
    let fields = Space.messaging.Event.prototype.fields.call(this);
    // Add default fields to all domain events
    if (!fields.sourceId) fields.sourceId = Match.Optional(Match.OneOf(String, Guid));
    fields.version = Match.Optional(Match.Integer);
    fields.timestamp = Date;
    fields.meta = Match.Optional(Object);
    return fields;
  },

  _applyDefaultValues(data) {
    if (!data.timestamp) data.timestamp = new Date();
  }

});
