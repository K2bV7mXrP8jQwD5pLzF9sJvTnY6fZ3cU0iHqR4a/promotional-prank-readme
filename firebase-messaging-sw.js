importScripts('https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.3.1/firebase-messaging.js');

// Firebase configuration (same as in `index.html`)
const firebaseConfig = {
    apiKey: "AIzaSyBw4HsKItJ_PT_fhwBAmXGTJqNlrAoTwJA",
    authDomain: "prank-a744d.firebaseapp.com",
    projectId: "prank-a744d",
    storageBucket: "prank-a744d.firebasestorage.app",
    messagingSenderId: "590464106843",
    appId: "1:590464106843:web:6df121bcacd42f26dd9a7e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background push notifications
messaging.onBackgroundMessage((payload) => {
    console.log("Background message received:", payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: '/icon.png' // Change this to your notification icon
    });
});
