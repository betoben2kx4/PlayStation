function load() {
    document.getElementById('editdate1').innerHTML = navigator.userAgent
    document.getElementById('editdate').innerHTML = 'Last Modified: ' + document.lastModified

    var chk = screen.width;
    if(chk < 500) {
        document.getElementById('warn').innerHTML = '<b>Your Screen Width is ' + chk + 'px :( This page is made for atleast 500px device!</b>'
    }
}
function show() {
    var check = document.getElementById('PS3').style;
    if(check.display == 'none') {
        document.getElementById('PS3').style.display = ''
        document.getElementById('damn').style.display = 'none'
        document.getElementById('PS4').style.display = 'none'
    }else {
        document.getElementById('PS3').style.display = 'none'
        document.getElementById('damn').style.display = ''
    }
}
function show1() {
    var check = document.getElementById('PS4').style;
    if(check.display == 'none') {
        document.getElementById('PS4').style.display = ''
        document.getElementById('damn').style.display = 'none'
        document.getElementById('PS3').style.display = 'none'
    }else {
        document.getElementById('PS4').style.display = 'none'
        document.getElementById('damn').style.display = ''
    }
}