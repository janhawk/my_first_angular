import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-appareil",
  templateUrl: "./appareil.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;

  // appareilStatus: string = "éteint";

  constructor() {}

  ngOnInit() {}

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === "allumé") {
      return "green";
    } else if (this.appareilStatus === "éteint") {
      return "red";
    }
  }
}
