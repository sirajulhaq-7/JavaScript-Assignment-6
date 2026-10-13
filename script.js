// Employee Role Access Syst
let input = prompt("Enter your role(admin / manager /developer / intern)")
  .trim()
  .toLowerCase();

switch (input) {
  case "admin":
    alert("Full System Access");
    break;

  case "manager":
    alert("Team management access");
    break;

  case "developer":
    alert("Code access");
    break;

  case "Intern":
    alert("Limited access");
    break;

  default:
    alert("Invalid role. Please try again!");
    break;
}

// Online Payment Method Selection
let method = prompt("Choose a payment method(credit/ debit/ upi/ cod)")
  .trim()
  .toLowerCase();
switch (method) {
  case "credit":
    alert("Payment method is credit");
    break;

  case "debit":
    alert("Payment method is debit");
    break;

  case "upi":
    alert("Payment method is upi");
    break;

  case "cod":
    alert("Payment method is cod");
    break;

  default:
    alert("Invalid input. Please try again!");
    break;
}

// Order Status Checker
let Checker = prompt(
  "Enter order status (placed / packed / shipped / delivered / cancelled)",
)
  .trim()
  .toLowerCase();
switch (Checker) {
  case "placed":
    alert("Order is placed");
    break;

  case "packed":
    alert("Order is packed");
    break;

  case "shipped":
    alert("Order is shipped");
    break;

  case "delivered":
    alert("Order is delivered");
    break;

  case "cancelled":
    alert("Order is cancelled");
    break;

  default:
    alert("Invalid input. Please try again");
    break;
}

// Office Working Day Checker
let day = prompt("Enter day name (Monday/ Friday/ Sunday)")
  .trim()
  .toLowerCase();
switch (day) {
  case "monday":
    alert("Working day");
    break;

  case "friday":
    alert("Half day");
    break;

  case "sunday":
    alert("Holiday");
    break;

  default:
    alert("Invalid input. Please try again");
    break;
}
