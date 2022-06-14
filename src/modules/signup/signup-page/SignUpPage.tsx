import React, { useCallback, useEffect, useState } from 'react';
import { ISignUpParams } from '../../../models/auth';
import SignUpForm from '../../signup/signup-form/SignUpForm';
import logo from '../../../logo-420-x-108.png';
import { fetchThunk } from '../../common/redux/thunk';
import { API_PATHS } from '../../../configs/api';
import { replace } from 'connected-react-router';
import { ROUTES } from '../../../configs/routes';
import { RESPONSE_STATUS_SUCCESS } from '../../../utils/httpResponseCode';
import { getErrorMessageResponse } from '../../../utils';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'typesafe-actions/dist/type-helpers';


const SignUpPage = () => {

    const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [locations, setLocations] = useState('');

    const getLocation =useCallback(async () => {
        setLoading(true);

        const json = await dispatch(fetchThunk(API_PATHS.getLocation, 'get'));

        setLoading(false);

        if (json?.code === RESPONSE_STATUS_SUCCESS) {
            setLocations(json?.data);
            return;
        }

    }, []);

    useEffect(() => {
        getLocation();
    }, [getLocation]);
    
    const onSignUp = useCallback(
        async (values: ISignUpParams) => {
            setErrorMessage('');
            setLoading(true);

            const json = await dispatch(fetchThunk(API_PATHS.signUp, 'post', values));

            setLoading(false);
            
            if (json?.code === RESPONSE_STATUS_SUCCESS) {
                console.log(json.data);
                alert("Bạn đã đăng kí thành công !");
                dispatch(replace(ROUTES.login));
                return;
            }
            else {
                console.log("loi roi!");
            }
            setErrorMessage(getErrorMessageResponse(json));
        },
    [dispatch],
    );

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                maxWidth: '560px',
                margin: '0 auto',
            }}
        >
        <img src={logo} alt="" style={{ maxWidth: '250px', margin: '32px' }} />

            <SignUpForm onSignUp={onSignUp} loading={loading} errorMessage={errorMessage} location={[]} />
        </div>
    );
};

export default SignUpPage;


