import { Random } from 'meteor/random'
import { SliderValues } from '../api/sliderValues/slidervalues.js';
import { Meteor } from 'meteor/meteor';


export class xUser {
  constructor(props){
    this.state = {
      userID: Random.id(),
      value: 50,
    };
  }
   registerUser(lectureName){
     Meteor.call('sliderValues.insert', this.state.userID, this.state.value, lectureName);
  }
}
export const CurrentUser = new xUser();
