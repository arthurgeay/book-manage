import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-manage';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCXSOUXdyfaBWqqhFK6QHfi7ENGJjTzvfA",
      authDomain: "book-manage-d6a0d.firebaseapp.com",
      databaseURL: "https://book-manage-d6a0d.firebaseio.com",
      projectId: "book-manage-d6a0d",
      storageBucket: "book-manage-d6a0d.appspot.com",
      messagingSenderId: "120392306952",
      appId: "1:120392306952:web:647f1aaf694e27fdc59cbd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
