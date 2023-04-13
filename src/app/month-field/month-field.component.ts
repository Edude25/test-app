import { Component, Input } from "@angular/core";


@Component({
    selector: "th-month-field",
    templateUrl: "./month-field.component.html",
    styleUrls: ['./month-field.component.css']
})
export class MonthFieldComponent {
    @Input() month: string = '';
    @Input() monthClick: boolean = false;
}