describe('Space.domain.Event', function() {

  describe('mixed in traits', function() {

    beforeEach(function() {
      this.params = { sourceId: '123'};
      this.event = new Space.domain.Event(this.params);
    });

    it('is Ejsonable', function() {
      expect(this.event.hasMixin(Space.messaging.Ejsonable)).to.equal(true);
    });

    it('is Versionable', function() {
      expect(this.event.hasMixin(Space.messaging.Versionable)).to.equal(true);
    });

  });

  describe('construction', function() {

    it('using string source id', function() {
      const createWithStringSourceId = function() {
        return new Space.domain.Event({sourceId: '123'})
      };
      expect(createWithStringSourceId).not.to.throw
    });

    it('using Guid source id', function() {
      const createWithGuidSourceId = function() {
        return new Space.domain.Event({sourceId: new Guid()})
      };
      expect(createWithGuidSourceId).not.to.throw
    });

    it('defines its EJSON type correctly', function() {
      expect(this.event.typeName()).to.equal('Space.domain.Event');
    });

  });

  describe('default field assignment', function() {

    beforeEach(function() {
      this.params = { sourceId: 'test' };
      this.event = new Space.domain.Event(this.params);
    });

    it('applies default fields', function() {
      expect(this.event.sourceId).to.equal(this.params.sourceId);
      expect(this.event.timestamp).to.be.a('date');
    });

  });

});
