function generatePassword() {
    const length = document.getElementById("length").value;
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*_+-=|?";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    document.getElementById("password").value = password;
  }
  
  function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // Mobile support
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  }
  