import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-achat',
    templateUrl: './achat.component.html',
    styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {

    listItem: string[] = ["perceuse"];

    constructor() {
    }

    ngOnInit(): void {
    }

    addList(item: string) {
        this.listItem.push(item);
        console.log(this.listItem.toString());
    }

}
