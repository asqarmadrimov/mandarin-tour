var intro = "Mandarin tourga xushkelibsiz!!";
var elP = document.querySelector(".text")

var fistName = "Ismingiz nima?";
var travel = "Sayohat qilishni hohlaysizmi!"
var state = "Qaysi davlatga borishni istaysiz";
var ticket = "Chipta olishga tayyormisiz?"



var alertIntro = alert (intro);
var answerFistName = prompt (fistName).trim();
var answerTravel = prompt (travel).trim();
var answerState = prompt (state).trim();
var answerTicket = prompt (ticket).trim();
var money = Number(prompt("Sizning pulinggiz qancha?").trim());
var amount = 10000;


if (isNaN(money)) {
  elP.textContent = "Iltimos sonkiriting!";
} else {
  if (money >= amount) {
    elP.textContent =`Tarbiklayman ${answerFistName} sizning pulingiz chiptaga yetadi!!. Bizni kuzatib boring rasmiy kanalimiz!`;
   }
   else {
   elP.textContent =`Uzur ${answerFistName} siz yana ozgina pul yig'ishingiz kerak!!. Bizni kuzatib boring rasmiy kanalimiz! `;
  }
}


console.log (`"foydalanuvchi"

Foydalanuvchining ismi; ${answerFistName};
Foydalanuchining hoxishi; ${answerTravel};
Qaysi davlatga borishi; ${answerState};
Foydalanuchining haridi; ${answerTicket};
`)