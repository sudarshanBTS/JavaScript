 
let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function(btn){
  btn.addEventListener('click',function(e){
    const styles = e.currentTarget.classList
    if(styles.contains('decrease')){
        count--;
    }
    else if(styles.contains('decrease')){

    }
    value.textContent = count;
  
    console.log(e.currentTarget.classList);
  })
  
    console.log(btn);
});
