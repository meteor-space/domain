Space.Object.extend(Space.domain, 'Entity', {

  ERRORS: {
    idRequired: function() {
      return 'Entities need an ID on creation.';
    }
  },

  _id: null,

  Constructor: function(id) {
    if(!id) throw new Error(this.ERRORS.idRequired());
    this._id = id;
  },

  getId: function() {
    return this._id;
  },

  isEqual: function(other) {
    return (other.constructor === this.constructor) && other.getId() === this._id;
  }

});
