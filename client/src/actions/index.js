import axios from 'axios';
import { FETCH_USER } from './types';
export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res});
};


/* function mapDispatchToProps(dispatch, state) {
    return { 
        xxxxxActions: fetchUser,
        fetchUser: function () {
            dispatch( axios.get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res})));
        },

    };
} */