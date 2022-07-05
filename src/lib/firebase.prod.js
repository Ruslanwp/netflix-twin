/* eslint-disable import/prefer-default-export */
import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBiM18WWE0LwZDruyVmzKGPeDblWQNn2u4',
  authDomain: 'netflix-test1.firebaseapp.com',
  projectId: 'netflix-test1',
  storageBucket: 'netflix-test1.appspot.com',
  messagingSenderId: '138896120392',
  appId: '1:138896120392:web:a6f0893e664839b1b6967d',
};

export const firebase = Firebase.initializeApp(config);
