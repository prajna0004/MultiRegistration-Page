document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let photo = document.querySelector("input[name='photo']");
    let hscmark = document.querySelector("input[name='hscmark']");
    let sscmark = document.querySelector("input[name='sscmark']");
    let semistermark = document.querySelector("input[name='semistermark']");
    
    if (!photo.value) {
      alert("Please select a photo.");
      return;
    }
    
    if (!hscmark.value) {
      alert("Please select an HSC mark sheet.");
      return;
    }
    
    if (!sscmark.value) {
      alert("Please select an SSC mark sheet.");
      return;
    }
    
    if (!semistermark.value) {
      alert("Please select all semister mark sheets.");
      return;
    }
    
    let maxFileSize = 4 * 1024 * 1024;
    let newmaxFileSize = 10 * 1024 * 1024;
    
    if (photo.files[0].size > maxFileSize) {
      alert("File size for photo should not be above 4 MB.");
      return;
    }
    
    if (hscmark.files[0].size > maxFileSize) {
      alert("File size for HSC mark sheet should not be above 4 MB.");
      return;
    }
    
    if (sscmark.files[0].size > maxFileSize) {
      alert("File size for SSC mark sheet should not be above 4 MB.");
      return;
    }
    
    if (semistermark.files[0].size > newmaxFileSize) {
      alert("File size for all semister mark sheets should not be above 4 MB.");
      return;
    }
    
    // Form is valid, submit it.
    this.submit();
    alert("Thank you for submitting.");
  });

  
  

  