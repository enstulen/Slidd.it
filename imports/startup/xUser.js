import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

export class XUser {
  // Initial state:
  // userID = A randomly generated unique ID.
  // value = Starting with a neutral middle value.
  constructor() {
    this.state = {
      userID: Random.id(),
      value: 50,
    };
    // Update date of user every 30 seconds. This is to clear out older users that are not on the page anymore.
    Meteor.setInterval(() => {
      Meteor.call('sliderValues.updateDate', CurrentUser.state.userID, new Date());
    }, 30000);
  }
  // Register user with userID and value from the initial state, the selected lecture and current date.
  registerUser(lectureName) {
    Meteor.call('sliderValues.insert', this.state.userID, this.state.value, lectureName, new Date());
  }
}
// Singleton user
export const CurrentUser = new XUser();
