
function ABES() {
    // This runs when the function is called
    alert('Welcome to home page');
    window.location.href = "index.html";
}

// Attach once, not inside another listener
document.getElementById("btn").onclick = ABES;


function closePopup() {
        document.getElementById("popupOverlay").style.display = "none";
}
function popup() {

        document.getElementById("popimg").addEventListener("click", function () {


                window.location.href = "Contact_us.html";
        });

}

function pop_up() {
    // This runs when the function is called
   
    window.location.href = "contact_us.html";
}

// Attach once, not inside another listener
document.getElementById("pop_up").onclick = ABES;




  // Import the functions you need from the SDKs you need






