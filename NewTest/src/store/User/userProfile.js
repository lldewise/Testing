import { initStore } from '../store';
import pic2 from '../../assets/images/persona/mona.png'
import {CURRENT_USER}  from './userProfileAction';
const initialState={
    userprofile: 
      {
        imageUrl: pic2,
        imageInitials: 'MK',
        text: "Mona Kanes",
        secondaryText: 'Student',
        tertiaryText: 'Gymnasium/HF',
        optionalText: 'Test',
        lang:'en'
      }        
  };

const configureStore = () => {
  
  const actions = {
    CURRENT_USER: (curState, data) => {      
      const updateUser = curState.userprofile;
      updateUser.text=data.name;
      return { userprofile: updateUser };
    }, 
  };

  initStore(actions, initialState)


};
export default configureStore;
