// import firebase from 'firebase/app' 
// import 'firebase/firestore' 

// const firebaseConfig = {
//   apiKey: "AIzaSyDoE79obVxRVsYsoMyDl6s5EbdX-m1Tk's",

//   authDomain: "twitterclone-50443.firebaseapp.com",

//   projectId: "twitterclone-50443",

//   storageBucket: "twitterclone-50443.appspot.com",

//   messagingSenderId: "496166408708",

//   appId: "1:496166408708:web:88c5acb63f9e123e095b51",
// };

// firebase.initializeApp(firebaseConfig);
// let db=firebase.firestore();
// export default db;
// 
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDoE79obVxRVsYsoMyDl6s5EbdX-m1Tk's",
  authDomain: "twitterclone-50443.firebaseapp.com",
  projectId: "twitterclone-50443",
  storageBucket: "twitterclone-50443.appspot.com",
  messagingSenderId: "496166408708",
  appId: "1:496166408708:web:88c5acb63f9e123e095b51",
};

// 
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export default db;
