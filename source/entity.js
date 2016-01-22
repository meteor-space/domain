Space.Struct.extend('Space.domain.Entity', {

  mixin: [
    Space.messaging.Ejsonable
  ],

  ERRORS: {
    idRequired() {
      return 'Entities need an ID on creation.';
    }
  },

  id: null,

  Constructor(data) {
    let preparedData = data;
    if (_.isString(data) || data instanceof Guid) {
      preparedData = { id: data };
    }
    if (!preparedData || !preparedData.id) throw new Error(this.ERRORS.idRequired());
    Space.Struct.call(this, preparedData);
  },

  fields() {
    return {
      id: Match.OneOf(String, Guid)
    };
  },

  getId() {
    return this.id;
  },

  equals(other) {
    return (other.constructor === this.constructor) && other.getId() === this.id;
  }

});
