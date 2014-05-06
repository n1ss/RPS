rpsStream = new Meteor.Stream('rps');

rpsStream.permissions.write(function() {
  return true;
});

rpsStream.permissions.read(function() {
  return true;
});