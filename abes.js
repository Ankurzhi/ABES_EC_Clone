
function ABES() {

        document.getElementById("btn").addEventListener("click", function () {

                window.alert('Welcome to home page');
                window.location.href = "index.html";
        });

}

function closePopup() {
        document.getElementById("popupOverlay").style.display = "none";
}
function popup() {

        document.getElementById("popimg").addEventListener("click", function () {


                window.location.href = "Contact_us.html";
        });

}
