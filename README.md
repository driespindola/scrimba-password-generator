# Scrimba Password Generator

## Description

This is a project done for [Scrimba](https://scrimba.com/learn/learnjavascript) javascript course. Is the second solo project in the site, module 3.4.

Live site url: [Vercel](https://scrimba-password-generator.vercel.app/)

## Requeriments

### Array to hold all possible chairs

```
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
```

In this case I used strings instead of arrays

### Button to generate 4 random passwords

```
function genPassword() {
  genPassword1()
  genPassword2()
  genPassword3()
  genPassword4()
}
```
```
<div id="button" class="btn"onclick="genPassword()">
            Generate passwords
</div>
```

I used 4 functions to generate 4 different passwords, and called all them in one function.

### Display password options

```
<input type="text" name="" placeholder="Create password" class="password" id="password-1" readonly>
```

```
<input type="text" name="" placeholder="Create password" class="password" id="password-2" readonly>
```

```
<input type="text" name="" placeholder="Create password" class="password" id="password-3" readonly>
```

```
<input type="text" name="" placeholder="Create password" class="password" id="password-4" readonly>
```

### Stretch - Ability to set the password lenght

```
<input type="number" id="input-password" min="4" max="12">´
```

I set a min/max lenght based on what is usually asked in social media.

```
let passwordLength = document.getElementById("input-password").value - 1;
```

```
document.getElementById("password-2").innerHTML = passwordLength;
```

### Stretch - 1-click copy password to clipboard

```
function copyPassword1() {
  let copyText = document.getElementById("password-1");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  let tooltip = document.getElementById("myTooltip1");
  tooltip.innerHTML = "Copied: " + copyText.value;
}
```

```
function copyPassword2() {
  let copyText = document.getElementById("password-2");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  let tooltip = document.getElementById("myTooltip2");
  tooltip.innerHTML = "Copied: " + copyText.value;
} 
```

```
function copyPassword3() {
  let copyText = document.getElementById("password-3");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  let tooltip = document.getElementById("myTooltip3");
  tooltip.innerHTML = "Copied: " + copyText.value;
}
``` 

```
function copyPassword4() {
  let copyText = document.getElementById("password-4");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  let tooltip = document.getElementById("myTooltip4");
  tooltip.innerHTML = "Copied: " + copyText.value;
} 
```

Set four different functions so each display option will have it's own copy button.