document.getElementById('privacy-policy').addEventListener('change', function() {
  document.getElementById('submit-button').disabled = !this.checked;
});

function submitForm() {
  document.getElementById('submit-button').disabled = true;
  return true;
}