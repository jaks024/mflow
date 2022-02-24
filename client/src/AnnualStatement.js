import MonthStatement from "./MonthStatement";

class AnnualStatement {
    constructor(year) {
        this.year = year;
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.monthlyStatements = this.initEmptyMonthStatement();
        this.categories = [];
    }

    copy(statement) {
        this.year = statement.year;
        this.totalIncome = statement.totalIncome;
        this.totalExpense = statement.totalExpense;
        this.monthlyStatements = this.initEmptyMonthStatement();
        this.categories = statement.categories;
        for (let i = 0; i < this.monthlyStatements.length; i++) {
            this.monthlyStatements[i].copy(statement.monthlyStatements[i]);
        }
    }

    initEmptyMonthStatement() {
        let statements = new Array(12);
        for (let i = 0; i < statements.length; i++) {
            statements[i] = new MonthStatement(i, +i + 1);
        }
        return statements;
    }

    calculateTotal() {
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.monthlyStatements.forEach(statement => {
            this.totalIncome += +statement.totalIncome;
            this.totalExpense += +statement.totalExpense;
        });
    }

    replaceMonthlyStatement(statement) {
        this.monthlyStatements[statement.month - 1] = statement;
        this.calculateTotal();
    }

    addEntryToMonthStatement(month, entry) {
        if (this.monthlyStatements[month - 1] != null) {
            this.monthlyStatements[month - 1].addEntry(entry);
        }
        this.calculateTotal();
    }

    addCategory(category) {
        console.log(this.categories);
        if (this.categories.length > 0 && this.categories.includes(category)) {
            return false;
        }
        this.categories.push(category);
        return true;
    }

    getMonthTotalIncome(month) {
        return this.monthlyStatements[month - 1].totalIncome;
    }
    getMonthTotalExpense(month) {
        return this.monthlyStatements[month - 1].totalExpense;
    }
    getMonthEntries(month) {
        return this.monthlyStatements[month - 1].monthlyEntires;
    }
    getMonthStatement(month) {
        return this.monthlyStatements[month - 1];
    }

    deleteEntry(entryId, month) {
        const monthStatement = this.getMonthStatement(month);
        monthStatement.deleteEntry(entryId);
        this.replaceMonthlyStatement(monthStatement);
        this.calculateTotal();
    }

    deleteCategory(categoryName) {
        this.categories = this.categories.filter((cat) => {
            return cat !== categoryName;
        });
        this.monthlyStatements.forEach(statement => {
            statement.deleteEntryByCategory(categoryName);
        });
        this.calculateTotal();
    }

    getAllCategoryTotals() {
        const categoriesTotalMap = new Map();
        this.monthlyStatements.forEach(statement => {
            const catSubTotalArray = statement.getCategoriesIncomeExpenseTotal();
            catSubTotalArray.forEach(entry => {
                if (categoriesTotalMap.has(entry.category)) {
                    const oldTotal = categoriesTotalMap.get(entry.category);
                    const newTotalIncome = entry.income + oldTotal.income;
                    const newTotalExpense = entry.expense + oldTotal.expense;
                    categoriesTotalMap.set(entry.category, {income: newTotalIncome, expense: newTotalExpense});
                } else {
                    categoriesTotalMap.set(entry.category, {income: entry.income, expense: entry.expense});
                }
            });
        });
        return Array.from(categoriesTotalMap, ([category, totals]) => ({category, totals}));
    }
}

export default AnnualStatement;