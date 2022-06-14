import React, {useCallback, useState} from 'react';
import { FormattedMessage } from 'react-intl';
import { ILocationParams, ISignUpParams, ISignUpValidation, IGenderParams } from '../../../models/auth';
import { validateSignUp, validSignUp } from '../../auth/utils';
import { GENDER, REGION, STATE } from '../select/selection'

interface Props {
    onSignUp(values: ISignUpParams): void;
    loading: boolean;
    errorMessage: string;
    location: Array<ILocationParams>;
}

const SignUpForm = (props: Props) => {
    const { onSignUp, loading, errorMessage, location} = props;
    
    const [formValues, setFormValues] = useState<ISignUpParams>({
        email: '',
        password: '',
        repeatPassword: '',
        name: '',
        gender: '',
        region: '',
        state: ''
    });
    const [validate, setValidate] = useState<ISignUpValidation>();

    const onSubmit = useCallback(() => {
        const validate = validateSignUp(formValues);

        setValidate(validate);

        if (!validSignUp(validate)) {
            return;
        }


        onSignUp(formValues);
    }, [formValues, onSignUp]);    

    const renderGender = () => {
        const arrGender : JSX.Element[] = [
            <option disabled  value='DEFAULT' key=''>
                -- Giới tính --
            </option>
        ];
        
        GENDER.map((items : IGenderParams, index : number) => {
            return arrGender.push(
                <option value={items.value} key={index}>
                    {items.label}
                </option>
            );
        });
        return arrGender;
    }

    const renderRegion = () => {
        const arrRegion : JSX.Element[] = [
            <option disabled value='DEFAULT' key=''>
                {''}
                -- Quốc gia --{''}
            </option>
        ];
        REGION.map((location : ILocationParams, index : number) => {
            return arrRegion.push(
                <option value={location.id} key={index}>
                    {location.name}
                </option>
            );
        });
        return arrRegion;
    }

    const renderState = () => {
        const arrState : JSX.Element[] = [
            <option disabled value='DEFAULT' key=''>
                {''}
                -- Tiểu bang --{''}
            </option>
        ];
        STATE.map((s : ILocationParams, index : number) => {
            return arrState.push(
                <option value={s.id} key={index}>
                    {s.name}
                </option>
            );
        });
        return arrState;
    }


    return (
        <form
            style={{ width: '100%', height: '100%', maxWidth: '560px', margin: '0 auto' }}
            onSubmit={(e) => { 
                e.preventDefault();
                onSubmit();
            }}
        >
            {!!errorMessage && (
            <div className="alert alert-danger" role="alert" style={{ width: '100%' }}>
              {errorMessage}
            </div>
          )}
            <div className="col-md-12">
                <label htmlFor="inputEmail">
                    <FormattedMessage id='email' />
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    value={formValues.email}
                    onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                />
                {!!validate?.email && (
                    <small className="text-danger">
                        <FormattedMessage id={validate?.email} />
                    </small>
                )}
            </div>
            <div className="col-md-12">
                <label htmlFor="inputPassword">
                    <FormattedMessage id='password' />
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    value={formValues.password}
                    onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                />
                {!!validate?.password && (
                    <small className="text-danger">
                        <FormattedMessage id={validate?.password} />
                    </small>
                )}
            </div>
            <div className="col-md-12">
                <label htmlFor="repeatPassword">
                    <FormattedMessage id='repeatPassword' />
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="repeatPassword"
                    value={formValues.repeatPassword}
                    onChange={(e) => setFormValues({ ...formValues, repeatPassword: e.target.value })}
                />
                {!!validate?.repeatPassword && (
                    <small className="text-danger">
                        <FormattedMessage id={validate?.repeatPassword} />
                    </small>
                )}
            </div>
            <div className="col-md-12">
                <label htmlFor="inputName">
                    <FormattedMessage id='name' />
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    value={formValues.name}
                    onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                />
                {!!validate?.name && (
                    <small className="text-danger">
                        <FormattedMessage id={validate?.name} />
                    </small>
                )}
            </div>
            <div className="col-md-12">
                <label htmlFor="selectGender">
                    <FormattedMessage id='gender' />
                </label>
                <select
                    id="selectGender"
                    className="form-control"
                    defaultValue={'DEFAULT'}
                >
                    {renderGender()}
                </select>
                {!!validate?.gender && (
                    <small className="text-danger">
                        <FormattedMessage id={validate?.gender} />
                    </small>
                )}
            </div>
            <div className="col-md-12">
                <label htmlFor="selectRegion">
                    <FormattedMessage id='region' />
                </label>
                <select
                    id="selectRegion"
                    className="form-control"
                    defaultValue={'DEFAULT'}
                >
                    {renderRegion()}
                    </select>
                {!!validate?.region && (
                    <small className="text-danger">
                        <FormattedMessage id={validate?.region} />
                    </small>
                )}
            </div>
            <div className="col-md-12">
                <label htmlFor="selectState">
                    <FormattedMessage id='state' />
                </label>
                <select
                    id="selectState"
                    className="form-control"
                    defaultValue={'DEFAULT'}
                >
                    {renderState()}
                    </select>
                {!!validate?.state && (
                    <small className="text-danger">
                        <FormattedMessage id={validate?.state} />
                    </small>
                )}
            </div>
            <div className="col-md-12"
                style={{padding: '10px'}}
            >
                <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading}
                    style={{
                        minWidth: '160px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                {loading && <div className="spinner-border spinner-border-sm text-align mr-2" role="status" />}
                    <FormattedMessage id='register' />
                    </button>
            </div>
            
        </form>
    );
};

export default SignUpForm;

