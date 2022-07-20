function tab(pageName, element) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "rgb(0,102,102)";
    tablinks[i].style.borderTop = "";
    tablinks[i].style.borderLeft = "";
    tablinks[i].style.borderRight = "";
  }
  document.getElementById(pageName).style.display = "block";
  element.style.backgroundColor = "rgb(0,102,102)";
  element.style.color = "white";
  element.style.borderTop = "1px solid rgb(202, 12, 12)";
  element.style.borderLeft = "1px solid rgb(202, 12, 12)";
  element.style.borderRight = "1px solid rgb(202, 12, 12)";
}

document.getElementById("defaultOpen").click();
