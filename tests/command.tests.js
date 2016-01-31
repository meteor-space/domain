describe('Space.domain.Command', function() {

  describe('mixed in traits', function() {

    beforeEach(function() {
      this.params = { targetId: '123'};
      this.command = new Space.domain.Command(this.params);
    });

    it('is Ejsonable', function() {
      expect(this.command.hasMixin(Space.messaging.Ejsonable)).to.equal(true);
    });

    it('is not Versionable', function() {
      expect(this.command.hasMixin(Space.messaging.Versionable)).to.equal(false);
    });

  });

  describe('construction', function() {
    
    it('using string target id', function() {
      const createWithStringTargetId = function() {
        return new Space.domain.Command({targetId: '123'})
      };
      expect(createWithStringTargetId).not.to.throw
    });

    it('using Guid target id', function() {
      const createWithGuidTargetId = function() {
        return new Space.domain.Command({targetId: new Guid()})
      };
      expect(createWithGuidTargetId).not.to.throw
    });

    it('defines its EJSON type correctly', function() {
      expect(this.command.typeName()).to.equal('Space.domain.Command');
    });
    
  });
  
  describe('default field assignment', function() {

    beforeEach(function() {
      this.params = { targetId: 'test' };
      this.command = new Space.domain.Command(this.params);
    });
    
    it('applies default fields', function() {
      expect(this.command.targetId).to.equal(this.params.targetId);
      expect(this.command.timestamp).to.be.a('date');
    });

  });

});
