// Homework 4
// Task 1

class Student {
  constructor(enrolee) {
    this.id = Student.ID++;
    this.isSelfPayment = true;
    Object.assign(this, enrolee);

    Student.listOfStudents.push(this);
    Student.defineTopStudents();
  }

  static ID = 1;
  static listOfStudents = [];
  static defineTopStudents() {
    const students = [...Student.listOfStudents]
      .sort((a, b) => {
        if (a.ratingPoint > b.ratingPoint) {
          return 1;
        }
        if (a.ratingPoint < b.ratingPoint) {
          return -1;
        }
        if (a.schoolPoint > b.ratingPoint) {
          return 1;
        }
        if (a.schoolPoint < b.ratingPoint) {
          return -1;
        }
        return 0;
      })
      .forEach((item, index) => {
        if (index < 5 && item.ratingPoint > 800) {
          item.isSelfPayment = false;
          return;
        }
        item.isSelfPayment = false;
      });
  }
}

for (const enrolee of studentArr) {
  new Student(enrolee);
}
console.log(Student.listOfStudents);

//Task 2
//Реализуйте класс CustomString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class CustomString {
  reverse(string) {
    let result = '';
    for (let i = string.length - 1; i > 0; i--) {
      result += string[i];
    }
    return result;
  }

  ucFirst(string) {
    let result = '';
    for (let i = string.length - 1; i > 0; i--) {
      result += i === 0 ? string[i].toUpperCase() : string[i].toLowerCase();
    }
    return result;
  }

  ucWords(string) {
    let newString;
    for (let i = 0; i < string.length; i++) {
      if (string[i - 1] === ' ' || i === 0) {
        newString += string[i].toUpperCase();
      } else {
        newString += string[i];
      }
    }
    return newString;
  }
}

//Task 3
// Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод checkIsEmail() параметром принимает строку и проверяет, является ли она емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод checkIsDomain для проверки домена, метод checkIsDate для проверки даты и метод checkIsPhone для проверки телефона:

class Validator {
  constructor() {}
  checkIsEmail(string) {
    return string.indexOf('@') !== -1 && string.indexOf('.') !== -1;
  }
  checkIsDomain(string) {
    return string.indexOf('.com') !== -1 || string.indexOf('.net') !== -1;
  }

  // на дату і на телефон валідатор не зроблено
}

var validator = new Validator();

validator.checkIsEmail('vasya.pupkin@gmail.com'); // true
validator.checkIsDomain('google.com'); // true
validator.checkIsDate('30.11.2019'); // true
validator.checkIsPhone('+38 (066) 937-99-92'); // если код страны Украинский, то возвращаем true иначе false
