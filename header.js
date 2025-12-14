


// HEADER CONTENT INJECTION HTML DOMS

// Page Links Section DOM Injection
document.getElementsByClassName("PageLinks")[0].innerHTML = 
    `
        <nav>
                <ul>

                    <li><a href="index.html">About Me</a></li>
                    <li><a href="PortfolioPage.html">Projects</a></li>
                    <li><a href="ContactPage.html">Contact Me</a></li>     
                    <li><a href="ResumePage.html">Resume</a></li> 
                    
                </ul>
            </nav>`;


          
// About Myself Section DOM Injection
document.getElementsByClassName("AboutMyself")[0].innerHTML = 
    `
        <h1>Seth</h1>
        <h3>Gameplay Programmer, Graphics Technical Artist and 3D Artist</h3>
    `;


// Social Media Links Section DOM Injection
document.getElementsByClassName("SocialMediaLinks")[0].innerHTML = 
    `
        <h3>Social Media Links:</h3>

        <nav>
            <ul>
                
                <li><a href="https://github.com/StrayGarden">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/seth-kolb-27b193295/">LinkedIn</a></li>
                <li><a href="https://www.artstation.com/strayife">ArtStation</a></li>
                <li><a href="https://strayife.itch.io">Itch.io</a></li>
                
            </ul>
        </nav>
    `;


//Slow Fade in effect for header elements
window.addEventListener('load', () => 
{
    const headerElements = document.querySelectorAll('.PageLinks, .AboutMyself, .SocialMediaLinks');
    headerElements.forEach(element => {
        element.style.opacity = '1';
    } 
    );
});


//Disable Links to current page
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll('.PageLinks a');

navLinks.forEach(link => 
{
    if(link.getAttribute('href') === currentPage){
        link.style.pointerEvents = 'none';
        link.style.color = 'gray';
    }
});

