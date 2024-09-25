<template>  
    <div class="welcome-container" :class="{ fade: isFading }">
      <img src="/logoWelcome.png" alt="Logo" class="logo" />
      <h1>ยินดีต้อนรับสู่เว็บไซต์</h1>
      <button class="enter-button" @click="navigateToHome">เข้าสู่เว็บไซต์</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  
  const router = useRouter();
  const isFading = ref(false); // สถานะการ fade
  
  const navigateToHome = () => {
    isFading.value = true; // เริ่มอนิเมชัน fade
    setTimeout(() => {
      router.push('/home'); // เปลี่ยนเส้นทางไปยังหน้า home
    }, 500); // รออนิเมชันเสร็จสิ้นก่อนเปลี่ยนเส้นทาง
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Itim&family=Kodchasan:ital,wght@1,600&family=Mali&family=Mooli&family=Nunito:wght@500&family=Roboto+Slab&family=Sriracha&display=swap');
  .welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: black; /* ตั้งค่าพื้นหลังเป็นสีดำ */
    color: white; /* เปลี่ยนสีข้อความให้เป็นสีขาวเพื่อให้ตัดกับพื้นหลัง */
    font-family: "Anton", sans-serif;
    transition: opacity 0.5s ease; /* ทำให้การเปลี่ยนแปลงโปร่งใส */
  }
  
  .fade {
    opacity: 0; /* ปรับความโปร่งใสเมื่อเปลี่ยนหน้า */
  }
  
  .logo {
    width: 500px; /* ปรับขนาดโลโก้ให้ใหญ่ขึ้น */
    height: auto; /* คงอัตราส่วนของโลโก้ */
    margin-bottom: 20px; /* ระยะห่างระหว่างโลโก้และข้อความ */
  }
  
  .enter-button {
    margin-top: 20px; /* ระยะห่างระหว่างโลโก้และข้อความ */
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .enter-button:hover {
    background-color: #fa9494;
  }
  
  
  
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  </style>
  