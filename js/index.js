// Assistant Tab

let count = 0;

// Calculator Section

const calculateBtn = document
  .getElementById("calculate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const income = valueCollector("income");
    const software = valueCollector("software");
    const courses = valueCollector("courses");
    const internet = valueCollector("internet");

    

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    // Error Condition
   
    if(income <= 0 || isNaN(income)){
        classRemove('income-error');
        return;
    }else if(software < 0 || isNaN(software)){
        classAdd('income-error');
        classRemove('software-error');
        return;
    }else if(courses < 0 || isNaN(courses)){
        classAdd('software-error');
        classRemove('courses-error');
        return;
    }else if(internet < 0 || isNaN(internet)){
        classAdd('courses-error');
        classRemove('internet-error');
        return;
    }else{
        classAdd('income-error');
        classAdd('software-error');
        classAdd('courses-error');
        classAdd('internet-error');
    }

    if (income < totalExpenses) {
        classRemove("logic-error");
        return;
      }
  

    count++;

    document.getElementById("total-expenses").innerText =
      totalExpenses.toFixed(2);
    document.getElementById("balance").innerText = balance.toFixed(2);

    classRemove("results");

    // Expense History

    const date = new Date();
    const specificDate = date.toLocaleDateString("en-GB");

    const div = document.createElement("div");
    div.classList.add(
      "bg-white",
      "p-3",
      "rounded-md",
      "shadow-sm",
      "border-l-2",
      "border-yellow-500"
    );
    div.innerHTML = `<h5 class="text-md font-bold text-emerald-500">Serial-${count}</h5>
    <p class="text-xs text-indigo-500">🗓️ ${specificDate}</p>
    <ul id="li-list">
        <li><span class="text-fuchsia-500">Balance:</span>💲${balance}</li>
        <li><span class="text-fuchsia-500">Expenses:</span>💲${totalExpenses}</li>
    </ul> `;

    const historyList = document.getElementById("history-list");
    historyList.insertBefore(div, historyList.firstChild);


  });

//   Savings Section

const savingsBtn = document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    const income = valueCollector("income");
    const software = valueCollector("software");
    const courses = valueCollector("courses");
    const internet = valueCollector("internet");
    const savingsPercentage = valueCollector("savings-Percentage");

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savings = (balance * savingsPercentage) / 100;
    const remainingBalance = balance - savings;

    // Error Condition
    if (remainingBalance <= savings) {
      classAdd("results");
      classRemove("logic-error2");
      return;
    }else if(savingsPercentage < 0){
        classRemove('savings-error');
        return
    }else{
        classAdd('savings-error');
    }

    document.getElementById("savings-amount").innerText = savings.toFixed(2);
    document.getElementById("remaining-balance").innerText =
      remainingBalance.toFixed(2);


      // Expense History

    const date = new Date();
    const specificDate = date.toLocaleDateString("en-GB");

    const li = document.createElement("li");
    li.innerHTML =`
    <li><span class="text-fuchsia-500">Savings</span>💲${savings}</li>
    <li><span class="text-fuchsia-500">Remaining Bal</span>💲${remainingBalance}</li>
    `

    const historyList = document.getElementById("li-list");
    historyList.appendChild(li);

  });

//   Assistant Tab

const assistantTab = document
  .getElementById("assistant-tab")
  .addEventListener("click", function () {
    document
      .getElementById("assistant-tab")
      .classList.add(
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",
        "text-white"
      );

    document
      .getElementById("history-tab")
      .classList.remove(
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",
        "text-white",
        "duration-200"
      );

    classRemove("expense-form");
    classAdd("results");
    classAdd("history-section");
  });

// History Tab

const historyTab = document
  .getElementById("history-tab")
  .addEventListener("click", function () {
    document
      .getElementById("history-tab")
      .classList.add(
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",
        "text-white"
      );

    document
      .getElementById("assistant-tab")
      .classList.remove(
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",
        "text-white",
        "duration-200"
      );

    document.getElementById("assistant-tab").classList.add("text-gray-600");

    const totalExpenses = valueCollector('total-expenses')
    const balance = valueCollector('balance');
      if(totalExpenses >= 0 || balance > 0){
        classRemove("results");
      }

    classAdd("expense-form");
    classRemove("history-section");
    classAdd("logic-error");
    classAdd("logic-error2");
  });



//   live validation 

document.getElementById('income').addEventListener('input',function(){
    const valueChecker = valueCollector('income')
    if(valueChecker <= 0){
        classRemove('income-error');
        return
    }else{
        classAdd('income-error');
    }
})


// for software 

document.getElementById('software').addEventListener('input',function(){
    const valueChecker = valueCollector('software')
    if(valueChecker < 0){
        classRemove('software-error');
        return
    }else{
        classAdd('software-error');
    }
})


// for courses 

document.getElementById('courses').addEventListener('input',function(){
    const valueChecker = valueCollector('courses')
    if(valueChecker < 0){
        classRemove('courses-error');
        return
    }else{
        classAdd('courses-error');
    }
})


// for internet

document.getElementById('internet').addEventListener('input',function(){
    const valueChecker = valueCollector('internet')
    if(valueChecker < 0){
        classRemove('internet-error');
        return
    }else{
        classAdd('internet-error');
    }
})


// for savings 
document.getElementById('savings-Percentage').addEventListener('input',function(){
    const valueChecker = valueCollector('savings-Percentage')
    if(valueChecker < 0){
        classRemove('savings-error');
        return
    }else{
        classAdd('savings-error');
    }
})