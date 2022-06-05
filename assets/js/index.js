const span = document.querySelector('#landing > p span'), // Output Display
      ch = new Date().getHours(); // Current Hour
;

span.innerText = "Boa noite!";
if (ch >= 0 && ch < 12) span.innerText = "Bom dia!";
if (ch >= 12 && ch < 18) span.innerText = "Boa tarde!";
