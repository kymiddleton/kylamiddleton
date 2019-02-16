/*=== MODAL PROJECT 1 ===*/

//Get the modal
const modal = document.getElementById("volunteerModal");

//Button to open modal
const btn = document.getElementById("volunteerBtn");

//Button <span> element to close modal
const span = document.getElementsByClassName("close")[0];

//Button to cancel out of modal
const cancel = document.getElementById("cancel-btn-volunteer");

//Event Listeners
cancel.onclick = function () {
    modal.style.display = "none";
}

//On click...open modal
btn.onclick = function () {
    modal.style.display = "block";
}

//On click of <span> (x) close modal
span.onclick = function () {
    modal.style.display = "none";
}

//On click....outside of modal...close window
window.onclick = function (event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}


/*=== PROJECT 2 ===*/

//Get the modal
const packModal = document.getElementById('packModal');

//Button to open modal
const packBtn = document.getElementById('packBtn');

//Button <span> element to close modal
const packSpan = document.getElementsByClassName('close')[0];

//Button to cancel out of modal
const packCancel = document.getElementById('cancel-btn-pack');

//Event Listeners
packCancel.onclick = function () {
    packModal.style.display = "none"
}

//On click...open modal
packBtn.onclick = function () {
    modal.style.display = "block";
}

//On click of <span> (x) close modal
span2.onclick = function () {
    modal.style.display = "none";
}

//On click....outside of modal...close window
window.onclick = function (event) {
    if(event.target === modal2) {
        modal.style.display = "none";
    }
}


        // Jeopardy
        var jModal = document.getElementById('jeopardyModal');
        var jBtn = document.getElementById("jeopardyBtn");
        var jSpan = document.getElementById("jeopardyClose");
        var jcancel = document.getElementById("jeopardyCancel");
        jcancel.onclick = function () {
            jModal.style.display = "none"
        }
        jBtn.onclick = function () {
            jModal.style.display = "block";
        }
        jSpan.onclick = function () {
            jModal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == jModal) {
                jModal.style.display = "none";
            }
        }


        // League of your imagination
        var lModal = document.getElementById('leagueModal');
        var lBtn = document.getElementById("leagueBtn");
        var lSpan = document.getElementById("leagueClose");
        var lcancel = document.getElementById("leagueCancel");
        lcancel.onclick = function () {
            lModal.style.display = "none"
        }
        lBtn.onclick = function () {
            lModal.style.display = "block";
        }
        lSpan.onclick = function () {
            lModal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == lModal) {
                lModal.style.display = "none";
            }
        }
        // Restaurant Guide 
        var rModal = document.getElementById('restModal');
        var rBtn = document.getElementById("restBtn");
        var rSpan = document.getElementById("restClose");
        var rcancel = document.getElementById("restCancel");
        rcancel.onclick = function () {
            rModal.style.display = "none"
        }
        rBtn.onclick = function () {
            rModal.style.display = "block";
        }
        rSpan.onclick = function () {
            rModal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == lModal) {
                rModal.style.display = "none";
            }
        }
        // Waka Tata Flame 
        var jModal = document.getElementById('wtfModal');
        var jBtn = document.getElementById("wtfBtn");
        var jSpan = document.getElementById("wtfClose");
        var jcancel = document.getElementById("wtfCancel");
        jcancel.onclick = function () {
            jModal.style.display = "none"
        }
        jBtn.onclick = function () {
            jModal.style.display = "block";
        }
        jSpan.onclick = function () {
            jModal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == jModal) {
                jModal.style.display = "none";
            }
        }
        // Beat.box
        var lModal = document.getElementById('bbModal');
        var lBtn = document.getElementById("bbBtn");
        var lSpan = document.getElementById("bbClose");
        var lcancel = document.getElementById("bbCancel");
        lcancel.onclick = function () {
            lModal.style.display = "none"
        }
        lBtn.onclick = function () {
            lModal.style.display = "block";
        }
        lSpan.onclick = function () {
            lModal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == lModal) {
                lModal.style.display = "none";
            }
        }        