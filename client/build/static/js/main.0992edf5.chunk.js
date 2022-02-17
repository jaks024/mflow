(this.webpackJsonpmflow=this.webpackJsonpmflow||[]).push([[0],{103:function(e,t,n){e.exports=n(171)},108:function(e,t,n){},109:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},169:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(99),o=n.n(l),i=(n(108),n(102)),s=(n(109),n(60)),c=n.n(s),u=n(100),m=n(4),d=n(5),h=n(12),p=n(11),g=(n(111),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"getMonthTotalIncome",value:function(){return null!==this.props.currentAnnualStatement?this.props.currentAnnualStatement.getMonthTotalIncome(this.props.currentMonth).toFixed(2):0}},{key:"getMonthTotalExpense",value:function(){return null!==this.props.currentAnnualStatement?this.props.currentAnnualStatement.getMonthTotalExpense(this.props.currentMonth).toFixed(2):0}},{key:"getAnnualTotalIncome",value:function(){return null!==this.props.currentAnnualStatement?this.props.currentAnnualStatement.totalIncome.toFixed(2):0}},{key:"getAnnualTotalExpense",value:function(){return null!==this.props.currentAnnualStatement?this.props.currentAnnualStatement.totalExpense.toFixed(2):0}},{key:"render",value:function(){return r.a.createElement("div",{className:"SummaryPage-body"},r.a.createElement("div",{className:"SummaryPage-header-label SummaryPage-main-header-label"},"Summary"),r.a.createElement("div",null,r.a.createElement("div",{className:"SummaryPage-header-label"},"This Month"),r.a.createElement("div",{className:"SummaryPage-income-expense-block"},r.a.createElement("div",{className:"SummaryPage-income-expense-line"},r.a.createElement("span",{className:"income-indicator"},"\u25b2"),"$",this.getMonthTotalIncome()),r.a.createElement("div",{className:"SummaryPage-income-expense-line"},r.a.createElement("span",{className:"expense-indicator"},"\u25bc"),"$",this.getMonthTotalExpense()))),r.a.createElement("div",null,r.a.createElement("div",{className:"SummaryPage-header-label"},"This Year"),r.a.createElement("div",{className:"SummaryPage-income-expense-block"},r.a.createElement("div",{className:"SummaryPage-income-expense-line"},r.a.createElement("span",{className:"income-indicator"},"\u25b2"),"$",this.getAnnualTotalIncome()),r.a.createElement("div",{className:"SummaryPage-income-expense-line"},r.a.createElement("span",{className:"expense-indicator"},"\u25bc"),"$",this.getAnnualTotalExpense()))))}}]),n}(r.a.Component)),v=(n(112),n(113),Object(d.a)((function e(t,n,a,r,l,o,i){Object(m.a)(this,e),this.id=t,this.date=n,this.income=a,this.expense=r,this.category=l,this.location=o,this.description=i}))),f=function(){function e(t,n,a){Object(m.a)(this,e),this.year=t,this.month=+n,this.day=+a}return Object(d.a)(e,[{key:"equal",value:function(e){return this.year===e.year&&this.month===e.month&&this.day===e.day}}]),e}(),y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).onAddEntry=function(){var e=a.state.inputDate.split("/");console.log(e),a.props.onAddEntry(new v(a.state.idCount,new f(e[0],e[1],e[2]),a.state.inputIncome,a.state.inputExpense,a.state.inputCategory,a.state.inputLocation,a.state.inputDescription)),a.setState({idCount:a.state.idCount+1}),console.log(a.state.inputIncome)},a.onAddCategory=function(){a.state.inputNewCategory.length>0&&a.props.onAddCategory(a.state.inputNewCategory)},a.state={idCount:0,inputDate:"2022/1/1",inputCategory:"abc",inputLocation:"soeb",inputIncome:"123",inputExpense:"423",inputDescription:"dsafsafsd",inputNewCategory:""},a}return Object(d.a)(n,[{key:"timeNow",value:function(){var e=new f;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+(e.getHours()+":"+e.getMinutes()+":"+e.getSeconds())}},{key:"updateInput",value:function(e,t){var n=t.target.value;0===e?this.setState({inputDate:n}):1===e?this.setState({inputCategory:n}):2===e?this.setState({inputLocation:n}):3===e?this.setState({inputIncome:n}):4===e?this.setState({inputExpense:n}):5===e?this.setState({inputDescription:n}):6===e&&this.setState({inputNewCategory:n})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"AddPage-body"},r.a.createElement("div",{className:"AddPage-header-label"},"Add Entry"),r.a.createElement("div",{className:"AddPage-form"},r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("div",{className:"AddPage-field-label"},"Date"),r.a.createElement("input",{className:"AddPage-field-input",inputMode:"text",value:this.state.inputDate,onChange:function(t){return e.updateInput(0,t)}})),r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("div",{className:"AddPage-field-label"},"Category"),r.a.createElement("input",{className:"AddPage-field-input",inputMode:"text",value:this.state.inputCategory,onChange:function(t){return e.updateInput(1,t)}})),r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("div",{className:"AddPage-field-label"},"Location"),r.a.createElement("input",{className:"AddPage-field-input",inputMode:"text",value:this.state.inputLocation,onChange:function(t){return e.updateInput(2,t)}})),r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("div",{className:"AddPage-field-label"},"Income"),r.a.createElement("input",{className:"AddPage-field-input",inputMode:"numeric",value:this.state.inputIncome,onChange:function(t){return e.updateInput(3,t)}})),r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("div",{className:"AddPage-field-label"},"Expense"),r.a.createElement("input",{className:"AddPage-field-input",inputMode:"numeric",value:this.state.inputExpense,onChange:function(t){return e.updateInput(4,t)}})),r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("div",{className:"AddPage-field-label"},"Description"),r.a.createElement("input",{className:"AddPage-field-input",inputMode:"text",value:this.state.inputDescription,onChange:function(t){return e.updateInput(5,t)}})),r.a.createElement("br",null),r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("button",{className:"AddPage-form-btn",onClick:function(){return e.onAddEntry()}},"Add"),r.a.createElement("button",{className:"AddPage-form-btn"},"Clear"))),r.a.createElement("br",null),r.a.createElement("div",{className:"AddPage-header-label"},"Add Category"),r.a.createElement("div",{className:"AddPage-form"},r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("div",{className:"AddPage-field-label"},"Category"),r.a.createElement("input",{className:"AddPage-field-input",inputMode:"text",value:this.state.inputNewCategory,onChange:function(t){return e.updateInput(6,t)}})),r.a.createElement("br",null),r.a.createElement("div",{className:"AddPage-field-block"},r.a.createElement("button",{className:"AddPage-form-btn",onClick:function(){return e.onAddCategory()}},"Add"),r.a.createElement("button",{className:"AddPage-form-btn"},"Clear"))))}}]),n}(r.a.Component),E=(n(114),n(98),n(97),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.isDate?"grid-cell grid-cell-date":"grid-cell"},this.props.value)}}],[{key:"newCellId",value:function(){return this.cellId++,this.cellId}}]),n}(r.a.Component));E.cellId=0;var b=E,A=(n(169),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"renderCells",value:function(e){return e.map((function(e,t){return null===e?r.a.createElement(b,{key:b.newCellId()+"-cell",value:null,isDate:!1}):0===t?r.a.createElement(b,{key:b.newCellId()+"-cell",value:e,isDate:!0}):r.a.createElement(b,{key:b.newCellId()+"-cell",value:e,isDate:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.isHeaderRow?"grid-row grid-header-row":"grid-row"},this.renderCells(this.props.rowContent))}}],[{key:"newRowId",value:function(){return this.rowId++,this.rowId}}]),n}(r.a.Component));A.rowId=0;var S=A,N=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onChangeViewYear=function(t){var n=t.target.value;e.props.onChangeViewYear(n)},e.onChangeViewMonth=function(t){var n=t.target.value;console.log("Changed: "+n),e.props.onChangeViewMonth(n)},e}return Object(d.a)(n,[{key:"renderGrid",value:function(e){var t=this;if(null!==e){for(var n=e.categories,a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=[["Dates"]],o=0;o<31;o++)l.push([a[this.props.currentMonth-1]+" "+(o+1)+", "+this.props.currentAnnualStatement.year]);return l.map((function(e,a){if("Dates"===e[0]){var l=[e];return n.forEach((function(e){l.push([e])})),r.a.createElement(S,{key:S.newRowId()+"-row",rowContent:l,isHeaderRow:!0})}var o=t.props.currentAnnualStatement.getMonthEntries(t.props.currentMonth),i=[e];return n.forEach((function(e){i.push([]),o.forEach((function(n){n.category===e&&n.date.day===+a&&i[i.length-1].push(t.renderEntry(n))}))})),r.a.createElement(S,{key:S.newRowId()+"-row",rowContent:i,isHeaderRow:!1})}))}}},{key:"renderAllEntries",value:function(e){var t=this;return e.map((function(e){return t.renderEntry(e)}))}},{key:"renderEntry",value:function(e){return r.a.createElement("div",{key:e.id,className:"HistoryPage-entry"},r.a.createElement("div",{className:"HistoryPage-entry-main"},r.a.createElement("div",null,e.location),r.a.createElement("div",null,r.a.createElement("span",{className:"income-indicator"},"\u25b2"),"$",e.income),r.a.createElement("div",null,r.a.createElement("span",{className:"expense-indicator"},"\u25bc"),"$",e.expense)),r.a.createElement("div",{className:"HistoryPage-entry-collapse"},e.description))}},{key:"renderSelectOption",value:function(e){return null===e?null:e.map((function(e){return r.a.createElement("option",{key:e+"-view-option",value:e},e)}))}},{key:"getCurrentYear",value:function(){return null!==this.props.currentAnnualStatement?this.props.currentAnnualStatement.year:""}},{key:"getCurrentMonth",value:function(){var e=this;if(console.log("current month: "+this.props.currentMonth),null!==this.props.availableMonths){var t=this.props.availableMonths[0];return this.props.availableMonths.forEach((function(n){n!==e.props.currentMonth||(t=e.props.currentMonth)})),t}return""}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"HistoryPage-body"},r.a.createElement("div",{className:"HistoryPage-header-content"},r.a.createElement("div",{className:"HistoryPage-header-label"},"History"),r.a.createElement("div",{className:"HistoryPage-select-label"},"Year"),r.a.createElement("select",{className:"HistoryPage-header-select",value:this.getCurrentYear(),onChange:function(t){return e.onChangeViewYear(t)}},this.renderSelectOption(this.props.availableYears)),r.a.createElement("div",{className:"HistoryPage-select-label"},"Month"),r.a.createElement("select",{className:"HistoryPage-header-select",value:this.getCurrentMonth(),onChange:function(t){return e.onChangeViewMonth(t)}},this.renderSelectOption(this.props.availableMonths))),r.a.createElement("div",{className:"HistoryPage-content","data-simplebar":!0,"data-simplebar-auto-hide":"false"},r.a.createElement("div",{className:"HistoryPage-grid"},this.renderGrid(this.props.currentAnnualStatement))))}}]),n}(r.a.Component),C=function(){function e(t,n){Object(m.a)(this,e),this.id=t,this.month=n,this.totalIncome=0,this.totalExpense=0,this.monthlyEntires=[]}return Object(d.a)(e,[{key:"calculateTotal",value:function(){var e=this;this.totalIncome=0,this.totalExpense=0,this.monthlyEntires.forEach((function(t){e.totalIncome+=+t.income,e.totalExpense+=+t.expense}))}},{key:"addEntry",value:function(e){this.monthlyEntires.push(e),this.calculateTotal()}},{key:"isStatementEmpty",value:function(){return 0===this.monthlyEntires.length}}]),e}(),k=function(){function e(t){Object(m.a)(this,e),this.year=t,this.totalIncome=0,this.totalExpense=0,this.monthlyStatements=this.initEmptyMonthStatement(),this.categories=[]}return Object(d.a)(e,[{key:"initEmptyMonthStatement",value:function(){for(var e=new Array(12),t=0;t<e.length;t++)e[t]=new C(t,t+1);return e}},{key:"calculateTotal",value:function(){var e=this;this.totalIncome=0,this.totalExpense=0,this.monthlyStatements.forEach((function(t){e.totalIncome+=+t.totalIncome,e.totalExpense+=+t.totalExpense}))}},{key:"replaceMonthlyStatement",value:function(e){this.monthlyStatements[e.month-1]=e,this.calculateTotal()}},{key:"addEntryToMonthStatement",value:function(e,t){null!=this.monthlyStatements[e-1]&&this.monthlyStatements[e-1].addEntry(t),this.calculateTotal()}},{key:"addCategory",value:function(e){return console.log(this.categories),!(this.categories.length>0&&this.categories.includes(e))&&(this.categories.push(e),!0)}},{key:"getMonthTotalIncome",value:function(e){return this.monthlyStatements[e-1].totalIncome}},{key:"getMonthTotalExpense",value:function(e){return this.monthlyStatements[e-1].totalExpense}},{key:"getMonthEntries",value:function(e){return this.monthlyStatements[e-1].monthlyEntires}}]),e}(),w=(n(170),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).CLIENT_ID="91993730445-4jjm5pf1kvja9m8r6b66uarvnqmdir1b.apps.googleusercontent.com",a.handleNewEntry=function(e){if(null!==a.getCurrentAnnualStatement()){var t=a.getCurrentAnnualStatement(),n=a.state.currentYearIndex;if(e.date.year!==t.year){var r=!0;if(a.state.allAnnualStatements.forEach((function(t,a){t.year===e.date.year&&(r=!1,n=a)})),r)return void a.addNewAnnualStatementWithEntry(e)}var l=a.state.allAnnualStatements;l[n].addCategory(e.category),l[n].addEntryToMonthStatement(e.date.month,e),a.setState({allAnnualStatements:l,currentYearIndex:n,currentMonth:e.date.month})}else a.addNewAnnualStatementWithEntry(e)},a.handleNewCategory=function(e){var t=a.getCurrentAnnualStatement();t.addCategory(e)&&a.setCurrentAnnualStatement(t)},a.handleChangeViewYear=function(e){for(var t=a.state.allAnnualStatements,n=0;n<t.length;++n)if(t[n].year===e){var r=-1;return t[n].monthlyStatements.forEach((function(e){e.isStatementEmpty()||(r=e.month)})),void a.setState({currentYearIndex:n,currentMonth:r})}},a.handleChangeViewMonth=function(e){console.log(e),a.setState({currentMonth:e})},a.handleLogin=function(){var e=Object(u.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/auth/google",{method:"POST",body:JSON.stringify({token:t.tokenId}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={currentMonth:1,currentYearIndex:0,allAnnualStatements:[]},a}return Object(d.a)(n,[{key:"getCurrentAnnualStatement",value:function(){return 0===this.state.allAnnualStatements.length?null:(console.log(this.state.currentYearIndex),this.state.allAnnualStatements[this.state.currentYearIndex])}},{key:"setCurrentAnnualStatement",value:function(e){var t=this.state.allAnnualStatements;t[this.state.currentYearIndex]=e,this.setState({allAnnualStatements:t})}},{key:"addNewAnnualStatementWithEntry",value:function(e){var t=this.state.allAnnualStatements,n=new k(e.date.year);n.addCategory(e.category),n.addEntryToMonthStatement(e.date.month,e),t.push(n);var a=t.length-1;this.setState({allAnnualStatements:t,currentYearIndex:a,currentMonth:e.date.month}),console.log(t)}},{key:"getAvailableYears",value:function(){var e=[];return this.state.allAnnualStatements.forEach((function(t){console.log(t),e.push(t.year)})),console.log(e),e}},{key:"getAvailableMonths",value:function(){var e=[],t=this.getCurrentAnnualStatement();return null==t?null:(t.monthlyStatements.forEach((function(t){t.isStatementEmpty()||e.push(t.month)})),console.log(e),e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Dashboard-body"},r.a.createElement("div",{className:"Dashboard-content"},r.a.createElement("div",{className:"Dashbaord-content-left"},r.a.createElement("div",{className:"Dashboard-header"},r.a.createElement("div",{className:"Dashboard-header-label"},"MFlow")),r.a.createElement("div",{className:"Dashboard-content-left-scrollabe","data-simplebar":!0},r.a.createElement(g,{currentAnnualStatement:this.getCurrentAnnualStatement(),currentMonth:this.state.currentMonth}),r.a.createElement("br",null),r.a.createElement(y,{currentAnnualStatement:this.getCurrentAnnualStatement(),onAddEntry:this.handleNewEntry,onAddCategory:this.handleNewCategory}))),r.a.createElement("div",{className:"Dashboard-content-right"},r.a.createElement(N,{currentAnnualStatement:this.getCurrentAnnualStatement(),currentMonth:this.state.currentMonth,onChangeViewYear:this.handleChangeViewYear,onChangeViewMonth:this.handleChangeViewMonth,availableYears:this.getAvailableYears(),availableMonths:this.getAvailableMonths()}))))}}]),n}(r.a.Component));var M=function(){var e=r.a.useState(null),t=Object(i.a)(e,2),n=t[0],a=t[1];return r.a.useEffect((function(){fetch("/api").then((function(e){return e.json()})).then((function(e){return a(e.message)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("p",null,n||"Loading..."),r.a.createElement("div",{className:"App-body"},r.a.createElement(w,null)))},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),l(e),o(e)}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),P()}},[[103,1,2]]]);
//# sourceMappingURL=main.0992edf5.chunk.js.map