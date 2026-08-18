// --- 1. QUIZ DATASET (25 Questions per Category) ---
const quizData = {
  fullstack: [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Markup Language", "Hyper Tool Machine Language"], correct: 0 },
    { question: "Which property changes text color in CSS?", options: ["text-color", "color", "fg-color", "font-color"], correct: 1 },
    { question: "Which keyword declares a constant variable in JavaScript?", options: ["var", "let", "const", "static"], correct: 2 },
    { question: "Which HTML element is used for the largest heading?", options: ["<h6>", "<heading>", "<h1>", "<head>"], correct: 2 },
    { question: "How do you make a list with bullet points in HTML?", options: ["<ol>", "<dl>", "<ul>", "<list>"], correct: 2 },
    { question: "Which CSS property controls the layout grid?", options: ["display: flex", "display: grid", "display: block", "display: inline"], correct: 1 },
    { question: "Which symbol is used for comments in single-line JavaScript?", options: ["//", "/*", "<!--", "#"], correct: 0 },
    { question: "Which attribute specifies an image source URL?", options: ["href", "src", "link", "alt"], correct: 1 },
    { question: "In CSS, how do you select an element with class 'box'?", options: ["#box", ".box", "box", "*box"], correct: 1 },
    { question: "What is the correct syntax to call a JS function named 'myFunc'?", options: ["call myFunc()", "myFunc()", "read myFunc()", "run myFunc()"], correct: 1 },
    { question: "Which tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"], correct: 0 },
    { question: "Which CSS box-model property adds space inside an element's border?", options: ["margin", "padding", "outline", "gap"], correct: 1 },
    { question: "Which method converts a JSON string into an object?", options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "JSON.convert()"], correct: 1 },
    { question: "Which tag defines an input field in HTML?", options: ["<input>", "<textfield>", "<entry>", "<form>"], correct: 0 },
    { question: "Which CSS property handles text size?", options: ["text-size", "font-size", "text-style", "size"], correct: 1 },
    { question: "What array method adds an item to the end?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 0 },
    { question: "Which HTML5 element is used for standalone navigation links?", options: ["<nav>", "<header>", "<menu>", "<aside>"], correct: 0 },
    { question: "How do you apply round corners to a border in CSS?", options: ["corner-radius", "border-radius", "box-radius", "radius"], correct: 1 },
    { question: "Which operator checks both value and type equality in JS?", options: ["==", "=", "===", "!="], correct: 2 },
    { question: "Which attribute opens a hyperlink in a new tab?", options: ["target='_blank'", "open='new'", "window='blank'", "target='_new'"], correct: 0 },
    { question: "Which CSS rule makes element text bold?", options: ["font-style: bold", "font-weight: bold", "text-bold: true", "font-variant: bold"], correct: 1 },
    { question: "Which event fires when an HTML element is clicked?", options: ["onhover", "onchange", "onclick", "onpress"], correct: 2 },
    { question: "Which HTML tag is used to display a table row?", options: ["<td>", "<th>", "<tr>", "<table-row>"], correct: 2 },
    { question: "What value of position keeps an element fixed during page scroll?", options: ["absolute", "relative", "fixed", "static"], correct: 2 },
    { question: "Which built-in JS object handles mathematical operations?", options: ["Math", "Number", "Calculator", "Algebra"], correct: 0 }
  ],
  html: [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyperlinks Text Markup Language", "Home Tool Markup Language", "Hyper Tool Machine Language"], correct: 0 },
    { question: "Who is making the Web standards?", options: ["Mozilla", "Microsoft", "The World Wide Web Consortium", "Google"], correct: 2 },
    { question: "Choose the correct HTML element for the largest heading:", options: ["<heading>", "<h6>", "<h1>", "<head>"], correct: 2 },
    { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<lb>", "<br>", "<line>"], correct: 2 },
    { question: "What is the correct HTML for adding a background color?", options: ["<body bg='yellow'>", "<body style='background-color:yellow;'>", "<background>yellow</background>", "<body color='yellow'>"], correct: 1 },
    { question: "Choose the correct HTML element to define important text:", options: ["<b>", "<important>", "<strong>", "<i>"], correct: 2 },
    { question: "Choose the correct HTML element to define emphasized text:", options: ["<i>", "<italic>", "<em>", "<mark>"], correct: 2 },
    { question: "Which character is used to indicate an end tag?", options: ["*", "<", "/", "^"], correct: 2 },
    { question: "How can you make a numbered list?", options: ["<ul>", "<ol>", "<dl>", "<list>"], correct: 1 },
    { question: "How can you make a bulleted list?", options: ["<ol>", "<list>", "<ul>", "<dl>"], correct: 2 },
    { question: "What is the correct HTML for making a checkbox?", options: ["<check>", "<input type='checkbox'>", "<checkbox>", "<input type='check'>"], correct: 1 },
    { question: "What is the correct HTML for making a text input field?", options: ["<input type='text'>", "<textfield>", "<textinput>", "<input type='textfield'>"], correct: 0 },
    { question: "What is the correct HTML for making a drop-down list?", options: ["<list>", "<select>", "<input type='dropdown'>", "<dropdown>"], correct: 1 },
    { question: "What is the correct HTML for making a text area?", options: ["<input type='textarea'>", "<textarea>", "<input type='textbox'>", "<text>"], correct: 1 },
    { question: "What is the correct HTML for inserting an image?", options: ["<img alt='MyImage'>image.gif</img>", "<image src='image.gif' alt='MyImage'>", "<img src='image.gif' alt='MyImage'>", "<img href='image.gif'>"], correct: 2 },
    { question: "Which HTML element defines the title of a document?", options: ["<meta>", "<title>", "<head>", "<header>"], correct: 1 },
    { question: "Which HTML attribute specifies an alternate text for an image?", options: ["title", "src", "alt", "longdesc"], correct: 2 },
    { question: "Which doctype is correct for HTML5?", options: ["<!DOCTYPE html>", "<!DOCTYPE HTML PUBLIC>", "<?xml version='1.0'?>", "<!DOCTYPE html5>"], correct: 0 },
    { question: "Which HTML element is used to specify a footer for a document?", options: ["<bottom>", "<footer>", "<section>", "<aside>"], correct: 1 },
    { question: "In HTML, audio/video elements are inline or block?", options: ["Inline", "Block", "Inline-block", "Flex"], correct: 2 },
    { question: "Which HTML element is used to play video files?", options: ["<media>", "<video>", "<movie>", "<play>"], correct: 1 },
    { question: "Which HTML element defines semantic main content?", options: ["<content>", "<main>", "<section>", "<body>"], correct: 1 },
    { question: "Which HTML element defines navigation links?", options: ["<nav>", "<navigate>", "<links>", "<menu>"], correct: 0 },
    { question: "What is the default value of the target attribute in links?", options: ["_blank", "_self", "_parent", "_top"], correct: 1 },
    { question: "Which HTML element is used to group inline elements?", options: ["<div>", "<span>", "<section>", "<p>"], correct: 1 }
  ],
  css: [
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correct: 0 },
    { question: "Which HTML tag is used to define an internal style sheet?", options: ["<script>", "<css>", "<style>", "<link>"], correct: 2 },
    { question: "Which HTML attribute is used to define inline styles?", options: ["font", "class", "style", "styles"], correct: 2 },
    { question: "Which CSS syntax is correct?", options: ["body {color: black;}", "{body:color=black;}", "body:color=black;", "{body;color:black;}"], correct: 0 },
    { question: "How do you insert a comment in a CSS file?", options: ["// this is a comment", "' this is a comment", "/* this is a comment */", "<!-- this is a comment -->"], correct: 2 },
    { question: "Which property is used to change the background color?", options: ["bgcolor", "color", "background-color", "canvas-color"], correct: 2 },
    { question: "How do you add a background color for all <h1> elements?", options: ["all.h1 {background-color:#FFFFFF;}", "h1.all {background-color:#FFFFFF;}", "h1 {background-color:#FFFFFF;}", "h1 {bg-color:#FFFFFF;}"], correct: 2 },
    { question: "Which CSS property is used to change the text color of an element?", options: ["fgcolor", "text-color", "color", "font-color"], correct: 2 },
    { question: "Which CSS property controls the text size?", options: ["text-style", "font-size", "text-size", "font-style"], correct: 1 },
    { question: "What is the correct CSS syntax for making all the <p> elements bold?", options: ["p {text-size:bold;}", "p {font-weight:bold;}", "p {style:bold;}", "p {font-style:bold;}"], correct: 1 },
    { question: "How do you display hyperlinks without an underline?", options: ["a {text-decoration:none;}", "a {underline:none;}", "a {text-decoration:no-underline;}", "a {decoration:none;}"], correct: 0 },
    { question: "How do you make each word in a text start with a capital letter?", options: ["text-style:capitalize", "transform:capitalize", "text-transform:capitalize", "font-transform:capitalize"], correct: 2 },
    { question: "Which property is used to change the font of an element?", options: ["font-style", "font-family", "font-weight", "font-type"], correct: 1 },
    { question: "How do you make the text bold in CSS?", options: ["font-style:bold;", "font-weight:bold;", "text:bold;", "font-variant:bold;"], correct: 1 },
    { question: "Which property controls the space between borders and content?", options: ["margin", "padding", "border-spacing", "outline"], correct: 1 },
    { question: "How do you select an element with id 'demo'?", options: [".demo", "#demo", "demo", "*demo"], correct: 1 },
    { question: "How do you select elements with class name 'test'?", options: ["*test", "#test", ".test", "test"], correct: 2 },
    { question: "What is the default value of the position property?", options: ["relative", "fixed", "absolute", "static"], correct: 3 },
    { question: "How do you make a flex container?", options: ["display: grid;", "display: flex;", "display: block;", "display: inline-flex;"], correct: 1 },
    { question: "Which CSS property sets column gaps in grid/flexbox?", options: ["column-gap", "gap-column", "grid-column-space", "margin-column"], correct: 0 },
    { question: "Which CSS property changes the mouse cursor icon?", options: ["pointer", "mouse-style", "cursor", "hover"], correct: 2 },
    { question: "Which property hides an element while keeping its space reserved?", options: ["display:none;", "visibility:hidden;", "opacity:0;", "position:absolute;"], correct: 1 },
    { question: "What is z-index used for?", options: ["Font sizing", "Stacking order of overlapping elements", "Zoom level", "Grid span"], correct: 1 },
    { question: "How do you specify 'center' alignment for text?", options: ["text-align: center;", "align: center;", "text-center: true;", "margin: auto;"], correct: 0 },
    { question: "Which CSS unit is relative to the root element's font size?", options: ["em", "px", "rem", "vh"], correct: 2 }
  ],
  js: [
    { question: "Inside which HTML element do we put JavaScript?", options: ["<js>", "<scripting>", "<script>", "<javascript>"], correct: 2 },
    { question: "What is the correct syntax for referring to an external script called 'xxx.js'?", options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"], correct: 2 },
    { question: "How do you write 'Hello World' in an alert box?", options: ["msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msg('Hello World');"], correct: 2 },
    { question: "How do you create a function in JavaScript?", options: ["function = myFunction()", "function myFunction()", "function:myFunction()", "create myFunction()"], correct: 1 },
    { question: "How do you call a function named 'myFunction'?", options: ["call function myFunction()", "call myFunction()", "myFunction()", "execute myFunction()"], correct: 2 },
    { question: "How to write an IF statement in JavaScript?", options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"], correct: 2 },
    { question: "How to write an IF statement for executing code if 'i' is NOT equal to 5?", options: ["if (i <> 5)", "if (i != 5)", "if i =! 5 then", "if i not= 5"], correct: 1 },
    { question: "How does a WHILE loop start?", options: ["while i = 1 to 10", "while (i <= 10)", "while (i <= 10; i++)", "while i in 1..10"], correct: 1 },
    { question: "How does a FOR loop start?", options: ["for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)"], correct: 0 },
    { question: "How can you add a single-line comment in JavaScript?", options: ["<!--This is a comment-->", "'This is a comment", "//This is a comment", "/*This is a comment*/"], correct: 2 },
    { question: "What is the correct way to write a JS array?", options: ["const colors = (1:'red', 2:'green')", "const colors = ['red', 'green']", "const colors = 'red', 'green'", "const colors = {1:'red', 2:'green'}"], correct: 1 },
    { question: "How do you round 7.25 to the nearest integer?", options: ["Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)", "Math.floor(7.25)"], correct: 1 },
    { question: "Which event occurs when the user clicks on an HTML element?", options: ["onchange", "onmouseover", "onclick", "onmouseclick"], correct: 2 },
    { question: "How do you declare a JavaScript variable?", options: ["var carName;", "v carName;", "variable carName;", "string carName;"], correct: 0 },
    { question: "Which operator is used to assign a value to a variable?", options: ["*", "=", "x", "-"], correct: 1 },
    { question: "What will `typeof NaN` return?", options: ["'number'", "'NaN'", "'undefined'", "'object'"], correct: 0 },
    { question: "Which method converts JSON string into a JS Object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.decode()"], correct: 0 },
    { question: "Which array method removes the last element?", options: ["shift()", "pop()", "push()", "unshift()"], correct: 1 },
    { question: "Which array method removes the first element?", options: ["shift()", "pop()", "slice()", "splice()"], correct: 0 },
    { question: "Which keyword is block-scoped in ES6?", options: ["var", "let", "global", "function"], correct: 1 },
    { question: "What is the output of `2 + '2'` in JS?", options: ["4", "'22'", "NaN", "TypeError"], correct: 1 },
    { question: "Which method joins all array elements into a string?", options: ["concat()", "join()", "pop()", "push()"], correct: 1 },
    { question: "How do you stop a `setInterval()` timer?", options: ["clearInterval()", "stopInterval()", "endInterval()", "cancelTimer()"], correct: 0 },
    { question: "Which statement skips the current iteration of a loop?", options: ["break", "exit", "continue", "skip"], correct: 2 },
    { question: "Which ES6 arrow function syntax is correct?", options: ["const add = (a, b) => a + b;", "const add = function(a, b) => a + b;", "const add => (a, b) { return a + b; }", "function add = (a, b) => a + b;"], correct: 0 }
  ]
};

