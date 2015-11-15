describe("Space.domain.Entity", function () {

  var Entity = Space.domain.Entity;

  it("requires an ID on construction", function () {
    function createEntityWithoutId() { new Entity(); }
    expectedError = Space.domain.Entity.prototype.ERRORS.idRequired();
    expect(createEntityWithoutId).to.throw(expectedError);
  });

  it("provides an accessor for its ID", function () {
    var id = '123', entity = new Entity(id);
    expect(entity.getId()).to.equal(id);
  });

  describe("comparing entities", function () {

    it("is equal when same class and ID", function () {
      var first = new Entity('123'), second = new Entity('123');
      expect(first.equals(second)).to.be.true;
    });

    it("is not equal when same class but different ID", function () {
      var first = new Entity('123'), second = new Entity('543');
      expect(first.equals(second)).to.be.false;
    });

    it("is not equal when different class but same ID", function () {
      var OtherEntity = Space.domain.Entity.extend('OtherEntity'),
          first = new Entity('123'),
          second = new OtherEntity('123');

      expect(first.equals(second)).to.be.false;
    });

  });

});
