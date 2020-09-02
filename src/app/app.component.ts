import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // loadedFeature = 'recipe';

  // ngOnInit() {
  //   // Your web app's Firebase configuration
  //   var firebaseConfig = {
  //   apiKey: "AIzaSyAuinwMJ61oWjoZnXT19dUbcQx7spk9Svk",
  //   authDomain: "udemy-ng-http-b2917.firebaseapp.com",
  //   databaseURL: "https://udemy-ng-http-b2917.firebaseio.com",
  //   projectId: "udemy-ng-http-b2917",
  //   storageBucket: "udemy-ng-http-b2917.appspot.com",
  //   messagingSenderId: "317324538350",
  //   appId: "1:317324538350:web:a6f5505746cec8b52edeff",
  //   measurementId: "G-TFBY9BHWQJ"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // }

  ngOnInit() {
    // Your web app's Firebase configuration
      const firebaseConfig = {
      apiKey: 'AIzaSyAuinwMJ61oWjoZnXT19dUbcQx7spk9Svk',
      authDomain: 'udemy-ng-http-b2917.firebaseapp.com',
    };
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  }
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
