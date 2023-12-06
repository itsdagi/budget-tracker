const form = document.querySelector(".add");
let transactions = localStorage.getItem("transactions") !== null ?JSON.parse(localStorage.getItem("transactions")): [];



function addTransaction(){
  const time = new Date();
  const transaction = {
    id: Math.floor(math.random()*100000),
    source: source,
    amount: amount,
    time: `${time.toLocaleTimeString()} ${time.toLocaleDateString()}`
  };
  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

form.addEventListener("submit", event=>{
  event.preventDefault()
  addTransaction(form.source.value, form.amount.value)
})