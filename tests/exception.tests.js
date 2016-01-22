describe("Space.domain.Exception", function() {

  beforeEach(function() {
    this.error = new Space.Error('test');
    this.myExceptionEvent = new Space.domain.Exception({
      thrower: 'My.awesome.Class',
      error: this.error
    });
  });

  it("is an event", function() {
    expect(Space.domain.Exception).to.extend(Space.domain.Event);
  });

  it("adds required fields to the standard event fields", function() {
    expect(this.myExceptionEvent.fields()).to.eql({
      sourceId: Match.Optional(Match.OneOf(String, Guid)),
      eventVersion: Match.Optional(Match.Integer),
      version: Match.Optional(Match.Integer),
      timestamp: Date,
      meta: Match.Optional(Object),
      thrower: String,
      error: Space.Error
    });
  });

  it("can be serialized correctly", function() {
    let copy = EJSON.parse(EJSON.stringify(this.myExceptionEvent));
    expect(copy).to.be.instanceof(Space.domain.Exception);
    expect(copy.thrower).to.equal(this.myExceptionEvent.thrower);
    expect(copy.error).to.be.instanceof(Space.Error);
    expect(copy.error.message).to.equal(this.error.message);
  });

});
