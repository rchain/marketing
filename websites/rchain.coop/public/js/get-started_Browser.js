 document.getElementById('developer').onclick = show_content;
 document.getElementById('validator').onclick = show_content;

 function show_content() {
     var tabContent = document.getElementsByClassName("tabContent");
     var tabs = document.getElementsByClassName("tab");
     var i;
     for (i = 0; i < tabContent.length; i++) {
         tabContent[i].classList.remove("active");
         tabs[i].classList.remove("active");
     }
     var content = document.getElementById(this.id + "Content");
     content.classList.add("active");
     var tab = document.getElementById(this.id);
     tab.classList.add("active");
 }
