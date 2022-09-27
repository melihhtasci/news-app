import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCAUP9B7CvdYfW5EtEhPunSxGhR2BKxx8Y",
  authDomain: "react-firebase-d784f.firebaseapp.com",
  databaseURL: "https://react-firebase-d784f.firebaseio.com",
  projectId: "react-firebase-d784f",
  storageBucket: "react-firebase-d784f.appspot.com",
  messagingSenderId: "892246152577",
  appId: "1:892246152577:web:7ecbad4558f302c9ae0480"
};


class Firebase {
    
  constructor() {
      app.initializeApp(firebaseConfig);
      
      this.auth = app.auth();
      this.db = app.firestore();

      _FirebaseAccess.auth=this.auth;
      _FirebaseAccess.db=this.db;

      this.auth.onAuthStateChanged(user=>{
          if (user) {
              _User.haveUser=user;    // haveuser ve isauth degiskenlerini silecegim
              _User.isAuth=true;      // uid den takip edecegim..

              this.getNickname(user.uid);
              _User.uid=user.uid;       
              console.log("The user log in.",user);
          }else{
              _User.haveUser=null;
              _User.isAuth=false;

              _User.uid="";
              _User.nickname="";
              console.log("The user log out.");
          }
          
      })
  }

  getNickname = (uid)=>{
      this.db.collection("users").doc(uid).get()
      .then((ans)=>_User.nickname=ans.data().nickname);
  }

  createNewUser=(email,password,nickname)=>{
      _Loader.dataLoaded=false;

      this.auth.createUserWithEmailAndPassword(email,password)
      .then((response)=>{
          return this.db.collection('users').doc(response.user.uid).set({
              nickname:nickname
          })
      })
      .then((answer)=>{
          alertify.success("You create successfuly");
          console.log(answer);            
      })
      .catch((e)=>{
          console.log(e);
          // alertify.danger("Error creating user: ",e);
      })
      .finally((res)=> {
          console.log(res);    
          _Loader.dataLoaded=true;
      });
      
  }
  logoutUser=()=>{
      _Loader.dataLoaded=false;
      return this.auth.signOut();
  }
  loginUser = (email,password) =>{
      _Loader.dataLoaded=false;
      return this.auth.signInWithEmailAndPassword(email,password);
  }
}

export default Firebase;