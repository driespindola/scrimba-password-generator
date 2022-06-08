// Creating 4 functions so the button will generate 4 different passwords

function genPassword1() {
  let chars = ["0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  let passwordLength = document.getElementById("input-password").value - 1
  let password = "";
 for (let i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password-1").value = password;
        document.getElementById(
          "password-1").innerHTML = passwordLength;

}

function genPassword2() {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = document.getElementById("input-password").value - 1;
  let password = "";
 for (let i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password-2").value = password;
        document.getElementById(
          "password-2").innerHTML = passwordLength;
}

function genPassword3() {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = document.getElementById("input-password").value - 1;
  let password = "";
 for (let i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password-3").value = password;
        document.getElementById(
          "password-2").innerHTML = passwordLength;
}

function genPassword4() {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = document.getElementById("input-password").value - 1;
  let password = "";
 for (let i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password-4").value = password;
        document.getElementById(
          "password-2").innerHTML = passwordLength;
}

// Function to call all passwords in one button

function genPassword() {
  genPassword1()
  genPassword2()
  genPassword3()
  genPassword4()
}

// Copy each password

function copyPassword1() {
  let copyText = document.getElementById("password-1");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  let tooltip = document.getElementById("myTooltip1");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function copyPassword2() {
  let copyText = document.getElementById("password-2");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  let tooltip = document.getElementById("myTooltip2");
  tooltip.innerHTML = "Copied: " + copyText.value;
} 

function copyPassword3() {
  let copyText = document.getElementById("password-3");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  let tooltip = document.getElementById("myTooltip3");
  tooltip.innerHTML = "Copied: " + copyText.value;
} 

function copyPassword4() {
  let copyText = document.getElementById("password-4");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  let tooltip = document.getElementById("myTooltip4");
  tooltip.innerHTML = "Copied: " + copyText.value;
} 

// Display copied text in a tooltip

function outTooltip1() {
  var tooltip = document.getElementById("myTooltip1");
  tooltip.innerHTML = "Copy to clipboard";
}

function outTooltip2() {
  var tooltip = document.getElementById("myTooltip2");
  tooltip.innerHTML = "Copy to clipboard";
}

function outTooltip3() {
  var tooltip = document.getElementById("myTooltip3");
  tooltip.innerHTML = "Copy to clipboard";
}

function outTooltip4() {
  var tooltip = document.getElementById("myTooltip4");
  tooltip.innerHTML = "Copy to clipboard";
}