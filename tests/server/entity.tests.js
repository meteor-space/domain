describe("Space.domain.Entity", function() {

  let Entity = Space.domain.Entity;
  let OtherEntity = Space.domain.Entity.extend('OtherEntity');

  it("extends Space.Struct", function() {
    expect(Entity).to.extend(Space.Struct);
  });

  describe("mixed in traits", function() {

    beforeEach(function() {
      this.entity = new Entity('123')
    });

    it('is Ejsonable', function() {
      expect(this.entity.hasMixin(Space.messaging.Ejsonable)).to.equal(true);
    });

    it('is not Versionable', function() {
      expect(this.entity.hasMixin(Space.messaging.Versionable)).to.equal(false);
    });

  });

  it("requires an ID on construction", function() {
    let createEntityWithoutId = function() { return new Entity(); };
    expectedError = Space.domain.Entity.prototype.ERRORS.idRequired();
    expect(createEntityWithoutId).to.throw(expectedError);
  });

  it("provides an accessor for its ID", function() {
    let id = '123';
    let entity = new Entity(id);
    expect(entity.getId()).to.equal(id);
  });

  describe("comparing entities", function() {

    it("is equal when same class and ID", function() {
      let first = new Entity('123');
      let second = new Entity('123');
      expect(first.equals(second)).to.be.true;
    });

    it("is not equal when same class but different ID", function() {
      let first = new Entity('123');
      let second = new Entity('543');
      expect(first.equals(second)).to.be.false;
    });

    it("is not equal when different class but same ID", function() {
      let first = new Entity('123');
      let second = new OtherEntity('123');
      expect(first.equals(second)).to.be.false;
    });

  });

});
