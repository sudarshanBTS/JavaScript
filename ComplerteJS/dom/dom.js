changeContent = () => {
    document.getElementById('heading').innerHTML = "Awesome";

    document.getElementsByClassName('para').innerText = "Hehehe";
    document.querySelector('#heading').innerHTML = "Boo00m";
    document.querySelector('.para').innerHTML = "Boo00m";
}

// const thirdWay = document.getElementById('thirdWay');
// thirdWay.onclick = function() {
    //   alert("Welcome to the third Function");
    // }
    
const thirdWay = document.querySelector('#thirdWay');
thirdWay.addEventListener('click',() => {

})
