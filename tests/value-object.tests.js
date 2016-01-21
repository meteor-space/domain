describe("Space.domain.ValueObject", function() {

  it("extends Space.Struct", function() {
    expect(Space.domain.ValueObject).to.extend(Space.Struct);
  });

  it('is serializable', function() {
    let vo = new Space.domain.ValueObject();
    let copy = EJSON.parse(EJSON.stringify(vo));
    expect(copy.equals(vo)).to.be.true;
  });

  describe("comparing value objects", function() {

    let MyPerson = Space.domain.ValueObject.extend('MyPerson', {
      fields: function() {
        return {
          name: String,
          age: Match.Integer,
          emails: [String],
          address: {
            street: String,
            country: String
          }
        };
      }
    });

    let MyValue = Space.domain.ValueObject.extend('MyValue', {
      fields: function() {
        return { value: MyPerson };
      }
    });

    it("is equal when all fields are equal", function() {
      let first = new MyPerson({
        name: 'Test',
        age: 1,
        emails: ['a@foo.bar', 'b@foo.bar'],
        address: {
          street: 'Wallstreet',
          country: 'USA'
        }
      });
      let second = new MyPerson({
        name: 'Test',
        age: 1,
        emails: ['a@foo.bar', 'b@foo.bar'],
        address: {
          street: 'Wallstreet',
          country: 'USA'
        }
      });
      expect(first.equals(second)).to.be.true;
    });

    it("is not equal if at least one field is different", function() {
      let first = new MyPerson({
        name: 'Test',
        age: 1,
        emails: ['a@foo.bar', 'b@foo.bar'],
        address: {
          street: 'Wallstreet',
          country: 'USA'
        }
      });
      let second = new MyPerson({
        name: 'Change',
        age: 1,
        emails: ['a@foo.bar', 'b@foo.bar'],
        address: {
          street: 'Wallstreet',
          country: 'USA'
        }
      });
      expect(first.equals(second)).to.be.false;
    });

    it("supports comparison of nested value objects", function() {
      let firstPerson = new MyPerson({
        name: 'Test',
        age: 1,
        emails: ['a@foo.bar', 'b@foo.bar'],
        address: {
          street: 'Wallstreet',
          country: 'USA'
        }
      });
      let secondPerson = new MyPerson({
        name: 'Test',
        age: 1,
        emails: ['a@foo.bar', 'b@foo.bar'],
        address: {
          street: 'Wallstreet',
          country: 'USA'
        }
      });
      let firstValue = new MyValue({ value: firstPerson });
      let secondValue = new MyValue({ value: secondPerson });
      expect(firstValue.equals(secondValue)).to.be.true;
    });

    it("is not equal if a sub value object comparison fails", function() {
      let firstPerson = new MyPerson({
        name: 'Test',
        age: 1,
        emails: ['a@foo.bar', 'b@foo.bar'],
        address: {
          street: 'Wallstreet',
          country: 'USA'
        }
      });
      let secondPerson = new MyPerson({
        name: 'Changed',
        age: 1,
        emails: ['a@foo.bar', 'b@foo.bar'],
        address: {
          street: 'Wallstreet',
          country: 'USA'
        }
      });
      let firstValue = new MyValue({ value: firstPerson });
      let secondValue = new MyValue({ value: secondPerson });
      expect(firstValue.equals(secondValue)).to.be.false;
    });

    it("is not equal if compared with a null value", function() {
      let firstPerson = new MyPerson({
        name: 'Test',
        age: 1,
        emails: ['a@foo.bar', 'b@foo.bar'],
        address: {
          street: 'Wallstreet',
          country: 'USA'
        }
      });
      let firstValue = new MyValue({ value: firstPerson });
      expect(firstValue.equals(null)).to.be.false;
    });

  });

});
