<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB-gJ5y4I5xvGXCCZFjFZpN8GeVpOqyT9M",
    authDomain: "sdrivejson.firebaseapp.com",
    databaseURL: "https://sdrivejson-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sdrivejson",
    storageBucket: "sdrivejson.firebasestorage.app",
    messagingSenderId: "426496785942",
    appId: "1:426496785942:web:681c516b482d4e32e8ff37",
    measurementId: "G-SX0HY3YKTW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>