// --- 2. AUTH CHECK: ROUTE PROTECTION ---

// --- 3. SIGNUP LOGIC ---
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (!name || !email || !password) {
      if (typeof Swal !== "undefined") {
        Swal.fire({ icon: 'error', title: 'Invalid Input!', text: 'Please fill in all fields without empty spaces.' });
      } else {
        alert("Please fill in all fields without empty spaces.");
      }
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (storedUser && storedUser.email === email) {
      if (typeof Swal !== "undefined") {
        Swal.fire({ icon: 'error', title: 'Email Already Registered!', text: 'An account with this email already exists. Please log in.' });
      } else {
        alert("An account with this email already exists. Please log in.");
      }
      return;
    }

    localStorage.setItem("userData", JSON.stringify({ name, email, password }));

    if (typeof Swal !== "undefined") {
      Swal.fire({ icon: 'success', title: 'Signup Successful!', text: 'Your account has been created successfully.', timer: 1500, showConfirmButton: false });
    }

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);
  });
}

// --- 4. LOGIN LOGIC ---
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
      if (typeof Swal !== "undefined") {
        Swal.fire({ icon: 'error', title: 'Invalid Input!', text: 'Please enter a valid email and password.' });
      } else {
        alert("Please enter a valid email and password.");
      }
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      
      if (typeof Swal !== "undefined") {
        Swal.fire({ icon: 'success', title: 'Login Successful!', text: 'Welcome back!', timer: 1500, showConfirmButton: false });
      }
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1500);
    } else {
      if (typeof Swal !== "undefined") {
        Swal.fire({ icon: 'error', title: 'Invalid email or password!', text: 'Please check your credentials.' });
      } else {
        alert("Invalid email or password!");
      }
    }
  });
}

