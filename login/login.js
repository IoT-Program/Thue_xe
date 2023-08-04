// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyATQxv0mEDu5JnwsGRnM2eKJgNBD4phcgc",
    authDomain: "thue-xe-a17d2.firebaseapp.com",
    databaseURL: "https://thue-xe-a17d2-default-rtdb.firebaseio.com",
    projectId: "thue-xe-a17d2",
    storageBucket: "thue-xe-a17d2.appspot.com",
    messagingSenderId: "744561795993",
    appId: "1:744561795993:web:349446365fa3f907cfa908",
    measurementId: "G-F5GN2D06JW"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");

// Xử lý sự kiện khi người dùng nhấn nút "Đăng nhập"
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn gửi biểu mẫu (form) mặc định

    if(email.value == "" || password.value == "") {
      alert("Vui lòng nhập đầy đủ thông tin");
    }

    var obj = {
      email: email.value,
      password: password.value,
    };
  
    console.log(obj);
  
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then(function (success) {
        var aaaa = success.user.uid;
        localStorage.setItem("uid", aaaa);
        console.log(aaaa);
        window.location.replace('../home/index.html');
      })
      .catch(function (err) {
        alert("Tên tài khoản hoặc mật khẩu không chính xác");
      });
  });