//---------------- load screen 
function id(v){
  return document.getElementById(v)
};

function loadbar() {
let ovrl = id("overlay"),
    prog = id("progress"),
    stat = id("progstat"),
    load = document.all,
    c = 0;
    tot = load.length;

function imgLoaded(){
  c += 1;
  let perc = ((100/tot*c) << 0) +"%";
  prog.style.width = perc;
  stat.innerHTML = "Loading "+ perc;
  if(c===tot) return doneLoading();
}


function doneLoading(){
  ovrl.style.opacity = 0;
  setTimeout(function(){ 
    ovrl.style.display = "none";
  }, 1200);

  
}
for(var i=0; i<tot; i++) {
  let tImg     = new Image();
  tImg.onload  = imgLoaded;
  tImg.onerror = imgLoaded;
  tImg.src     = load[i].src;
}    

}
document.addEventListener('DOMContentLoaded', loadbar, false);

//------------------------ load screen



//contact form js

var config = {
  apiKey: "AIzaSyA1_qWlp8m6f6i-Jw6lmn8_VoBPEukLZlM",
  authDomain: "holykickscontact.firebaseapp.com",
  databaseURL: "https://holykickscontact.firebaseio.com",
  projectId: "holykickscontact",
  storageBucket: "holykickscontact.appspot.com",
  messagingSenderId: "537163002799"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var email = getInputVal('email');
  var name = getInputVal('name');
  var contactNumber = getInputVal('contactNumber');
  var message = getInputVal('message');

  // Save message
  saveMessage(email, name, contactNumber, message);
  //alert success
document.querySelector('.alert').style.display = 'block';

//hide alert 
setTimeout(function() {
  document.querySelector('.alert').style.display = 'none';
}, 3000);

document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email, name, contactNumber, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email: email,
    name: name,
    contactNumber: contactNumber,
    message:message
  });
}