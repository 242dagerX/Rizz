const question_text = document.getElementById("question-text");
const yes_btn = document.getElementById("yes-btn");
const no_btn = document.getElementById("no-btn");

const img1 = document.getElementById("img1l1");
const img2 = document.getElementById("img2l1");
const img3 = document.getElementById("img3l1");
const img4 = document.getElementById("img4l1");
const img5 = document.getElementById("img5l1");

const img6 = document.getElementById("img6l2");
const img7 = document.getElementById("img7l2");

const img8 = document.getElementById("img8l3");
const img9 = document.getElementById("img9l3");

const img10 = document.getElementById("img10l4");
const img11 = document.getElementById("img11l4");
const img12 = document.getElementById("img12l4");
const img13 = document.getElementById("img13l4");
const img14 = document.getElementById("img14l4");

const img15 = document.getElementById("img15l5");
const img16 = document.getElementById("img16l5");
const img17 = document.getElementById("img17l5");
const img18 = document.getElementById("img18l5");


setTimeout(() => {   

yes_btn.addEventListener("click", rotate_and_change_txt);

no_btn.addEventListener("click", move_no_btn);

no_btn.addEventListener("mouseover", move_no_btn);

},3400)
  
  function move_no_btn() {
    
    let X_func = () => { 
    let X = Math.floor(Math.random() * 88); 
    return X;
    };
    
    let Y_func = () => { 
      let Y;
      do {
          Y = Math.floor(Math.random() * 88); 
      } 
      while (Y >= 32.5 && Y <= 57.5); 
      return Y; 
    };
  
    let X_cord = X_func();
    let Y_cord = Y_func();
  
    no_btn.style.left = X_cord + "%";
    no_btn.style.top = Y_cord + "%";
  };
  
  function rotate_and_change_txt() {
  
    setTimeout(
      () => {
        question_text.textContent = "Yes you are! <3";
        question_text.style.top = "20%";
        question_text.style.fontSize = "calc(4vh + 4vw)";
      }, 120)

      no_btn.style.top = "45%";
      no_btn.style.left = "60%";

      img1.style.top = "4.2vh";
      img2.style.top = "4.2vh";
      img3.style.top = "4.2vh";
      img4.style.top = "4.2vh";
      img5.style.top = "4.2vh";

      img6.style.top = "26.375vh";
      img7.style.top = "26.375vh";
      
      img8.style.top = "45.5vh";
      img9.style.top = "45.5vh";
      
      img10.style.top = "65.125vh";
      img11.style.top = "65.125vh";
      img12.style.top = "65.125vh";
      img13.style.top = "65.125vh";
      img14.style.top = "65.125vh";
      
      img15.style.top = "86.5vh";
      img16.style.top = "86.5vh";
      img17.style.top = "86.5vh";
      img18.style.top = "86.5vh";
      
      img1.style.animation = "rotate 3s linear 0s infinite";
      img2.style.animation = "rotate 3s linear -0.5s infinite";
      img3.style.animation = "rotate 3s linear -1s infinite";
      img4.style.animation = "rotate 3s linear -1.5s infinite";
      img5.style.animation = "rotate 3s linear -2s infinite";

      img6.style.animation = "rotate 3s linear -0.5s infinite";
      img7.style.animation = "rotate 3s linear -1s infinite";

      img8.style.animation = "rotate 3s linear -1s infinite";
      img9.style.animation = "rotate 3s linear -1.5s infinite";

      img10.style.animation = "rotate 3s linear -1.5s infinite";
      img11.style.animation = "rotate 3s linear -2s infinite";
      img12.style.animation = "rotate 3s linear -2.5s infinite";
      img13.style.animation = "rotate 3s linear -3s infinite";
      img14.style.animation = "rotate 3s linear -3.5s infinite";
      
      img15.style.animation = "rotate 3s linear -2s infinite";
      img16.style.animation = "rotate 3s linear -2.5s infinite";
      img17.style.animation = "rotate 3s linear -3s infinite";
      img18.style.animation = "rotate 3s linear -3.5s infinite";
  
  };




