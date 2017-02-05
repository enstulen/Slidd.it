import { Random } from 'meteor/random'
import { SliderValues } from '../api/slidervalues.js';


export class xUser {
  constructor(props){
    this.state = {
      userID: Random.id(),
      value: 50,
    };
  }
   registerUser(){
     SliderValues.insert({
         userID: this.state.userID,
         value: this.state.value,
     });
  }
}
export const CurrentUser = new xUser();
