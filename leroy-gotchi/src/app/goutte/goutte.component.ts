import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goutte',
  templateUrl: './goutte.component.html',
  styleUrls: ['./goutte.component.css']
})
export class GoutteComponent implements OnInit {
    water1: boolean | undefined;
    water2: boolean | undefined;
    water4: boolean | undefined;
    water5: boolean | undefined;
    water3: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
      this.updateGoutte(0);
  }

  updateGoutte(coeffEnergie: number) {
      this.water1 = coeffEnergie < 100;
      this.water2 = coeffEnergie > 100 && coeffEnergie < 200;
      this.water3 = coeffEnergie > 200 && coeffEnergie < 300;
      this.water4 = coeffEnergie > 300 && coeffEnergie < 400;
      this.water5 = coeffEnergie > 400 && coeffEnergie < 500;
  }

}
