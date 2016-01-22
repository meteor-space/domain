describe("Space.domain.Event", function() {

  beforeEach(function() {
    this.params = { sourceId: 'test', version: 0 };
    this.event = new Space.domain.Event(this.params);
  });

  it('defines its EJSON type correctly', function() {
    expect(this.event.typeName()).to.equal('Space.domain.Event');
  });

  describe('default fields', function() {

    it('can be created using string source id', function() {
      expect(function() {
        return new Space.domain.Event({sourceId: '123'})
      }).not.to.throw
    });

    it('can be created using Guid source id', function() {
      expect(function() {
        return new Event({sourceId: new Guid()})
      }).not.to.throw
    });

  });

});
