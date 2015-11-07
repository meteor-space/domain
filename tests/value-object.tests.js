describe("Space.domain.ValueObject", function () {

  it("extends Space.messaging.Serializable", function () {
    expect(Space.domain.ValueObject).to.extend(Space.messaging.Serializable);
  });

  describe("comparing value objects", function () {

    var MyPerson = Space.domain.ValueObject.extend('MyPerson', {
      fields: function() {
        return { name: String, age: Match.Integer };
      }
    });

    var MyValue = Space.domain.ValueObject.extend('MyValue', {
      fields: function() {
        return { value: MyPerson };
      }
    });

    it("is equal when all fields are equal", function () {
      var values = { name: 'Test', age: 1 },
          first = new MyPerson(values), second = new MyPerson(values);
      expect(first.equals(second)).to.be.true;
    });

    it("is not equal if at least one field is different", function () {
      var firstValues = { name: 'Test', age: 1 },
          secondValues = { name: 'Change', age: 1 },
          first = new MyPerson(firstValues), second = new MyPerson(secondValues);
      expect(first.equals(second)).to.be.false;
    });

    it("supports comparison of nested value objects", function () {
      var personValues = { name: 'Test', age: 1 },
          firstPerson = new MyPerson(personValues),
          secondPerson = new MyPerson(personValues),
          firstValue = new MyValue({ value: firstPerson }),
          secondValue = new MyValue({ value: secondPerson });
      expect(firstValue.equals(secondValue)).to.be.true;
    });

    it("is not equal if a sub value object comparison fails", function () {
      var firstValues = { name: 'Test', age: 1 },
          secondValues = { name: 'Changed', age: 1 },
          firstPerson = new MyPerson(firstValues),
          secondPerson = new MyPerson(secondValues),
          firstValue = new MyValue({ value: firstPerson }),
          secondValue = new MyValue({ value: secondPerson });
      expect(firstValue.equals(secondValue)).to.be.false;
    });

  });

});
