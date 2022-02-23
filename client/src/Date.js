class Date {
    constructor(year, month, day) {
        this.year = +year;
        this.month = +month;
        this.day = +day;
    }

    equal(date) {
        return this.year === date.year && this.month === date.month && this.day === date.day;
    }
}

export default Date;