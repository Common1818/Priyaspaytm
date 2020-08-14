import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
   console.log('working');
   const id = uuidv4();
   console.log(dispatch);
   dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
   });

   setTimeout(
      () =>
         dispatch({
            type: REMOVE_ALERT,
            payload: id,
         }),
      timeout
   );
};
