import { Injectable } from "@angular/core";

const WEEK = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

@Injectable()
export class WeekService {

    getDay(num: number): string {

        return num > 0 && num <= 7 ? WEEK[num - 1] : "No Display";
    }
}

