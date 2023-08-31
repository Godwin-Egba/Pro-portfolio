

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     let navBtn = document.getElementById("myTopnav");
//     if (navBtn.className === "topnav") {
//       navBtn.className += " responsive";
//     } else {
//       navBtn.className = "topnav";
//     }
//   }


let lightOn = document.getElementById('lightOn')
let body = document.getElementById('body')
let carddd = document.getElementById('carddd')


lightOn.addEventListener('click', ()=> {

lightOn.classList.toggle('fa-moon-o')
body.classList.toggle('body')


});



(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('oE1ECYJ1HBnuT5xI8');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_7unk0bi', 'template_azzzqui', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}