// --- 5. QUIZ HOME LOGIC ---
const welcomeUser = document.getElementById("welcomeUser");
if (welcomeUser) {
  const storedUser = JSON.parse(localStorage.getItem("userData"));
  if (storedUser && storedUser.name) {
    welcomeUser.textContent = `Welcome, ${storedUser.name}!`;
  }

  let selectedQuizType = "fullstack";
  const quizCards = document.querySelectorAll(".quiz-category-card");

  quizCards.forEach((card) => {
    card.addEventListener("click", () => {
      quizCards.forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      selectedQuizType = card.dataset.quiz;
    });
  });

  const startBtn = document.getElementById("startQuizBtn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      localStorage.setItem("selectedQuizType", selectedQuizType);
      window.location.href = "quiz.html";
    });
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "login.html";
    });
  }
}

// --- 6. QUIZ GAME LOGIC ---
const questionNum = document.getElementById("questionNum");
if (questionNum) {
  const selectedType = localStorage.getItem("selectedQuizType") || "fullstack";
  const activeQuestions = quizData[selectedType] || quizData.fullstack;

  let currentIdx = 0;
  let userAnswers = new Array(activeQuestions.length).fill(-1); 
  let timerInterval = null;
  let timeLeft = 20;

  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const endBtn = document.getElementById("endBtn");

  function loadQuestion() {
    clearInterval(timerInterval);
    timeLeft = 20;

    const qData = activeQuestions[currentIdx];
    
    questionNum.textContent = `Question ${String(currentIdx + 1).padStart(2, '0')} / ${activeQuestions.length}`;
    document.getElementById("timer").textContent = `${timeLeft}s`;
    document.getElementById("questionText").textContent = qData.question;
    
    // Toggle Previous button state
    if (prevBtn) prevBtn.disabled = currentIdx === 0;

    // Toggle Next button state based on whether an answer was picked
    if (nextBtn) nextBtn.disabled = userAnswers[currentIdx] === -1;

    const container = document.getElementById("optionsContainer") || document.getElementById("optionsGroup");
    if (container) {
      container.innerHTML = "";

      qData.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt;

        // Maintain selection state across navigation
        if (userAnswers[currentIdx] === idx) {
          btn.classList.add("selected");
        }

        btn.onclick = () => {
          document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
          userAnswers[currentIdx] = idx;
          if (nextBtn) nextBtn.disabled = false; // Enable Next button upon selection
        };
        container.appendChild(btn);
      });
    }

    timerInterval = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").textContent = `${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        handleNextQuestion();
      }
    }, 1000);
  }

  function calculateScore() {
    return userAnswers.reduce((totalScore, answer, index) => {
      return answer === activeQuestions[index].correct ? totalScore + 1 : totalScore;
    }, 0);
  }

  function finishQuiz(reason = "completed") {
    clearInterval(timerInterval);
    const finalScore = calculateScore();
    localStorage.setItem("quizScore", finalScore);
    localStorage.setItem("totalQuestions", activeQuestions.length);

    if (reason === "cheating") {
      if (typeof Swal !== "undefined") {
        Swal.fire({
          icon: 'error',
          title: 'Test Terminated!',
          text: 'You switched tabs or left the test environment.',
          allowOutsideClick: false
        }).then(() => {
          window.location.href = "result.html";
        });
      } else {
        alert("Test terminated because you switched tabs or left the screen!");
        window.location.href = "index.html";
      }
    } else {
      window.location.href = "index.html";
    }
  }

  function handleNextQuestion() {
    currentIdx++;
    if (currentIdx < activeQuestions.length) {
      loadQuestion();
    } else {
      finishQuiz();
    }
  }

  function handlePrevQuestion() {
    if (currentIdx > 0) {
      currentIdx--;
      loadQuestion();
    }
  }

  // Event Listeners
  if (nextBtn) nextBtn.addEventListener("click", handleNextQuestion);
  if (prevBtn) prevBtn.addEventListener("click", handlePrevQuestion);

  if (endBtn) {
    endBtn.addEventListener("click", () => {
      if (typeof Swal !== "undefined") {
        Swal.fire({
          title: 'End Test Early?',
          text: "Your test will close and redirect to signup.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, end test'
        }).then((result) => {
          if (result.isConfirmed) {
            finishQuiz();
          }
        });
      } else {
        if (confirm("Are you sure you want to end the test early?")) {
          finishQuiz();
        }
      }
    });
  }

  // Auto-close test if tab changes or window loses focus
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      finishQuiz("cheating");
    }
  });

  window.addEventListener("blur", () => {
    finishQuiz("cheating");
  });

  loadQuestion();
}

