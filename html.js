let a = 10;
alert(a);
a = 20;
alert(a);

let ageiPhone = 2007;
alert(ageiPhone);

let nameJs = 'Brendan Eich';
alert(nameJs);

let x = 10;
let y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

let b = 2;
let c = 5;
result = b ** c;
alert(result);

a = 9;
b = 2;
alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt('Сколько вам лет?');
alert(age);

const user = {
    name: 'Katrina',
    age: 30,
    isAdmin: false,
}

user['city of residence'] = 'Ufa';

user.age = 17;

delete user['city of residence'];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

let nameUser = prompt('Как к Вам обращаться?');
alert(`Привет, ${nameUser}!`);