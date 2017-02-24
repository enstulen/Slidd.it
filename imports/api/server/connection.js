import { Meteor } from 'meteor/meteor';
import { CurrentUser } from '../../startup/xUser.js';

// Meteor.onConnection(function(connection) {
//   CurrentUser.registerUser(connection.id);
//   console.log('connection');
//   connection.onClose(function() {
//     Meteor.call('sliderValues.remove', connection.id);
//   });
// });
