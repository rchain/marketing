document.addEventListener("DOMContentLoaded", () => {

  Promise.all([getData(), getTemplate()])
  .then((allData) => {
    // Isn't there pattern matching?
    let context = allData[0];
    let source = allData[1];

    let template = Handlebars.compile(source);
    let html = template(context);

    // Put the rendered code in the DOM
    document.getElementById("columns").innerHTML = html;

    // Now attach event listeners for showing and hiding
    document.getElementById("columns").addEventListener("click", handleClick);
  });

  function handleClick(event){
    if (event.target.classList.contains("shown")) {
      event.target.classList.remove("shown");
      event.target.classList.add("hidden");
    }
    else {
      event.target.classList.remove("hidden");
      event.target.classList.add("shown");
    }
  }


  Handlebars.registerHelper("distanceDown", deadline => {
    let end = new Date(deadline);
    let start = new Date("2018-09-19");
    let delta = end - start;
    return delta / 164000000 + 22;
  })



  Handlebars.registerHelper("niceDate", dateText => {
    var result = new Date(dateText).toLocaleString('en-us', { day: "numeric", month: "long" });
    return result
  })



  function relativePath(filename) {
    let path = window.location.pathname.split('/');
    if (path[path.length] === "index.html") {
      path = path.slice(0, path.length);
    }
    return `${window.location.protocol}//${window.location.host}${path.join("/")}${filename}`
  }


  function getData() {
    return fetch(relativePath("roadmap.json"))
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error)
    });
  }



  function getTemplate() {
    return fetch(relativePath("template.hbs"))
    .then(response => {
      return response.text();
    })
    .catch(error => {
      console.log(error)
    });
  }
})
