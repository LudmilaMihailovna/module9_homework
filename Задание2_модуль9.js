// Задание 2.
// Вам дана заготовка и результат, который вы должны получить. 
//Ваша задача — написать код, который будет преобразовывать JSON в 
//JS-объект и выводить его в консоль.
//   list: [
//     { name: 'Petr', age: 20, prof: 'mechanic' },
//     { name: 'Vova', age: 60, prof: 'pilot' },
//   ]

const jsonString = `
{
 "list": {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic",
   "name1": "Vova",
   "age1": "60",
   "prof1": "pilot"
  }
}
`;

const data = JSON.parse(jsonString);
const list = data.list;

const result = {
  name : list.name,
  age : Number(list.age),
  prof : list.prof,
  name1 : list.name1,
  age1 : Number(list.age1),
  prof1 : list.prof1,
};

console.log('result', result)