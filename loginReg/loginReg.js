function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
        windows.localStorage.setItem('name', name.value);
        windows.localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
}

function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}