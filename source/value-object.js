Space.messaging.Serializable.extend(Space.domain, 'ValueObject', {

  equals: function(other) {
    return (other.constructor === this.constructor) && this._hasSameValues(other);
  },

  _hasSameValues: function(other) {
    var hasSameValues = true;
    for(var key in this.fields()) {
      if(this[key] instanceof Space.domain.ValueObject) {
        if(!this[key].isEqual(other[key])) hasSameValues = false;
      }
      else {
        if(this[key] !== other[key]) hasSameValues = false;
      }
    }
    return hasSameValues;
  }

});
