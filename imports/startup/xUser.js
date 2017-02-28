import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

export class XUser {
  constructor() {
    this.state = {
      userID: Random.id(),
      value: 50,
    };
  }
  registerUser(lectureName) {
    Meteor.call('sliderValues.insert', this.state.userID, this.state.value, lectureName);
  }
}
export const CurrentUser = new XUser();
