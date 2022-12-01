function sendMessage() {
    var email = document.getElementById("email").value;
    alert('Thank you for contacting me '+email);
}

function sendMessage() {
    var containerDiv = document.getElementById("alert");
    containerDiv.innerHTML = "";

    var email = document.getElementById("email").value;
    var html = `<div class="alert alert-warning" role="alert">
                  Thank you for contacting me ${email}
                </div>`;

    containerDiv.insertAdjacentHTML('beforeend', html);
    console.log(html);
}