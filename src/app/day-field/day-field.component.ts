import { Component, Input } from "@angular/core";


@Component({
    selector: "th-day-field",
    templateUrl: "./day-field.component.html",
    styleUrls: ['./day-field.component.css']
})
export class DayFieldComponent {
    @Input() day = '';
}