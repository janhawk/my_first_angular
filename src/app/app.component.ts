import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "World ";
  title = "brain";
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });
  // appareilName: string = "Machine à laver";
  appareilOne = "Tv";
  appareilTwo = "Pc";
  appareilThree = "Ps4";

  appareils = [
    {
      name: "Tv",
      status: "éteint"
    },
    {
      name: "Pc",
      status: "allumé"
    },
    {
      name: "Ps4",
      status: "éteint"
    }
  ];

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  onAllumer() {
    console.log("On allume tout !");
  }
  ngOnInit() {}
}
