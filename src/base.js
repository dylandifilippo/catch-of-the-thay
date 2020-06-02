import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD93a008_l40yCt_u9Jy7oGk4BVf5159cw',
  authDomain: 'catch-of-the-day-difilippo.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-difilippo.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
