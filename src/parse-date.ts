import { addYears, addMonths, addWeeks, addDays, addHours, addMinutes } from 'date-fns';

export default class parseDate {

    constructor() {
        // nothing to do
    }
    
    getExpirationDate(duration: IDuration): Date {
        if (duration && typeof duration !== 'object') {
            const message = 'Expecting cookie expiration to either be null or an object';
            throw new Error(message);
        }

        let expires = new Date();

        if (duration.years) {
            expires = addYears(expires, duration.years);
        }

        if (duration.months) {
            expires = addMonths(expires, duration.months);
        }

        if (duration.weeks) {
            expires = addWeeks(expires, duration.weeks);
        }

        if (duration.days) {
            expires = addDays(expires, duration.days);
        }

        if (duration.hours) {
            expires = addHours(expires, duration.hours);
        }

        if (duration.minutes) {
            expires = addMinutes(expires, duration.minutes);
        }

        return expires;
    }
}

export interface IDuration {
    years?: number;
    months?: number;
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}
