// SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView();
}

// AUTH
function login() {
  window.location.href = "login.html";
}

function signup() {
  window.location.href = "signup.html";
}

// SEARCH
function searchAI() {
  let query = document.getElementById("searchInput").value;

  if (query === "") {
    alert("Enter something!");
  } else {
    alert("Searching for: " + query);
  }
}

// ICONS
function voice() {
  alert("Voice feature coming soon");
}

function camera() {
  alert("Camera feature coming soon");
}

function upload() {
  alert("Upload feature coming soon");
}

// CONTACT
function goToContact() {
  window.location.href = "contact.html";
}

function goToAbout() {
  window.location.href = "about.html";
}
function goToAbout() {
  window.location.href = "about.html";
}


// ===== SIGNUP FUNCTIONS =====
function handleSignup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Save user
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);

  alert("🎉 Account created successfully!");

  // ✅ REDIRECT
  window.location.href = "dashboard.html";
}
function handleLogin() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  alert("🎉 Login Successful!");

  // ✅ REDIRECT
  window.location.href = "dashboard.html";
}

function goToSignup() {
  window.location.href="dashboard.html";
}

function sendMessage() {
  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("contactMessage").value;

  if (!name || !email || !message) {
    alert("Please fill required fields");
    return;
  }

  alert("📩 Message sent successfully!");
}
// PROFILE FUNCTIONS
function editProfile() {
  alert("Edit Profile clicked");
}

function changePassword() {
  alert("Change Password clicked");
}

function updateSkin() {
  alert("Update Skin Preferences clicked");
}

function downloadReport() {
  alert("Downloading report...");
}

function clearData() {
  alert("Data cleared");
}

function logout() {
  alert("Logged out!");
  window.location.href = "index.html";
}

function goToProfile() {
  window.location.href = "profile.html";
}
// NAVIGATION FUNCTIONS
function goToEditProfile() {
  window.location.href = "edit-profile.html";
}

function goToChangePassword() {
  window.location.href = "change-password.html";
}

function goToSkinPreferences() {
  window.location.href = "skin-preferences.html";
}

function goToContact() {
  window.location.href = "contact.html";
}

function goToAbout() {
  window.location.href = "about.html";
}

function logout() {
  alert("Logged out!");
  window.location.href = "index.html";
}

function downloadReport() {
  alert("Downloading report...");
}

function clearData() {
  localStorage.clear();
  alert("Data cleared!");
}

/* DARK MODE */
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
function goToSettings() {
  window.location.href = "settings.html";
}
function goToHelp() {
  window.location.href = "help.html";
}

function goToPrivacy() {
  window.location.href = "privacy.html";
}

function goToTerms() {
  window.location.href = "terms.html";
}
// DOWNLOAD REPORT
function downloadReport() {
  const name = localStorage.getItem("name") || "User";
  const email = localStorage.getItem("email") || "Not set";
  const age = localStorage.getItem("age") || "Not set";
  const skinType = localStorage.getItem("skinType") || "Not set";
  const concern = localStorage.getItem("concern") || "Not set";

  const report = `
  ===== SkinLytics Report =====

  Name: ${name}
  Email: ${email}
  Age: ${age}

  Skin Type: ${skinType}
  Primary Concern: ${concern}

  Skin Health Score: 72/100
  Last Analysis: Acne detected

  ============================
  `;

  const blob = new Blob([report], { type: "text/plain" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "SkinLytics_Report.txt";
  link.click();
}


// CLEAR DATA
function clearData() {
  const confirmClear = confirm("⚠ Are you sure you want to clear all data?");

  if (confirmClear) {
    localStorage.clear();
    alert("✅ All data cleared!");

    // redirect to home page
    window.location.href = "index.html";
  }
}
function goToProfile(){
window.location.href="profile.html";
}

function goToSettings(){
window.location.href="settings.html";
}

function logout(){
  localStorage.clear(); // 🔥 important
  alert("Logged out");
  window.location.href="index.html";
}

function notifications(){
alert("Notifications coming soon");
}

function aiAnalyzer(){
alert("Opening AI Analyzer...");
}

function historyPage(){
alert("History page coming soon");
}

function detectIssue(){
alert("Acne detected");
}

function healthScore(){
alert("Skin Health Score: 72/100");
}

function routine(){
alert("Routine generated");
}

function products(){
alert("Recommended products shown");
}

function tips(){
alert("Daily skincare tips generated");
}

function savedSuggestions(){
alert("Opening saved suggestions");
}

function dailyTips(){
alert("Showing daily skincare tips");
}

function trendingProducts(){
alert("Showing trending products");
}
function detectIssue(){
  document.querySelectorAll(".result-card")[0].innerHTML =
  "Detected Issue<br>Acne";
}

function skinScore(){
  document.querySelectorAll(".result-card")[2].innerHTML =
  "Skin Score<br>72/100";
}
function voice(){
  alert("🎤 Voice feature started");
}

function camera(){
  alert("📷 Camera opened (simulate)");
}

function upload(){
  alert("📂 File upload started");
}

function linkFeature(){
  alert("🔗 Link feature opened");
}
function detectIssue(){
  alert("Detected: Acne");
}

function skinScore(){
  alert("Your Skin Score: 72/100");
}

function routine(){
  alert("Routine: Cleanser → Moisturizer → Sunscreen");
}

function products(){
  alert("Recommended: Face Wash, Serum, Sunscreen");
}

function tips(){
  alert("Tip: Drink water & use gentle products");
}
uploadBox.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadBox.innerHTML = "✅ File Uploaded!";
});
let currentInput = "";

// 🔍 TEXT SEARCH
function processInput(){
  const text = document.getElementById("aiSearch").value;

  if(text === "" && currentInput === ""){
    alert("Please provide input!");
    return;
  }

  localStorage.setItem("aiInput", text || currentInput);
  window.location.href = "ai-result.html";
}


// 🎤 MIC INPUT
function startMic(){
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  recognition.start();

  recognition.onresult = function(event){
    const speech = event.results[0][0].transcript;
    document.getElementById("aiSearch").value = speech;
    currentInput = speech;
  };
}


// 📷 CAMERA INPUT
function openCamera(){
  const video = document.getElementById("camera");
  video.style.display = "block";

  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
      currentInput = "Camera image captured";
    })
    .catch(err => alert("Camera access denied"));
}


// 📂 FILE UPLOAD
function openUpload(){
  const fileInput = document.getElementById("fileInput");
  fileInput.click();

  fileInput.onchange = function(){
    currentInput = "File uploaded: " + fileInput.files[0].name;
  };
}


// 🔗 LINK INPUT
function enterLink(){
  const link = prompt("Enter image or reference link:");

  if(link){
    currentInput = "Link: " + link;
    document.getElementById("aiSearch").value = link;
  }
}
window.onload = function(){
  document.getElementById("userInput").innerText =
    localStorage.getItem("aiInput");

  document.getElementById("aiResultText").innerText =
    localStorage.getItem("aiResult");
};