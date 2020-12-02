import { initStore } from '../store';
const initialState={
    teacherProfile: 
      {
        imageUrl: null,
        imageInitials: 'CW',
        text: "Clarrise Washington",  
        secondaryText: 'posted this',
        tertiaryText: '2 days ago',
        lang:'en'
      }        
  };

const configureStore = () => {
  initStore(null,initialState); 
};
export default configureStore;