// const myList = document.getElementById('myList');
    
//     myList.addEventListener('click', function(event) {
//       if (event.target.tagName === 'LI') {
//         console.log('Clicked on:', event.target.textContent);
//       }
//     });

const btn  = document.querySelector("#mybtn");

function onBtnclick(){
  alert("HI there !")
  alert("you have to wait for two seconds for your suprise !")

  console.log("hii");
setTimeout(() => {
  alert("TADA ! HERE IS YOUR KIND WORDS ")
    console.log("YOU ARE VERY BEAUTIFUL !!! ");
}, 5000);

console.log("hello");
}

btn.addEventListener("click", onBtnclick);