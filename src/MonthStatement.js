
class MonthStatement {
    constructor(id, month) {
        this.id = id;
        this.month = month;
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.monthlyEntires = [];
    }

    calculateTotal() {
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.monthlyEntires.forEach(entry => {
            this.totalIncome += +entry.income;
            this.totalExpense += +entry.expense;
        });
    }

    addEntry(entry) {
        this.monthlyEntires.push(entry);
        this.calculateTotal();
    }

    isStatementEmpty() {
        return this.monthlyEntires.length === 0;
    }
}

export default MonthStatement;