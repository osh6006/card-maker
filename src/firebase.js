import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

class Firebase {
  app;
  auth;
  database;
  constructor(
    key,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
  ) {
    this.firebaseConfig = {
      apiKey: key,
      authDomain: authDomain,
      databaseURL: databaseURL,
      projectId: projectId,
      storageBucket: storageBucket,
      messagingSenderId: messagingSenderId,
      appId: appId,
      measurementId: measurementId,
    };

    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(this.app);
    this.database = getDatabase(this.app);
  }

  getAuth = () => {
    return this.auth;
  };
}

export default Firebase;
