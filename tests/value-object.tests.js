describe("Space.domain.ValueObject", function() {

  it("extends Space.messaging.Serializable", function() {
    expect(Space.domain.ValueObject).to.extend(Space.messaging.Serializable);
  });

  describe("comparing value objects", function() {

    let MyPerson = Space.domain.ValueObject.extend('MyPerson', {
      fields: function() {
        return { name: String, age: Match.Integer };
      }
    });

    let MyValue = Space.domain.ValueObject.extend('MyValue', {
      fields: function() {
        return { value: MyPerson };
      }
    });

    it("is equal when all fields are equal", function() {
      let values = { name: 'Test', age: 1 };
      let first = new MyPerson(values);
      let second = new MyPerson(values);
      expect(first.equals(second)).to.be.true;
    });

    it("is not equal if at least one field is different", function() {
      let firstValues = { name: 'Test', age: 1 };
      let secondValues = { name: 'Change', age: 1 };
      let first = new MyPerson(firstValues);
      let second = new MyPerson(secondValues);
      expect(first.equals(second)).to.be.false;
    });

    it("supports comparison of nested value objects", function() {
      let personValues = { name: 'Test', age: 1 };
      let firstPerson = new MyPerson(personValues);
      let secondPerson = new MyPerson(personValues);
      let firstValue = new MyValue({ value: firstPerson });
      let secondValue = new MyValue({ value: secondPerson });
      expect(firstValue.equals(secondValue)).to.be.true;
    });

    it("is not equal if a sub value object comparison fails", function() {
      let firstValues = { name: 'Test', age: 1 };
      let secondValues = { name: 'Changed', age: 1 };
      let firstPerson = new MyPerson(firstValues);
      let secondPerson = new MyPerson(secondValues);
      let firstValue = new MyValue({ value: firstPerson });
      let secondValue = new MyValue({ value: secondPerson });
      expect(firstValue.equals(secondValue)).to.be.false;
    });

  });

});
