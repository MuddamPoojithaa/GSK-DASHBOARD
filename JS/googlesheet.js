const scriptURL = 'https://script.google.com/macros/s/AKfycbys1dyWwjdaBqZBBSAWeveLPcwzuzsUVa4PWrXMRpd27ubJI1PToK9LSaSutvv2FBgf/exec'

const form = document.forms['Contact-Form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("We have received your details. You will receive a call from us." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