// --- 7. RESULT PAGE LOGIC ---
const scoreDisplay = document.getElementById("scoreDisplay");
if (scoreDisplay) {
  const finalScore = parseInt(localStorage.getItem("quizScore")) || 0;
  const totalQuestions = parseInt(localStorage.getItem("totalQuestions")) || 25;
  const percentage = Math.round((finalScore / totalQuestions) * 100);

  scoreDisplay.textContent = `${finalScore} / ${totalQuestions}`;
  const percentDisplay = document.getElementById("percentDisplay");
  if (percentDisplay) percentDisplay.textContent = `${percentage}%`;

  const badge = document.getElementById("resultBadge");
  const title = document.getElementById("resultTitle");
  const feedback = document.getElementById("feedbackText");

  if (badge && title && feedback) {
    if (percentage >= 80) {
      badge.textContent = "🏆";
      title.textContent = "Outstanding Performance!";
      feedback.textContent = "Great job! You have mastered these concepts.";
      feedback.style.color = "#10b981";
    } else if (percentage >= 50) {
      badge.textContent = "🎉";
      title.textContent = "PASS!";
      feedback.textContent = "Keep practicing, you're almost there!";
      feedback.style.color = "#38bdf8";
    } else {
      badge.textContent = "💪";
      title.textContent = "FAIL!";
      feedback.textContent = "Don't give up! Keep Learning & Keep Coding!";
      feedback.style.color = "#da1032";
    }
  }

  // Handle Try Again button redirect to index.html
  const tryAgainBtn = document.getElementById("tryAgainBtn") || document.querySelector(".btn") || document.querySelector("button");
  if (tryAgainBtn) {
    tryAgainBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
}