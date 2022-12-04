// Вам дана заготовка и результат, который вы должны получить. 
//Ваша задача — написать код, который будет преобразовывать XML в 
//JS-объект и выводить его в консоль.

//list: [
//    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//  ]

const parser = new DOMParser();

const xmlString = `
<list>
 <student1>
    <name1 lang1="en">
      <first1>Ivan</first1>
      <second1>Ivanov</second1>
    </name1>
    <prof1>Teacher</prof1>
    <age1>35</age1>
  </student1>
  
   <student2>
     <name2 lang2="ru">
       <first2>Петр</first2>
       <second2>Петров</second2>
     </name2>
     <age2>58</age2>
     <prof2>driver</prof2>
   </student2>
 </list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const student1Node = listNode.querySelector("student1");
const name1Node = student1Node.querySelector("name1");
const prof1Node = student1Node.querySelector("prof1");
const age1Node = student1Node.querySelector("age1");
const first1Node = name1Node.querySelector("first1");
const second1Node = name1Node.querySelector("second1");

const student2Node = listNode.querySelector("student2");
const name2Node = student2Node.querySelector("name2");
const prof2Node = student2Node.querySelector("prof2");
const age2Node = student2Node.querySelector("age2");
const first2Node = name2Node.querySelector("first2");
const second2Node = name2Node.querySelector("second2");

const lang1Attr = name1Node.getAttribute("lang1");
const lang2Attr = name2Node.getAttribute("lang2");



const resuln1 = {
  name : first1Node.textContent +' ' +second1Node.textContent,
  age : Number(age1Node.textContent),
  prof : prof1Node.textContent,
  lang : lang1Attr,
};
console.log('resuln', resuln1);

const resuln2 = {
  name : first2Node.textContent +' ' +second2Node.textContent,
  age : Number(age2Node.textContent),
  prof : prof2Node.textContent,
  lang : lang2Attr,
};
console.log('resuln', resuln2);