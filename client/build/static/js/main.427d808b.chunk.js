(this.webpackJsonpmflow=this.webpackJsonpmflow||[]).push([[0],{106:function(e,t,n){e.exports=n(173)},111:function(e,t,n){},112:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(102),s=n.n(o),i=(n(111),n(112),n(62)),l=n.n(i),c=n(103),u=n(4),m=n(5),d=n(12),h=n(11),p=(n(114),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"getMonthTotalIncome",value:function(){return null!==this.props.currentAnnualStatement?this.props.currentAnnualStatement.getMonthTotalIncome(this.props.currentMonth).toFixed(2):0}},{key:"getMonthTotalExpense",value:function(){return null!==this.props.currentAnnualStatement?this.props.currentAnnualStatement.getMonthTotalExpense(this.props.currentMonth).toFixed(2):0}},{key:"getAnnualTotalIncome",value:function(){return null!==this.props.currentAnnualStatement?this.props.currentAnnualStatement.totalIncome.toFixed(2):0}},{key:"getAnnualTotalExpense",value:function(){return null!==this.props.currentAnnualStatement?this.props.currentAnnualStatement.totalExpense.toFixed(2):0}},{key:"renderMonthCategoryTotals",value:function(){if(null!==this.props.currentAnnualStatement){var e=this.props.currentAnnualStatement.getMonthStatement(this.props.currentMonth);return null===e?null:e.getCategoriesIncomeExpenseTotal().map((function(e){return r.a.createElement("div",{key:e.category+"-summary-month-subtotal-category-name",className:"SummaryPage-income-expense-category"},e.category,": \u2003",r.a.createElement("span",{className:"income-indicator"},"\u25b2")," $",e.income.toFixed(2)," \u2003",r.a.createElement("span",{className:"expense-indicator"},"\u25bc")," $",e.expense.toFixed(2))}))}return null}},{key:"renderYearCategoryTotals",value:function(){return null!==this.props.currentAnnualStatement?this.props.currentAnnualStatement.getAllCategoryTotals().map((function(e){return r.a.createElement("div",{key:e.category+"-summary-year-subtotal-category-name",className:"SummaryPage-income-expense-category"},e.category,": \u2003",r.a.createElement("span",{className:"income-indicator"},"\u25b2")," $",e.totals.income.toFixed(2)," \u2003",r.a.createElement("span",{className:"expense-indicator"},"\u25bc")," $",e.totals.expense.toFixed(2))})):null}},{key:"render",value:function(){return r.a.createElement("div",{className:"SummaryPage-body"},r.a.createElement("div",{className:"SummaryPage-header-label SummaryPage-main-header-label"},"Summary"),r.a.createElement("div",null,r.a.createElement("div",{className:"SummaryPage-header-label"},"This Month"),r.a.createElement("div",{className:"SummaryPage-income-expense-block"},r.a.createElement("div",{className:"SummaryPage-income-expense-line"},r.a.createElement("span",{className:"income-indicator"},"\u25b2"),"$",this.getMonthTotalIncome()),r.a.createElement("div",{className:"SummaryPage-income-expense-line"},r.a.createElement("span",{className:"expense-indicator"},"\u25bc"),"$",this.getMonthTotalExpense()))),r.a.createElement("div",null,this.renderMonthCategoryTotals()),r.a.createElement("div",null,r.a.createElement("div",{className:"SummaryPage-header-label"},"This Year"),r.a.createElement("div",{className:"SummaryPage-income-expense-block"},r.a.createElement("div",{className:"SummaryPage-income-expense-line"},r.a.createElement("span",{className:"income-indicator"},"\u25b2"),"$",this.getAnnualTotalIncome()),r.a.createElement("div",{className:"SummaryPage-income-expense-line"},r.a.createElement("span",{className:"expense-indicator"},"\u25bc"),"$",this.getAnnualTotalExpense()))),r.a.createElement("div",null,this.renderYearCategoryTotals()))}}]),n}(r.a.Component)),y=(n(115),n(25)),g=(n(116),Object(m.a)((function e(t,n,a,r,o,s,i){Object(u.a)(this,e),this.id=t,this.date=n,this.income=a,this.expense=r,this.category=o,this.location=s,this.description=i}))),v=function(){function e(t,n,a){Object(u.a)(this,e),this.year=+t,this.month=+n,this.day=+a}return Object(m.a)(e,[{key:"equal",value:function(e){return this.year===e.year&&this.month===e.month&&this.day===e.day}}]),e}(),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).monthsAndDays=[{name:"Jan",num:1,days:31},{name:"Feb",num:2,days:29},{name:"Mar",num:3,days:31},{name:"Apr",num:4,days:30},{name:"May",num:5,days:31},{name:"Jun",num:6,days:30},{name:"Jul",num:7,days:31},{name:"Aug",num:8,days:31},{name:"Sep",num:9,days:30},{name:"Oct",num:10,days:31},{name:"Nov",num:11,days:30},{name:"Dec",num:12,days:31}],a.onAddEntry=function(){var e,t=1,n=Object(y.a)(a.monthsAndDays);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(r.name===a.state.inputMonth){t=r.num;break}}}catch(o){n.e(o)}finally{n.f()}isNaN(a.state.inputIncome)||isNaN(a.state.inputExpense)||0===a.state.inputIncome.trim().length||0===a.state.inputExpense.trim().length||0===a.state.inputCategory.trim().length||0===a.state.inputLocation.trim().length||(a.props.onAddEntry(new g(a.state.idCount,new v(a.state.inputYear,t,a.state.inputDay),a.state.inputIncome,a.state.inputExpense,a.state.inputCategory.trim(),a.state.inputLocation.trim(),a.state.inputDescription.trim())),a.setState({idCount:a.state.idCount+1}))},a.onAddCategory=function(){a.state.inputNewCategory.length>0&&a.props.onAddCategory(a.state.inputNewCategory)},a.onClearForm=function(){a.setState({inputCategory:"",inputLocation:"",inputIncome:"0",inputExpense:"0",inputDescription:""})},a.onClearCateogryForm=function(){a.setState({inputNewCategory:""})},a.onChangeInputYear=function(e){var t=e.target.value;a.setState({inputYear:t})},a.onChangeInputMonth=function(e){var t=e.target.value;console.log(t),a.setState({inputMonth:t})},a.onChangeInputDay=function(e){var t=e.target.value;a.setState({inputDay:t})},a.state={idCount:0,inputYear:2022,inputMonth:"Jan",inputDay:1,inputCategory:"",inputLocation:"",inputIncome:"0",inputExpense:"0",inputDescription:"",inputNewCategory:""},a}return Object(m.a)(n,[{key:"timeNow",value:function(){var e=new v;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+(e.getHours()+":"+e.getMinutes()+":"+e.getSeconds())}},{key:"updateInput",value:function(e,t){var n=t.target.value;1===e?this.setState({inputCategory:n}):2===e?this.setState({inputLocation:n}):3===e?this.setState({inputIncome:n}):4===e?this.setState({inputExpense:n}):5===e?this.setState({inputDescription:n}):6===e&&this.setState({inputNewCategory:n})}},{key:"renderOptions",value:function(e,t){return null===e?null:e.map((function(e){return r.a.createElement("option",{key:e+t,value:e},e)}))}},{key:"renderYearOptions",value:function(){for(var e=[],t=2021;t<2030;t++)e.push(t);return this.renderOptions(e,"-add-page-year-option")}},{key:"renderMonthOptions",value:function(){var e=[];return this.monthsAndDays.forEach((function(t){e.push(t.name)})),this.renderOptions(e,"-add-page-month-option")}},{key:"renderDayOptions",value:function(){var e,t=[],n=Object(y.a)(this.monthsAndDays);try{for(n.s();!(e=n.n()).done;){var a=e.value;if(a.name===this.state.inputMonth){for(var r=1;r<=a.days;r++)t.push(r);break}}}catch(o){n.e(o)}finally{n.f()}return this.renderOptions(t,"-add-page-day-option")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"AddPage-body"},r.a.createElement("div",{className:"AddPage-header-label"},"Add Entry"),r.a.createElement("div",{className:"AddPage-form"},r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("div",{className:"AddPage-field-label"},"Date"),r.a.createElement("div",{className:"AddPage-date-block"},r.a.createElement("select",{className:"AddPage-date-select",value:this.state.inputYear,onChange:function(t){return e.onChangeInputYear(t)}},this.renderYearOptions()),r.a.createElement("select",{className:"AddPage-date-select",value:this.state.inputMonth,onChange:function(t){return e.onChangeInputMonth(t)}},this.renderMonthOptions()),r.a.createElement("select",{className:"AddPage-date-select",value:this.state.inputDay,onChange:function(t){return e.onChangeInputDay(t)}},this.renderDayOptions()))),r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("div",{className:"AddPage-field-label"},"Category"),r.a.createElement("input",{className:"AddPage-field-input",inputMode:"text",value:this.state.inputCategory,onChange:function(t){return e.updateInput(1,t)}})),r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("div",{className:"AddPage-field-label"},"Location"),r.a.createElement("input",{className:"AddPage-field-input",inputMode:"text",value:this.state.inputLocation,onChange:function(t){return e.updateInput(2,t)}})),r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("div",{className:"AddPage-field-label"},"Income"),r.a.createElement("input",{className:"AddPage-field-input",inputMode:"numeric",value:this.state.inputIncome,onChange:function(t){return e.updateInput(3,t)}})),r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("div",{className:"AddPage-field-label"},"Expense"),r.a.createElement("input",{className:"AddPage-field-input",inputMode:"numeric",value:this.state.inputExpense,onChange:function(t){return e.updateInput(4,t)}})),r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("div",{className:"AddPage-field-label"},"Description"),r.a.createElement("input",{className:"AddPage-field-input",inputMode:"text",value:this.state.inputDescription,onChange:function(t){return e.updateInput(5,t)}})),r.a.createElement("br",null),r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("button",{className:"AddPage-form-btn",onClick:function(){return e.onAddEntry()}},"Add"),r.a.createElement("button",{className:"AddPage-form-btn",onClick:function(){return e.onClearForm()}},"Clear"))),r.a.createElement("br",null),r.a.createElement("div",{className:"AddPage-header-label"},"Add Category"),r.a.createElement("div",{className:"AddPage-form"},r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("div",{className:"AddPage-field-label"},"Category"),r.a.createElement("input",{className:"AddPage-field-input",inputMode:"text",value:this.state.inputNewCategory,onChange:function(t){return e.updateInput(6,t)}})),r.a.createElement("br",null),r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("button",{className:"AddPage-form-btn",onClick:function(){return e.onAddCategory()}},"Add"),r.a.createElement("button",{className:"AddPage-form-btn",onClick:function(){return e.onClearCateogryForm()}},"Clear"))))}}]),n}(r.a.Component),E=(n(117),n(101),n(100),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.isDate?"grid-cell grid-cell-date":"grid-cell"},this.props.value)}}],[{key:"newCellId",value:function(){return this.cellId++,this.cellId}}]),n}(r.a.Component));E.cellId=0;var b=E,S=(n(172),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"renderCells",value:function(e){return e.map((function(e,t){return null===e?r.a.createElement(b,{key:b.newCellId()+"-cell",value:null,isDate:!1}):0===t?r.a.createElement(b,{key:b.newCellId()+"-cell",value:e,isDate:!0}):r.a.createElement(b,{key:b.newCellId()+"-cell",value:e,isDate:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.isHeaderRow?"grid-row grid-header-row":"grid-row"},this.renderCells(this.props.rowContent))}}],[{key:"newRowId",value:function(){return this.rowId++,this.rowId}}]),n}(r.a.Component));S.rowId=0;var C=S,A=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).monthsAndDays=[{name:"Jan",num:1,days:31},{name:"Feb",num:2,days:29},{name:"Mar",num:3,days:31},{name:"Apr",num:4,days:30},{name:"May",num:5,days:31},{name:"Jun",num:6,days:30},{name:"Jul",num:7,days:31},{name:"Aug",num:8,days:31},{name:"Sep",num:9,days:30},{name:"Oct",num:10,days:31},{name:"Nov",num:11,days:30},{name:"Dec",num:12,days:31}],e.onChangeViewYear=function(t){var n=t.target.value;e.props.onChangeViewYear(n)},e.onChangeViewMonth=function(t){var n,a=t.target.value,r=Object(y.a)(e.monthsAndDays);try{for(r.s();!(n=r.n()).done;){var o=n.value;if(o.name===a){e.props.onChangeViewMonth(o.num);break}}}catch(s){r.e(s)}finally{r.f()}},e}return Object(m.a)(n,[{key:"renderGrid",value:function(e){var t=this;if(null!==e){var n,a=e.categories,o=[["Dates"]],s=Object(y.a)(this.monthsAndDays);try{for(s.s();!(n=s.n()).done;){var i=n.value;if(+i.num===+this.props.currentMonth){for(var l=0;l<i.days;l++)o.push(["".concat(i.name," ").concat(l+1,", ").concat(this.props.currentAnnualStatement.year)]);break}}}catch(c){s.e(c)}finally{s.f()}return o.map((function(e,n){if("Dates"===e[0]){var o=[e];return a.forEach((function(e){o.push([t.renderHeader(e)])})),r.a.createElement(C,{key:C.newRowId()+"-row",rowContent:o,isHeaderRow:!0})}var s=t.props.currentAnnualStatement.getMonthEntries(t.props.currentMonth),i=[e];return a.forEach((function(e){i.push([]),s.forEach((function(a){a.category===e&&a.date.day===+n&&i[i.length-1].push(t.renderEntry(a))}))})),r.a.createElement(C,{key:C.newRowId()+"-row",rowContent:i,isHeaderRow:!1})}))}}},{key:"renderAllEntries",value:function(e){var t=this;return e.map((function(e){return t.renderEntry(e)}))}},{key:"renderHeader",value:function(e){var t=this;return r.a.createElement("div",{key:"Grid-header-".concat(e),className:"HistoryPage-entry"},r.a.createElement("div",{className:"History-page-entry-content"},r.a.createElement("div",{className:"HistoryPage-entry-delete-btn",onClick:function(){return t.props.onDeleteCategory(e)}},"\xd7"),r.a.createElement("div",{className:"HistoryPage-entry-main"},e)))}},{key:"renderEntry",value:function(e){var t=this;return r.a.createElement("div",{key:e.id,className:"HistoryPage-entry"},r.a.createElement("div",{className:"History-page-entry-content"},r.a.createElement("div",{className:"HistoryPage-entry-delete-btn",onClick:function(){return t.props.onDeleteEntry(e.id)}},"\xd7"),r.a.createElement("div",{className:"HistoryPage-entry-main"},r.a.createElement("div",{className:"HistoryPage-entry-location"},e.location),r.a.createElement("div",null,r.a.createElement("span",{className:"income-indicator"},"\u25b2"),"$",e.income.toFixed(2)),r.a.createElement("div",null,r.a.createElement("span",{className:"expense-indicator"},"\u25bc"),"$",e.expense.toFixed(2)))),r.a.createElement("div",{className:"HistoryPage-entry-collapse"},e.description))}},{key:"renderSelectOption",value:function(e){return null===e?null:e.map((function(e){return r.a.createElement("option",{key:e+"-history-view-option",value:e},e)}))}},{key:"getCurrentYear",value:function(){return null!==this.props.currentAnnualStatement?this.props.currentAnnualStatement.year:""}},{key:"getCurrentMonth",value:function(){var e=this;if(null!==this.props.availableMonths){var t=this.props.availableMonths[0];return this.props.availableMonths.forEach((function(n){n!==e.props.currentMonth||(t=e.props.currentMonth)})),t}return""}},{key:"numericMonthToNamed",value:function(e){var t=this;if(null===e)return null;var n=[];return e.forEach((function(e){n.push(t.monthsAndDays[e-1].name)})),n}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"HistoryPage-body"},r.a.createElement("div",{className:"HistoryPage-header-content"},r.a.createElement("div",{className:"HistoryPage-header-label"},"History"),r.a.createElement("div",{className:"HistoryPage-select-label"},"Year"),r.a.createElement("select",{className:"HistoryPage-header-select",value:this.getCurrentYear(),onChange:function(t){return e.onChangeViewYear(t)}},this.renderSelectOption(this.props.availableYears)),r.a.createElement("div",{className:"HistoryPage-select-label"},"Month"),r.a.createElement("select",{className:"HistoryPage-header-select",value:this.props.currentMonth-1>=0&&this.props.currentMonth-1<this.monthsAndDays.length?this.monthsAndDays[this.props.currentMonth-1].name:"",onChange:function(t){return e.onChangeViewMonth(t)}},this.renderSelectOption(this.numericMonthToNamed(this.props.availableMonths)))),r.a.createElement("div",{className:"HistoryPage-content","data-simplebar":!0,"data-simplebar-auto-hide":"false"},r.a.createElement("div",{className:"HistoryPage-grid"},this.renderGrid(this.props.currentAnnualStatement))))}}]),n}(r.a.Component),N=n(105),k=function(){function e(t,n){Object(u.a)(this,e),this.id=t,this.month=n,this.totalIncome=0,this.totalExpense=0,this.monthlyEntires=[]}return Object(m.a)(e,[{key:"copy",value:function(e){this.id=e.id,this.month=e.month,this.totalIncome=e.totalIncome,this.totalExpense=e.totalExpense,this.monthlyEntires=e.monthlyEntires}},{key:"calculateTotal",value:function(){var e=this;this.totalIncome=0,this.totalExpense=0,this.monthlyEntires.forEach((function(t){e.totalIncome+=+t.income,e.totalExpense+=+t.expense}))}},{key:"addEntry",value:function(e){this.monthlyEntires.push(e),this.calculateTotal()}},{key:"isStatementEmpty",value:function(){return 0===this.monthlyEntires.length}},{key:"getCategoriesIncomeExpenseTotal",value:function(){var e=[];return this.monthlyEntires.forEach((function(t){for(var n=!1,a=0;a<e.length;a++){var r=e[a];if(r.category===t.category){r.income+=+t.income,r.expense+=+t.expense,e[a]=r,n=!0;break}}n||e.push({category:t.category,income:+t.income,expense:+t.expense})})),e}},{key:"deleteEntry",value:function(e){this.monthlyEntires=this.monthlyEntires.filter((function(t){return t.id!==e})),this.calculateTotal()}},{key:"deleteEntryByCategory",value:function(e){this.monthlyEntires=this.monthlyEntires.filter((function(t){return t.category!==e})),this.calculateTotal()}}]),e}(),M=function(){function e(t){Object(u.a)(this,e),this.year=t,this.totalIncome=0,this.totalExpense=0,this.monthlyStatements=this.initEmptyMonthStatement(),this.categories=[]}return Object(m.a)(e,[{key:"copy",value:function(e){this.year=e.year,this.totalIncome=e.totalIncome,this.totalExpense=e.totalExpense,this.monthlyStatements=this.initEmptyMonthStatement(),this.categories=e.categories;for(var t=0;t<this.monthlyStatements.length;t++)this.monthlyStatements[t].copy(e.monthlyStatements[t])}},{key:"initEmptyMonthStatement",value:function(){for(var e=new Array(12),t=0;t<e.length;t++)e[t]=new k(t,+t+1);return e}},{key:"calculateTotal",value:function(){var e=this;this.totalIncome=0,this.totalExpense=0,this.monthlyStatements.forEach((function(t){e.totalIncome+=+t.totalIncome,e.totalExpense+=+t.totalExpense}))}},{key:"replaceMonthlyStatement",value:function(e){this.monthlyStatements[e.month-1]=e,this.calculateTotal()}},{key:"isIndexInMonthlyStatementRange",value:function(e){return e>=0&&e<this.monthlyStatements.length}},{key:"addEntryToMonthStatement",value:function(e,t){this.isIndexInMonthlyStatementRange(e-1)&&null!=this.monthlyStatements[e-1]&&this.monthlyStatements[e-1].addEntry(t),this.calculateTotal()}},{key:"addCategory",value:function(e){return!(this.categories.length>0&&this.categories.includes(e))&&(this.categories.push(e),!0)}},{key:"getMonthTotalIncome",value:function(e){return this.isIndexInMonthlyStatementRange(e-1)?this.monthlyStatements[e-1].totalIncome:0}},{key:"getMonthTotalExpense",value:function(e){return this.isIndexInMonthlyStatementRange(e-1)?this.monthlyStatements[e-1].totalExpense:0}},{key:"getMonthEntries",value:function(e){return this.isIndexInMonthlyStatementRange(e-1)?this.monthlyStatements[e-1].monthlyEntires:0}},{key:"getMonthStatement",value:function(e){return this.isIndexInMonthlyStatementRange(e-1)?this.monthlyStatements[e-1]:null}},{key:"deleteEntry",value:function(e,t){var n=this.getMonthStatement(t);n.deleteEntry(e),this.replaceMonthlyStatement(n),this.calculateTotal()}},{key:"deleteCategory",value:function(e){this.categories=this.categories.filter((function(t){return t!==e})),this.monthlyStatements.forEach((function(t){t.deleteEntryByCategory(e)})),this.calculateTotal()}},{key:"getAllCategoryTotals",value:function(){var e=new Map;return this.monthlyStatements.forEach((function(t){t.getCategoriesIncomeExpenseTotal().forEach((function(t){if(e.has(t.category)){var n=e.get(t.category),a=t.income+n.income,r=t.expense+n.expense;e.set(t.category,{income:a,expense:r})}else e.set(t.category,{income:t.income,expense:t.expense})}))})),Array.from(e,(function(e){var t=Object(N.a)(e,2);return{category:t[0],totals:t[1]}}))}}]),e}(),I=n(65),x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).CLIENT_ID="91993730445-4jjm5pf1kvja9m8r6b66uarvnqmdir1b.apps.googleusercontent.com",a.editCount=0,a.saveIntervalId=setInterval((function(){a.editCount>0&&(1===a.editCount&&(a.saveToDrive(),console.log("Saved to drive")),--a.editCount)}),1e3),a.handleNewEntry=function(e){if(null!==a.getCurrentAnnualStatement()){var t=a.getCurrentAnnualStatement(),n=a.state.currentYearIndex;if(e.date.year!==t.year){var r=!0;if(a.state.allAnnualStatements.forEach((function(t,a){t.year===e.date.year&&(r=!1,n=a)})),r)return void a.addNewAnnualStatementWithEntry(e)}var o=a.state.allAnnualStatements;o[n].addCategory(e.category),o[n].addEntryToMonthStatement(e.date.month,e),a.setState({allAnnualStatements:o,currentYearIndex:n,currentMonth:e.date.month}),a.incrementEditCount()}else a.addNewAnnualStatementWithEntry(e)},a.handleNewCategory=function(e){var t=a.getCurrentAnnualStatement();t.addCategory(e)&&a.setCurrentAnnualStatement(t)},a.handleDeleteEntry=function(e){var t=a.getCurrentAnnualStatement();t.deleteEntry(e,a.state.currentMonth),a.setCurrentAnnualStatement(t),a.handleNoEntriesInMonth(t),a.incrementEditCount()},a.handleDeleteCategory=function(e){var t=a.getCurrentAnnualStatement();t.deleteCategory(e),a.setCurrentAnnualStatement(t),a.handleNoEntriesInMonth(t),a.incrementEditCount()},a.handleChangeViewYear=function(e){for(var t=a.state.allAnnualStatements,n=0;n<t.length;++n)if(+t[n].year===+e){var r=1;return t[n].monthlyStatements.forEach((function(e){e.isStatementEmpty()||(r=e.month)})),a.setState({currentYearIndex:n,currentMonth:r}),void a.incrementEditCount()}},a.handleChangeViewMonth=function(e){a.setState({currentMonth:e}),a.incrementEditCount()},a.handleDownloadData=Object(c.a)(l.a.mark((function e(){var t,n,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.stringify(a.state.allAnnualStatements,void 0,2),n=new Blob([t],{type:"application/json"}),e.next=4,URL.createObjectURL(n);case 4:r=e.sent,(o=document.createElement("a")).href=r,o.download="mflow-user-data.json",document.body.appendChild(o),o.click(),document.body.removeChild(o);case 11:case"end":return e.stop()}}),e)}))),a.successLoginGoogle=function(e){a.setState({userEmail:e.profileObj.email,userName:e.profileObj.name,isSignedIn:!0}),fetch("/login",{method:"GET",headers:{accessToken:e.tokenObj.access_token}}).then((function(e){return e.json()})).then((function(e){console.log(e.message),a.getDataFromDrive()}))},a.failureLoginGoogle=function(e){console.log("failed to login to google"),console.log(e)},a.successLogoutGoogle=function(){a.setState({isSignedIn:!1,userName:"",userEmail:"",currentMonth:1,currentYearIndex:0,allAnnualStatements:[]}),console.log("successfully logged out of google")},a.saveToDrive=function(){a.state.isSignedIn&&(a.setState({isSaving:!0}),fetch("/save",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a.state)}).then((function(e){return e.json()})).then((function(e){console.log(e.message),console.log("Save Status: ".concat(e.status?"Success":"Failure")),a.setState({isSaving:!1})})))},a.getDataFromDrive=function(){fetch("/get").then((function(e){return e.json()})).then((function(e){if(null!==e.userData){var t=[];e.userData.allAnnualStatements.forEach((function(e){var n=new M(e.year);n.copy(e),t.push(n)})),a.setState({currentMonth:e.userData.currentMonth,currentYearIndex:e.userData.currentYearIndex,allAnnualStatements:t}),console.log(e.message)}else a.saveToDrive()}))},a.state={isSignedIn:!1,userName:"",userEmail:"",isSaving:!1,currentMonth:1,currentYearIndex:0,allAnnualStatements:[]},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){document.title="MFlow"}},{key:"incrementEditCount",value:function(){this.editCount<2&&++this.editCount}},{key:"getCurrentAnnualStatement",value:function(){return 0===this.state.allAnnualStatements.length?null:this.state.allAnnualStatements[this.state.currentYearIndex]}},{key:"setCurrentAnnualStatement",value:function(e){var t=this.state.allAnnualStatements;t[this.state.currentYearIndex]=e,this.setState({allAnnualStatements:t}),this.incrementEditCount()}},{key:"addNewAnnualStatementWithEntry",value:function(e){var t=this.state.allAnnualStatements,n=new M(e.date.year);n.addCategory(e.category),n.addEntryToMonthStatement(e.date.month,e),t.push(n);var a=t.length-1;this.setState({allAnnualStatements:t,currentYearIndex:a,currentMonth:e.date.month}),this.incrementEditCount()}},{key:"handleNoEntriesInMonth",value:function(e){if(0===e.getMonthEntries(this.state.currentMonth).length){var t=this.getAvailableMonths();t.length>0?this.setState({currentMonth:t[0]}):this.setState({currentMonth:1})}}},{key:"getAvailableYears",value:function(){var e=[];return this.state.allAnnualStatements.forEach((function(t){e.push(t.year)})),e.sort()}},{key:"getAvailableMonths",value:function(){var e=[],t=this.getCurrentAnnualStatement();return null==t?null:(t.monthlyStatements.forEach((function(t){t.isStatementEmpty()||e.push(t.month)})),e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Dashboard-body"},r.a.createElement("div",{className:"Dashboard-content"},r.a.createElement("div",{className:"Dashbaord-content-left"},r.a.createElement("div",{className:"Dashboard-header"},r.a.createElement("div",{className:"Dashboard-header-label"},"MFlow")),r.a.createElement("div",{className:"Dashboard-content-left-scrollabe","data-simplebar":!0},r.a.createElement("div",{className:"Dashboard-account-block"},r.a.createElement("div",{className:"Dashboard-user-info ".concat(this.state.isSignedIn?"":"Dashboard-disabled")},r.a.createElement("div",{className:"Dashboard-user-info-texts"},r.a.createElement("div",null,this.state.userName),r.a.createElement("div",null,this.state.userEmail)),r.a.createElement("div",{className:"Dashboard-save-status-text ".concat(this.state.isSaving?"":"Dashboard-disabled")},"Saving to Google Drive..."),r.a.createElement(I.GoogleLogout,{clientId:this.CLIENT_ID,buttonText:"Log out",onLogoutSuccess:this.successLogoutGoogle,render:function(e){return r.a.createElement("button",{onClick:e.onClick,disabled:e.disabled,className:"Dashboard-google-button"},"Log out")}})),r.a.createElement("div",{className:"Dashboard-google-login-wrapper ".concat(this.state.isSignedIn?"Dashboard-disabled":"")},r.a.createElement(I.GoogleLogin,{clientId:this.CLIENT_ID,onSuccess:this.successLoginGoogle,onFailure:this.failureLoginGoogle,cookiePolicy:"single_host_origin",scope:"https://www.googleapis.com/auth/drive.appdata",isSignedIn:!0,render:function(e){return r.a.createElement("button",{onClick:e.onClick,disabled:e.disabled,className:"Dashboard-google-button"},"Log in with Google to save your data!")}}))),r.a.createElement(p,{currentAnnualStatement:this.getCurrentAnnualStatement(),currentMonth:this.state.currentMonth}),r.a.createElement("br",null),r.a.createElement(f,{currentAnnualStatement:this.getCurrentAnnualStatement(),onAddEntry:this.handleNewEntry,onAddCategory:this.handleNewCategory}),r.a.createElement("br",null),r.a.createElement("button",{className:"Dashboard-google-button Dashboard-download-button",onClick:this.handleDownloadData},"Download JSON Data"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"Dashboard-credit"},"Made for and by ",r.a.createElement("a",{href:"https://jaks024.github.io/",target:"_blank",rel:"noopener noreferrer"},"jaks024")," with \u2764\ufe0f"))),r.a.createElement("div",{className:"Dashboard-content-right"},r.a.createElement(A,{currentAnnualStatement:this.getCurrentAnnualStatement(),currentMonth:this.state.currentMonth,onChangeViewYear:this.handleChangeViewYear,onChangeViewMonth:this.handleChangeViewMonth,availableYears:this.getAvailableYears(),availableMonths:this.getAvailableMonths(),onDeleteEntry:this.handleDeleteEntry,onDeleteCategory:this.handleDeleteCategory}))))}}]),n}(r.a.Component);var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-body"},r.a.createElement(x,null)))},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),w()}},[[106,1,2]]]);
//# sourceMappingURL=main.427d808b.chunk.js.map