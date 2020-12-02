import React,{useEffect} from 'react';

import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuthentication } from '../../util/context/authentication';
import i18n from '../../i18n/i18n';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Link, PrimaryButton } from 'office-ui-fabric-react';
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { Image } from 'office-ui-fabric-react/lib/Image';
import classes from './Login.module.css';
import logo from '../../assets/atedu.PNG';
import nemid from '../../assets/nemid.PNG';
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest, tokenRequest, silentRequest } from '../../util/msgraph/authConfig';
import { useStore } from '../../store/store';
import {CURRENT_USER}  from '../../store/User/userProfileAction';


const isIE = () => {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf("MSIE ") > -1;
    const msie11 = ua.indexOf("Trident/") > -1;

    // If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
    // const isEdge = ua.indexOf("Edge/") > -1;

    return msie || msie11;
};

const useRedirectFlow = isIE();

const msalApp = new PublicClientApplication(msalConfig);

const demoUsers = [
    {
        username: 'admin',
        password: 'admin',
        roles: ['admin']
    },
    {
        username: 'demo',
        password: 'demo',
        roles: ['user']
    }
];



export default function Login() {
    const  dispatch = useStore(false)[1];

    useEffect(()=>{

        if (useRedirectFlow) {
            msalApp.handleRedirectPromise()
                .then(this.handleResponse)
                .catch(err => {
                    this.setState({error: err.errorMessage});
                    console.error(err);
                });
        }

    },[]);


    const handleResponse = (response) => {      
        debugger          
        if (response !== null) {
            
            const msGraph={
                idToken:response.idTokenClaims,
                accessToekn:response.accessToken
            }                                    
            login(msGraph);
            dispatch(CURRENT_USER,response.account);
            history.replace(from);
            
         
        } else {
                //not successful;
        }
    }

    const signIn = async(redirect) => {
        
        if (redirect) {
            return msalApp.loginRedirect(loginRequest);
        }

        return msalApp.loginPopup(loginRequest)
            .then(handleResponse)
            .catch(err => {
                // this.setState({error: err.errorMessage});
            });
    }

    // const { isAuthenticated, principal, login, logout } = useAuthentication();
    // const { handleSubmit, control, errors } = useForm();
    // const [error, setError] = React.useState();

    const { login } = useAuthentication();
    const { handleSubmit } = useForm();
    const [setError] = React.useState();
    const history = useHistory();
    const location = useLocation();

    const from = location.state?.from || { pathname: '/' + i18n.language + '/'};

    return (
        <div className={"ms-Grid-row " + classes.LoginContainer}>
            <div className={"ms-Grid-col-12 " + classes.divlogobackbround}>


                <div className="ms-Grid-col ms-lg1 " >
                </div>
                <div className={"ms-Grid-col ms-lg4 " + classes.logininput}>
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-row">
                            <div className={"ms-Grid-col ms-lg12 " + classes.pad}>
                                <Image
                                    src={logo} className={classes.imagepad} alt={logo}
                                />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="ms-Grid-row">
                                <div className={"ms-Grid-col ms-lg12 " + classes.pad}>
                                    <TextField label="" underlined placeholder="Email or username" inputClassName={classes.textsize} />
                                </div>
                            </div>
                            <div className={"ms-Grid-row " + classes.mtop20}>
                                <div className={"ms-Grid-col ms-lg12 " + classes.pad}>
                                    <TextField label="" underlined placeholder="Password" type="password" inputClassName={classes.textsize} />
                                </div>
                            </div>
                            <div className={"ms-Grid-row " + classes.mtop20}>
                                <div className={"ms-Grid-col ms-lg12 text-right " + classes.pad}>
                                    <Link href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link">
                                        Forgot password?
                                      </Link>
                                </div>
                            </div>


                            <div className={"ms-Grid-row " + classes.mtop20}>
                                <div className={"ms-Grid-col ms-lg12 buttonsize " + classes.pad}>
                                    <PrimaryButton  type="submit" text="Sign in" className={classes.buttonsize} />
                                </div>
                            </div>
                        </form>


                        <div className={"ms-Grid-row " + classes.mtop30}>
                            <div className={"ms-Grid-col ms-lg12 text-center " + classes.pad}>
                                or sign in using
                            </div>
                        </div>
                    </div>

                    <div className={"ms-Grid-row " + classes.mtop30}>
                        <div className="ms-Grid-col ms-lg12 text-center">
                            <button className={classes.loginbutton + ' ' + classes.mr10}>Unilogin</button>
                            <button className={classes.loginbutton + ' ' + classes.mr10} onClick={()=>signIn(useRedirectFlow)}>
                                <FontIcon iconName="OfficeLogo" className={classes.loginIcon} /> Microsoft Office 365</button>
                            <button className={classes.loginbuttonnmeid}><img className={classes.nemid}
                                    src={nemid} alt={nemid}
                                /></button>
                        </div>
                    </div>
                </div>

                <div className={"ms-Grid-col ms-lg7 "} >
                </div>
            </div>
        </div>

    );

    function onSubmit (values) {
        //setError(null);
        remoteAuthService(values)
          .then(identity => {
            login(identity);
            history.replace(from);
          })
          .catch(setError);
      }

    //   function getErrorMessage (name) {
    //     return errors[name]?.message;
    //   }
}

function remoteAuthService({ username, password }) {
    const found = demoUsers.find(user => user.username === "admin");
    
    if (found?.password === "admin") {
      return Promise.resolve({
        username: found.username,
        token: `{"admin" + "_"}` + Math.random(),
        displayName: found.displayName,
        roles: found.roles
      });
    } else {
      return Promise.reject('Incorrect username or password');
    }
  }
