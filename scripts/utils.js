////    Get Date and year for lastModified Footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

////    Hamburger menu functionality
const hamButton = document.querySelector("#ham-button");
const navigation = document.querySelector(".nav-bar");

hamButton.addEventListener("click", () => {
    // Toggle navigation visibility
    navigation.classList.toggle("open");

    // Check whether navigation is open
    const isOpen = navigation.classList.contains("open");

    // Change hamburger icon
    hamButton.textContent = isOpen ? "X" : "☰";

    // Update accessibility attributes
    hamButton.setAttribute("aria-expanded", isOpen);
    hamButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});


////    Populate the Certificates seciton
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const coursesList = document.querySelector(".courses-list");

const allCoursesButton = document.querySelector("#all-courses");
const wddButton = document.querySelector("#wdd");
const cseButton = document.querySelector("#cse");

// Display courses on the page
function displayCourses(courseArray) {
    coursesList.innerHTML = "";

    courseArray.forEach(course => {
        const courseCard = document.createElement("div");

        courseCard.classList.add("course-card");

        // Add a different class depending on completion
        if (course.completed) {
            courseCard.classList.add("completed");
        } else {
            courseCard.classList.add("not-completed");
        }

        courseCard.textContent = `${course.subject} ${course.number}`;

        coursesList.appendChild(courseCard);
    });
}

// Filter courses by subject
function filterCourses(subject) {
    if (subject === "ALL") {
        displayCourses(courses);
    } else {
        const filteredCourses = courses.filter(course =>
            course.subject === subject
        );

        displayCourses(filteredCourses);
    }
}

// Button event listeners
allCoursesButton.addEventListener("click", () => {
    filterCourses("ALL");
});

wddButton.addEventListener("click", () => {
    filterCourses("WDD");
});

cseButton.addEventListener("click", () => {
    filterCourses("CSE");
});

// Display all courses when the page loads
displayCourses(courses);
