import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseAuth: AngularFireAuth
  ) { }

  public async login(email: string, password: string) {
    return await this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  public async logout(): Promise<void> {
    return await this.firebaseAuth.signOut();
  }
}
