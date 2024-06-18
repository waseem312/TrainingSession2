function getFormValue(e) {
    e.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const conpassword = document.getElementById("conpassword").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    const dob = document.getElementById("dob").value;
    const female = document.getElementById("female").value;
    const male = document.getElementById("male").value;
    const other = document.getElementById("other").value;
    const reading = document.getElementById("reading").value;
    const travelling = document.getElementById("travelling").value;
    const profile = document.getElementById("profile").value;
    const Country = document.getElementById("Country").value;
    const bio = document.getElementById("bio").value;
    const agree = document.getElementById("agree").value;

    console.log("Full Name : "+ fullname);
    console.log("User Name : "+ username);
    console.log("Password : "+ password);
    console.log("Confirm Password : "+ conpassword);
    console.log("Email : "+ email);
    console.log("Telephone : "+ tel);
    console.log("Date of birth : "+ dob);
    console.log("Female : "+ female);
    console.log("Male : "+ male);
    console.log("Other : "+ other);
    console.log("Reading : "+ reading);
    console.log("Travelling : "+ travelling);
    console.log("Profile : "+ profile);
    console.log("Country : "+ Country);
    console.log("Bio : "+ bio);
    console.log("Agree : "+ agree);
}