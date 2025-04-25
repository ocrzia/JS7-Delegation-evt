document.querySelector('.koalas').addEventListener("click", function(e) {
  if(e.target.hasAttribute("title")) {
    e.target.classList.add('cross')
  }
})

