import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

class Firebase {
  app;
  auth;
  constructor(
    key,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
  ) {
    this.firebaseConfig = {
      apiKey: key,
      authDomain: authDomain,
      projectId: projectId,
      storageBucket: storageBucket,
      messagingSenderId: messagingSenderId,
      appId: appId,
      measurementId: measurementId,
    };

    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(this.app);
  }

  getAuth = () => {
    return this.auth;
  };
}

export default Firebase;
