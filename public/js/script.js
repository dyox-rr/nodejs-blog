var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


const category__confirm__destroy = (e, form) => {
  e.preventDefault();
  let confirmation = confirm("tem certeza que deseja excluir a categoria?");
  if(confirmation) form.submit();
}