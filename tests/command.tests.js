describe("Space.domain.Command", function() {

  beforeEach(function() {
    this.params = { targetId: 'test' };
    this.command = new Space.domain.Command(this.params);
  });

  it('is Ejsonable', function() {
    expect(this.command.hasMixin(Space.messaging.Ejsonable)).to.equal(true);
  });

  it('is not Versionable', function() {
    expect(this.command.hasMixin(Space.messaging.Versionable)).to.equal(false);
  });

  it('defines its EJSON type correctly', function() {
    expect(this.command.typeName()).to.equal('Space.domain.Command');
  });

  describe('default fields', function() {

    it('can be created using string target id', function() {
      const createWithStringTargetId = function() {
        return new Space.domain.Command({targetId: '123'})
      };
      expect(createWithStringTargetId).not.to.throw
    });

    it('can be created using Guid target id', function() {
      const createWithGuidTargetId = function() {
        return new Space.domain.Command({targetId: new Guid()})
      };
      expect(createWithGuidTargetId).not.to.throw
    });

  });

});
