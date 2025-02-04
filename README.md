<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Portfolio</title>
        <link rel="stylesheet" href="styles5.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    </head>
    <body>
        <header class="animated-header">
            <div class="container">
                <h1>Cameron Waldron</h1>
                <p>Web Developer | Designer</p>
                <nav>
                    <ul class="nav-list">
                        <li class="container"><a href="#about">About</a></li>
                        <li class="container"><a href="#skills">Skills</a></li>
                        <li class="container"><a href="#projects">Projects</a></li>
                        <li class="container"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <section id="about" class="section">
            <div class="container">
                <h2>About me</h2>
                <p>I am a passionate web enthusiast who loves bringing ideas to life through clean and elegant HTML and CSS. I am currently on  an exciting journey of learning new coding languages and expanding my technical skills. What drives me is the joy of problem solving, creating visually appealing designs, and turning concepts into functional and interactive web pages. 
                    When i am not coding, i'm exploring new tools and frameworks to sharpen my skills. My goal is to continuously grow as a developer and build user-friendly experiences that leave a lasting impression.
                </p>
            </div>
        </section>

        <section id="skills" class="section">
            <div class="container">
                <h2>Skills</h2>
                <ul class="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>C#</li>
                
                </ul>
            </div>
        </section>

        <section id="projects" class="section">
            <div class="projects">
                <div class="project">
                    <h3>Project 1</h3>
                        <p>Description</p>
                        <a href="#" target="_blank">View</a>
                </div>
                <div class="project">
                    <h3>Project 2</h3>
                    <p>Description</p>
                    <a href="#" target="_blank">View</a>
                </div>
            </div>
        </section>

        <section id="contact" class="section">
            <div class="container">
                <h2>Contact</h2>
                <a href="mailto:Waldroncameron@outlook.com" target="_blank">
                    <i class="fas fa-envelope"></i>
                <a href="https://www.linkedin.com/in/Cameron%20Waldron" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Waldron146" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </section>
        

        <footer>
            <p>2025 Cameron Waldron. All Rights Reserved.</p>
        </footer>
        <!-- Add this button HTML just before the closing </body> tag -->
<button id="scrollToTop" style="display: none;">↑ Top</button>

        </body>
        <script src="portfolio.js"></script>
</html>
