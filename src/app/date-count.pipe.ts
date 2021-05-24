import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

    transform(value: any): any {
        let today: any = new Date();
        let updated: any = new Date(value);
        var dateDifference = Math.abs(updated - today)
        const SECONDS_IN_DAY = 86400;
        const SECONDS_IN_HOUR = 3600;
        const SECONDS_IN_MIN = 60;
        var dateDifferenceSeconds = dateDifference * 0.001;
        var dateCounter = dateDifferenceSeconds / SECONDS_IN_DAY;
        console.log(dateCounter);

        if (dateCounter > 30 && updated < today) {
            var months = Math.trunc(dateCounter / 30);
            var daysRemainder = Math.trunc(dateCounter % 30);
            if (months > 1) {
                var sForMonth = "s";
            } else if (months === 1) {
                var sForMonth = "";
            }
            if (daysRemainder > 1) {
                var sForDays = "s";
            } else if (daysRemainder === 1) {
                var sForDays = "";
            }
            return `${months} month${sForMonth}, ${daysRemainder} day${sForDays}`;
        } else if (dateCounter === 30) {
            return '1 month';
        } else if (dateCounter < 30 && dateCounter > 1) {
            return `${dateCounter} days`;
        } else if (dateCounter === 1) {
            return "1 day";
        } else if (dateCounter < 1) {
            var hours = Math.trunc(dateDifferenceSeconds / SECONDS_IN_HOUR);
            if (hours > 1) {
                return `${hours} hours`;
            } else if (hours === 1) {
                return '1 hour';
            } else if (hours < 1) {
                var minutes = Math.trunc(dateDifferenceSeconds / SECONDS_IN_MIN);
                if (minutes > 1) {
                    return `${minutes} minutes`;
                } else if (minutes === 1) {
                    return '1 minute';
                } else if (minutes < 1) {
                    return 'seconds';
                }
            }
        }else{
            return "seconds"
        }
    }
}
