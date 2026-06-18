// ============================================================
// PART 1 — JSX and Components
//
// How to verify your work:
//   Run "npm run dev" in your terminal from the ttp-checkpoint-2 folder.
//   Make sure the dev server in the terminal is running. 
//   Open http://localhost:5173 in your browser.
//   Every time you save this file, the browser updates automatically.
//   Look at the page — that is how you know your code is working.
//
// Instructions:
//   - Write your code directly below each task prompt
//   - Each task tells you exactly what to build and where to put it
//   - For EXPLAIN tasks, write your answer as a comment below the prompt
// ============================================================


// ------------------------------------------------------------
// SECTION A — JSX Basics
//
// Why we learn this:
//   JSX is the syntax React uses to describe what goes on the screen.
//   It looks like HTML, but it lives inside JavaScript. Before you can
//   build anything in React, you need to understand how JSX works and
//   how to mix JavaScript values into it.
// ------------------------------------------------------------

function SectionA() {
  // A1.
  // Declare a variable called myName and assign it your first name as a string.
  // Declare a variable called myCity and assign it the city you are from.
  const myName = "Sithu"
  let myCity = "New York City"

  console.log(myName , myCity)


  // A2.
  // Inside the return below, add a <p> tag that displays your name.
  // Add a second <p> tag that displays your city.
  // Embed each variable into the JSX rather than typing the value directly.
  //
  // Hint: How do you embed a JavaScript value inside JSX?
  //      If you don't embed the value correctly,
  //      React treats the text literally and prints the
  //      variable name instead of its value.


  // A3.
  // Using your myName variable, display your name in all uppercase inside a <p> tag.
  // The text should update automatically if you change your name — do not hardcode it.

  // A4.
  // Display the number of characters in your name inside a <p> tag.

  // A5.
  // Declare a variable and assign it the result of 25 + 17.
  // Add a <p> tag that shows both the expression and the computed value on the same line.
  //
  // EXPLAIN: What is JSX? How is it different from plain HTML?
  //          Why do you need curly braces to embed a variable's value?
  //
  //          answer:
  //          JSX is a syntax used in React that lets us write HTML like code inside JS. It is different from plain HTML because JSX can use JS variables, values, and expressions.
  //          Curly braces are needed because they tell React to run JS inside the JSX instead of treating it like regular text.

  const sum = 25 + 17
  return (
    <div>
      <h2>Section A — JSX Basics</h2>
      {/* Your output goes below this line */}
      <p>{myName.toUpperCase()} , {myName.length}</p>
      <p>{myCity}</p>
      <p>25 + 17 = {sum}</p>
    </div>
  )
}


// ------------------------------------------------------------
// SECTION B — Writing Your Own Components - you don't need to export anything
//
// Why we learn this:
//   In React, the UI is broken into components — small, reusable
//   functions that each return a piece of the page. This keeps code
//   organized and makes it easy to reuse the same UI in multiple places.
//   Everything you build in React is a component.
// ------------------------------------------------------------

// B1.
// Create a component called PageHeader.
// It should return a <header> element that contains:
//   - An <h1> with the text "My React App"
//   - A <nav> with three <a> tags: Home, About, Contact
//     (href="#" is fine — we are not building real links yet)
//
// Write PageHeader here:
function PageHeader() {
  return(
    <header>
      <h1>My React App</h1>
      <nav>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </nav>
    </header>
  )
}


// B2.
// Create a component called PageFooter.
// It should return a <footer> element with a <p> that says "2026 TTP".
//
// Write PageFooter here:
function PageFooter() {
  return(
    <footer>
      <p>2026 TTP</p>
    </footer>
  )
}


function SectionB() {
  // B3.
  // Render your PageHeader and PageFooter components inside the div below.
  // You should see both appear on the page when you save.
  //
  // EXPLAIN: What is a React component?
  //          Why do we split UI into separate components instead of
  //          writing everything inside one big function?
  //
  //          answer:
  //          A React component is a reusable function that returns JSX to show something on the page.
  //          We split UI into separate components so the code is easier to read, organize, reuse, 
  //          and update instead of putting everything inside of putting everything inside one big function.


  return (
    <div>
      <h2>Section B — Your Own Components</h2>
      {/* Render your components below */}
      <PageHeader />
      <PageFooter />
    </div>
  )
}


// ------------------------------------------------------------
// Do not edit below this line.
// Part1 renders both sections so they appear on the page together.
// ------------------------------------------------------------

function Part1() {
  return (
    <section>
      <h1>Part 1 — JSX and Components</h1>
      <hr />
      <SectionA />
      <hr />
      <SectionB />
    </section>
  )
}

export default Part1
