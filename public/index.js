


// const btn = document.querySelector("button"); // Get the button from the page
// // Detect clicks on the button
// if (btn) {
//   btn.onclick = function() {
//     // The JS works in conjunction with the 'dipped' code in style.css
//     btn.classList.toggle("dipped");
//   };
// }

function displayPerson() {
    console.log("displayed person");
    const firstName = document.getElementById('first-name-input').value;
    const lastName = document.getElementById('last-name-input').value;
    const id = document.getElementById('id-input').value;

    const messagesRef = firebase.database().ref();

    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);

        for (let key in data) {
            if ((firstName === data[key].firstName && lastName === data[key].lastName) || id === data[key].id) {
                console.log('found person!');
                const cardContainer = document.getElementById('card-container');
                cardContainer.classList.remove('hidden');
            }
            else {
                
            }
        }
    })
}


