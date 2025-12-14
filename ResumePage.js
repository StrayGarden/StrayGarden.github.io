

//Resume Button
const resumeButton = document.querySelector('.ResumePageButton');

//Resume PDF button event to open in another tab
resumeButton.addEventListener('click', () => 
{
    window.open('Resume.pdf', '_blank');
});