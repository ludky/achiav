import getEnvVars from '../../../environment';
import Amplify, { Auth, Hub } from 'aws-amplify';


const { awsConfig } = getEnvVars();
Amplify.configure(awsConfig);

export const signOut = () => {
    Auth.signOut({ global: true })
        .then(data => {
            console.log('Logging out.')
        })
        .catch(err => console.log(err));
    }

export const checkSignOut = () => {
    Hub.listen('auth', (authData) => {
        if (authData.payload.event === 'signOut') {
          this.props.onStateChange('signedOut', null);
        }
      })
}




