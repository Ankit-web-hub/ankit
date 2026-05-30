/* =========================
   DOM ELEMENTS
========================= */

const classSelect = document.getElementById("studentClass");
const streamSection = document.getElementById("streamSection");
const streamSelect = document.getElementById("stream");
const subjectsContainer = document.getElementById("subjectsContainer");
const form = document.getElementById("studentForm");


/* =========================
   CLASS SELECTION LOGIC
   9th & 10th => Fixed Subjects
   11th & 12th => Stream Selection
========================= */

classSelect.addEventListener("change", () => {

    const selectedClass = classSelect.value;

    // Clear previous subjects
    subjectsContainer.innerHTML = "";

    // For Class 9 & 10
    if (selectedClass === "9th" || selectedClass === "10th") {

        // Hide Stream Section
        streamSection.style.display = "none";

        // Display Subjects
        subjectsContainer.innerHTML = `
            <input type="checkbox" name="subject" value="Maths" checked disabled>
            Maths (Compulsory)<br>

            <input type="checkbox" name="subject" value="Science" checked disabled>
            Science (Compulsory)<br>

            <input type="checkbox" name="subject" value="English" checked disabled>
            English (Compulsory)<br>

            <input type="checkbox" name="subject" value="Hindi">
            Hindi<br>

            <input type="checkbox" name="subject" value="Gujarati">
            Gujarati<br>

            <input type="checkbox" name="subject" value="Sanskrit">
            Sanskrit<br>

            <input type="checkbox" name="subject" value="Social Science">
            Social Science<br>

            <input type="checkbox" name="subject" value="Computer Science">
            Computer Science<br>

            <input type="checkbox" name="subject" value="Physical Education">
            Physical Education
        `;
    }

    // For Class 11 & 12
    else if (selectedClass === "11th" || selectedClass === "12th") {

        streamSection.style.display = "block";
        subjectsContainer.innerHTML = "";
    }

    // No Class Selected
    else {

        streamSection.style.display = "none";
    }
});


/* =========================
   STREAM SELECTION LOGIC
========================= */

streamSelect.addEventListener("change", () => {

    const stream = streamSelect.value;

    /* ---------- Science ---------- */

    if (stream === "Science") {

        subjectsContainer.innerHTML = `
            <input type="checkbox" name="subject" value="Physics"> Physics<br>

            <input type="checkbox" name="subject" value="Chemistry"> Chemistry<br>

            <input type="checkbox" name="subject" value="Biology"> Biology<br>

            <input type="checkbox" name="subject" value="Mathematics"> Mathematics<br>

            <input type="checkbox" name="subject" value="Computer Science"> Computer Science<br>

            <input type="checkbox" name="subject" value="English"> English
        `;
    }

    /* ---------- Commerce ---------- */

    else if (stream === "Commerce") {

        subjectsContainer.innerHTML = `
            <input type="checkbox" name="subject" value="Accountancy" checked disabled>
            Accountancy (Compulsory)<br>

            <input type="checkbox" name="subject" value="Economics">
            Economics<br>

            <input type="checkbox" name="subject" value="Business Studies">
            Business Studies<br>

            <input type="checkbox" name="subject" value="Statistics" checked disabled>
            Statistics (Compulsory)<br>

            <input type="checkbox" name="subject" value="English">
            English
        `;
    }

    /* ---------- Arts ---------- */

    else if (stream === "Arts") {

        subjectsContainer.innerHTML = `
            <input type="checkbox" name="subject" value="History">
            History<br>

            <input type="checkbox" name="subject" value="Geography">
            Geography<br>

            <input type="checkbox" name="subject" value="Political Science">
            Political Science<br>

            <input type="checkbox" name="subject" value="Psychology">
            Psychology<br>

            <input type="checkbox" name="subject" value="English">
            English
        `;
    }
});


/* =========================
   FORM SUBMISSION
========================= */

form.addEventListener("submit", function (e) {

    // Prevent page reload
    e.preventDefault();

    /* ---------- Get Form Data ---------- */

    const firstName =
        document.querySelector('[name="firstName"]').value;

    const lastName =
        document.querySelector('[name="lastName"]').value;

    const dob =
        document.querySelector('[name="dob"]').value;

    const phone =
        document.querySelector('[name="phone"]').value;

    const gender =
        document.querySelector('input[name="gender"]:checked')?.value;

    const disability =
        document.querySelector('input[name="disability"]:checked')?.value;

    const studentClass =
        document.querySelector('[name="studentClass"]').value;

    const activity =
        document.querySelector('[name="activity"]').value ||
        "Not Selected";

    /* ---------- Selected Subjects ---------- */

    const subjects = Array.from(
        document.querySelectorAll('input[name="subject"]:checked')
    )
    .map(subject => subject.value)
    .join(", ");

    /* ---------- Validation ---------- */

    if (!subjects) {

        alert("Please select at least one subject.");
        return;
    }

    /* ---------- Success Popup ---------- */

    alert(
`✅ Form Submitted Successfully!

Student Name : ${firstName} ${lastName}
Date of Birth : ${dob}
Phone Number : ${phone}
Gender : ${gender}
Disability : ${disability}
Class : ${studentClass}
Stream : ${streamSelect.value || "N/A"}
Subjects : ${subjects}
Extra Activity : ${activity}`
    );

    /* ---------- Reset Form ---------- */

    form.reset();
    subjectsContainer.innerHTML = "";
    streamSection.style.display = "none";
});