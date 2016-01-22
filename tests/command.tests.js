describe("Space.domain.Command", function() {

  beforeEach(function() {
    this.params = { targetId: 'test' };
    this.command = new Space.domain.Command(this.params);
  });

  it('defines its EJSON type correctly', function() {
    expect(this.command.typeName()).to.equal('Space.domain.Command');
  });

  describe('default fields', function() {

    it('can be created using string target id', function() {
      expect(function() {
        return new Space.domain.Command({targetId: '123'})
      }).not.to.throw
    });

    it('can be created using Guid target id', function() {
      expect(function() {
        return new Space.domain.Command({targetId: new Guid()})
      }).not.to.throw
    });

  });

});
