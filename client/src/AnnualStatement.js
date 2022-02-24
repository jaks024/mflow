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

    isIndexInMonthlyStatementRange(index) {
        return index >= 0 && index < this.monthlyStatements.length;
    }

    addEntryToMonthStatement(month, entry) {
        if (this.isIndexInMonthlyStatementRange(month - 1) && this.monthlyStatements[month - 1] != null) {
            this.monthlyStatements[month - 1].addEntry(entry);
        }
        this.calculateTotal();
    }

    addCategory(category) {
        if (this.categories.length > 0 && this.categories.includes(category)) {
            return false;
        }
        this.categories.push(category);
        return true;
    }

    getMonthTotalIncome(month) {
        if (this.isIndexInMonthlyStatementRange(month - 1)) {
            return this.monthlyStatements[month - 1].totalIncome;
        }
        return 0;
    }
    getMonthTotalExpense(month) {
        if (this.isIndexInMonthlyStatementRange(month - 1)) {
            return this.monthlyStatements[month - 1].totalExpense;
        }
        return 0;
    }
    getMonthEntries(month) {
        if (this.isIndexInMonthlyStatementRange(month - 1)) {
            return this.monthlyStatements[month - 1].monthlyEntires;
        }
        return 0;
    }
    getMonthStatement(month) {
        if (this.isIndexInMonthlyStatementRange(month - 1)) {
            return this.monthlyStatements[month - 1];
        }
        return null;
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