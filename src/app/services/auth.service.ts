import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }
  signInWithGoogle() {
    return new Promise((resolve,reject) => {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(userData => resolve(userData), err => reject(err))
    });
  }
  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  logOut() {
    this.afAuth.auth.signOut();
  }
}
