document.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';

    // Handle form submission
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission behavior
  
      // 🚨 // Get input values using destructuring assignment and map
      const [studentNameInput, personalMessageInput, courseNameInput] = ['studentName', 'personalMessage', 'courseName'].map(elementId => document.getElementById(elementId));
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a Course"; // Fallback to "a course" if no input
      
      // Validate required fields
      if (studentName.trim() === '' || personalMessage.trim() === '' || courseName.trim() === '') {
        alert('Please fill in all fields');
        return;
      }

      // Handle course name with or without "Course" word
      const nameWithCourseWord = (courseName.toLowerCase().includes('course'))? courseName : `${courseName} Course`;
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
        <h2>Certificate of Achievement</h2>
        <p>This is to certify that</p>
        <h3>${studentName}</h3>
        <p>has almost completed the</p>
        <h3>${nameWithCourseWord}</h3>
        <p>with legendary perseverance and world-class bad-assery for never giving up 🏆</p>
        <img src="./logo.png" alt="CodeSpace Logo" width="350">
        <p>${personalMessage}</p>
      `;
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      certificateContent.textContent = ''; // Remove certificate content
      modal.style.display = 'none'; // Hide the modal on close
    });
  });
  