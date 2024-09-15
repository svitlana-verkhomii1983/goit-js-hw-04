                        // Додаємо методи changeUsername, updatePlayTime та getInfo для роботи з властивостями об'єкта profile
const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {  // цей метод змінює значення властивості username на нове ім'я, яке передається як аргумент newName
    this.username = newName;
  },

  updatePlayTime(hours) { // цей метод додає до властивості playTime значення hours
    this.playTime += hours;
  },

  getInfo() { // цей метод повертає рядок у форматі <Username> has <amount> active hours!
    return `${this.username} has ${this.playTime} active hours!`;
  }
};

// Перевірка коректності роботи методів
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"