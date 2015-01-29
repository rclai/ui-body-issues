if (Meteor.isClient) {
  UI.body.helpers({
    hello: function () {
      return 'whats going on';
    }
  });
}