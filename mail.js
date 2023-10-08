const firebaseConfig = {
  apiKey: "AIzaSyARSfj1fEg32Adppg8dQmyb_ybgQzj4lVU",
  authDomain: "photography-2c733.firebaseapp.com",
  databaseURL: "https://photography-2c733-default-rtdb.firebaseio.com",
  projectId: "photography-2c733",
  storageBucket: "photography-2c733.appspot.com",
  messagingSenderId: "554107270705",
  appId: "1:554107270705:web:a1acb79898f749c7c24710"
  };
  
  // initialize firebase5
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };