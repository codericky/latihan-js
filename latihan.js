// GET https://example.com/search?keyword=great-white

app.get('/search', (req, res) => {
    console.log(req.query.keyword) // "great-white"
  })












// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person('Lydia', 'Hallie');
// const sarah = Person('Sarah', 'Smith');

// console.log(lydia);
// console.log(sarah);

// let getName = function(hobby1, hobby2) {
//     console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
// }

// let user = {
//   name: 'Tapas',
//   address: 'Bangalore'  
// };

// let hobbies = ['Swimming', 'Blogging'];

// getName.call(user, hobbies[0], hobbies[1]);


// const matkul = ["Design Grafis", "Programming", "Networking", 
// "Linux", "Entreprenur", "Aqidah Bisnis"];

// for (angka=0; angka<matkul.length; angka++){
//   console.log("Saya akan belajar " + matkul[angka])
//   }

//   CARBON.NOW.SH

// const buttonsContainer = document.getElementById("buttonsContainer");

// for (var i = 0; i < 5; i++) {
//   const button = document.createElement("button");
//   button.innerText = i;
//   button.addEventListener("click", function() {
//     console.log(i)
//   })
//   buttonsContainer.appendChild(button);
// }

// Answer
// const matkul = ["Design Grafis", "Programming", "Networking", "Linux", "Entreprenur"]

// let angka = 0 
// while(angka < 2){
// console.log("Saya akan belajar "+ matkul[angka]) 
// angka++;}


