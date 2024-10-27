function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
  }
  
  function viewResume() {
    document.getElementById('resumeModal').style.display = 'block';
  }
  
  function closeResume() {
    document.getElementById('resumeModal').style.display = 'none';
  }
  
  // Close the modal if the user clicks outside it
  window.onclick = function(event) {
    const modal = document.getElementById('resumeModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  