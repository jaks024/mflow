
class MonthStatement {
    constructor(id, month) {
        this.id = id;
        this.month = month;
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.monthlyEntires = [];
    }

    copy(statement) {
        this.id = statement.id;
        this.month = statement.month;
        this.totalIncome = statement.totalIncome;
        this.totalExpense = statement.totalExpense;
        this.monthlyEntires = statement.monthlyEntires;
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

    getCategoriesIncomeExpenseTotal() {
        const totals = [];
        this.monthlyEntires.forEach(entry => {
            var added = false;
            for (let i = 0; i < totals.length; i++) {
                const t = totals[i];
                if (t.category === entry.category) {
                    t.income += +entry.income;
                    t.expense += +entry.expense;
                    totals[i] = t;
                    added = true;
                    break;
                }
            }
            if (!added) {
                totals.push({
                    category: entry.category, 
                    income: +entry.income, 
                    expense: +entry.expense
                });
            }
        });
        return totals;
    }

    deleteEntry(entryId) {
        this.monthlyEntires = this.monthlyEntires.filter((entry) => {
            return entry.id !== entryId;
        });
        this.calculateTotal();
    }

    deleteEntryByCategory(categoryName) {
        this.monthlyEntires = this.monthlyEntires.filter((entry) => {
            return entry.category !== categoryName;
        });
        this.calculateTotal();
    }
}

export default MonthStatement;