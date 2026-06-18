window.addEventListener("DOMContentLoaded", () => {
  const createRoomBtn = document.querySelector(".box-1"); 
  const backToSection1Btn = document.querySelector(".jamming-logo"); 
  
  const section1 = document.getElementById("section-1");
  const section2 = document.getElementById("section-2");

  
  if (createRoomBtn && section1 && section2) {
    createRoomBtn.addEventListener("click", () => {
      section1.style.display = "none";   
      section2.style.display = "block";  
    });
  }

  
  if (backToSection1Btn && section1 && section2) {
    backToSection1Btn.addEventListener("click", () => {
      section2.style.display = "none";   
      section1.style.display = "block";  
    });
  }
});