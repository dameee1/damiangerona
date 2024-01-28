 // JavaScript code
 document.addEventListener('DOMContentLoaded', function () {
    // Function to handle "Download Resume" button click
    function handleDownloadResume() {
        console.log('Resume downloaded!');
        // Add your logic for handling the resume download here
    }

    // Function to handle navigation link click
    function handleNavLinkClick(event) {
        // Remove the "selected" class from all navigation links
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => link.classList.remove('selected'));

        // Add the "selected" class to the clicked navigation link
        event.target.classList.add('selected');
    }

    // Attach event listener to "Download Resume" button
    const downloadResumeButton = document.querySelector('.info button');
    downloadResumeButton.addEventListener('click', handleDownloadResume);

    // Attach event listener to navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));
});