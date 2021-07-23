


function addPerson() {
    console.log('button clicked');
    const person = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        imgURL: document.getElementById('person-url').value,
        id: document.getElementById('person-id').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phone-number').value,
        position: document.getElementById('position').value,
        subject: document.getElementById('subject').value
    }

    // for (let key in person) {
    //     console.log(key.value);
    //     if (key.value === "") {
    //         return;
    //     }
    // }

    console.log('sent person to database');
    firebase.database().ref().push(person);
}