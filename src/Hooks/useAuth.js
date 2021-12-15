import { useContext } from 'react';
import {app} from '../Firebase/firebase';
import {getAuth, signInWithRedirect, GoogleAuthProvider, signOut} from 'firebase/auth';
import { UserContext } from '../Context/UserContext';

const useAuth = () => {

    const {user, setUser} = useContext(UserContext);

    const auth = getAuth(app);
    const providerGoogle = new GoogleAuthProvider();

    function logIn(){
        signInWithRedirect(auth, providerGoogle)
        setUser(auth.currentUser)
    }
    
    function logOut(){
        signOut(auth)
        setUser(null)
    }

    return {
        logIn,
        logOut,
        user
    }
}

export default useAuth
