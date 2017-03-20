import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

export class XUser {
  constructor() {
    this.state = {
      userID: Random.id(),
      value: 50,
    };
    Meteor.setInterval(() => {
      Meteor.call('sliderValues.updateDate', CurrentUser.state.userID, new Date());
    }, 30000);
  }
  registerUser(lectureName) {
    Meteor.call('sliderValues.insert', this.state.userID, this.state.value, lectureName, new Date());
  }
}
export const CurrentUser = new XUser();
