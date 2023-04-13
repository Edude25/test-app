import { Component, Input } from "@angular/core";

@Component({
    selector: "th-year-field",
    templateUrl: "./year-field.component.html",
    styleUrls: ['./year-field.component.css']
})
export class YearFieldComponent {
    @Input() year: string = '';
    @Input() yearClick: boolean = false;
    reqData: any[] = [
        [ //2023
            ["jan"], ["feb"], ["mar"], ["apr"], ["may"], ["jul"], ["aug"], ["sep"], ["nov"], ["dec"]
        ],
        [ //2022
            ["jan"], ["feb"], ["mar"], ["apr"], ["may"], ["jul"], ["aug"], ["sep"], ["nov"], ["dec"]
        ]
    ];

}