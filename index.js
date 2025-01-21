import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projects = [
  {
    title: "Personal Finance Tracker",
    description: "A web app to manage personal finances and track expenses.It helps you manage your income, expenses, and savings. With customizable categories, visual insights, and a user-friendly dashboard, staying on top of your finances has never been easier.",
    techStack: ["HTML", "CSS", "JavaScript","Node.js", "PostgreSQL", "EJS" , "Express.js"],
    image: "/assets/Internship-3.png", // Path to the image
    githubLink: "https://github.com/ankitsharma93154/Internship_project_3.git",
    demoLink: "https://drive.google.com/file/d/1tzQ3KPr9J1Cp1ObzW-0NXHGT5MQO1Hx7/view?usp=drive_link"
  },
  {
    title: "Blogging Webiste",
    description: "Our Blogging Website lets you easily publish posts, engage with readers, and manage your content. With a clean, responsive design and intuitive features, it’s the perfect platform for sharing your ideas and building your online presence.",
    techStack: ["HTML", "CSS", "JavaScript","Node.js", "PostgreSQL", "EJS" , "Express.js"],
    image: "/assets/Internship-2.png",
    githubLink: "https://github.com/ankitsharma93154/Internship_project_2.git",
    demoLink: "https://drive.google.com/file/d/15IzM_1w9yFLzabnMGKXc_ByEuuBBwzb8/view?usp=drive_link"
  },
  {
    title: "To-Do List",
    description: 
    "Stay organized and on top of your tasks with our To-Do List app. Easily add, edit, and track tasks with deadlines, and prioritize them to stay focused. The simple, intuitive interface helps you manage your day efficiently, keeping you productive and on track.",
    techStack: ["HTML", "CSS", "JavaScript","Node.js", "PostgreSQL", "EJS" , "Express.js"],
    image: "/assets/Internship-1.png",
    githubLink: "https://github.com/ankitsharma93154/intership_project_1.git",
    demoLink: "https://drive.google.com/file/d/1ZfNEmV0Itqz6EwjQqU2sTpU-9Ieap-ig/view?usp=drive_link"
  },
  {
    title: "Book Summary & Notes website",
    description: 
"Keep track of your reading journey with our Book Summary & Notes website. Add summaries, key takeaways, and personal notes for any book you've read. Organize your thoughts, reflect on what you've learned, and easily revisit your notes whenever you need a quick recap of your favorite reads.",
    techStack: ["HTML", "CSS", "JavaScript","Node.js", "PostgreSQL", "EJS" , "Express.js"],
    image: "/assets/book_notes.png",
    githubLink: "https://github.com/ankitsharma93154/Book_notes-summary.git",
    demoLink: "https://drive.google.com/file/d/11DpayIOx3_AC3RW0nOqEdKZ6CDCQibgy/view?usp=drive_link"
  }
];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  try {
    res.render("index");
  } catch (err) {
    console.log(err);
  }
});

app.get("/project", (req, res) => {
  try {
    res.render("project", { projects: projects });
  } catch (err) {
    console.log(err);
  }
});

app.get("/about", (req, res) => {
  try {
    res.render("aboutMe");
  } catch (err) {
    console.log(err);
  }
});

app.get("/contact", (req, res) => {
  try {
    res.render("contact");
  } catch (err) {
    console.log(err);
  }
});

app.post("/contact", (req, res) => {
  try {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.message);
    res.redirect("/contact");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


