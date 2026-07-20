window.onload = function() {
  const text = "DarkGodJim001官网";
  let i = 0;
  const titleElement = document.getElementById("title_");
  
  if (titleElement) {
    titleElement.innerHTML = "";
    
    function typeWriter() {
      if (i < text.length) {
        titleElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    
    typeWriter();
  }
}
function tw() {
  const text = "DarkGodJim001官网";
  let i = 0;
  const titleElement = document.getElementById("title_");
  
  if (titleElement) {
    titleElement.innerHTML = "";
    
    function typeWriter() {
      if (i < text.length) {
        titleElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    
    typeWriter();
  }
}