<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute(); // ใช้ useRoute เพื่อตรวจสอบเส้นทางปัจจุบัน
</script>

<template>
  <nav v-if="route.path !== '/' " class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">
      <img src="/logo.png" alt="VD Movies Logo" width="75" height="auto">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <RouterLink class="nav-link" to="/home">หน้าแรก</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/reviews">รีวิวภาพยนต์</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/review_show">รีวิวอื่นๆ</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/reports">แจ้งปัญหา</RouterLink>
        </li>
      </ul>
    </div>
  </nav>

  <!-- แสดงเนื้อหาตามการนำทาง -->
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Itim&family=Kodchasan:ital,wght@1,600&family=Mali&family=Mooli&family=Nunito:wght@500&family=Roboto+Slab&family=Sriracha&display=swap');

body {
  /* ใส่รูปภาพพื้นหลัง */
  background-image: url('https://img.freepik.com/free-photo/assortment-cinema-elements-red-background-with-copy-space_23-2148457848.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
}

nav {
  margin-bottom: 100px;
  background-color: rgb(255, 255, 255);
  position: relative; /* หรือ fixed ถ้าต้องการให้ navbar อยู่บนสุดเสมอ */
  z-index: 2;
  border: 5px solid black; /* เพิ่มเส้นกรอบขนาด 2px สีดำ */
  border-radius: 10px; /* ทำให้มุมกรอบมน (ถ้าไม่ต้องการสามารถลบได้) */
}

.navbar {
  font-family: "Anton", sans-serif;
  font-style: normal;
  font-size: 25px;
}

.navbar-nav .nav-item {
  margin-right: 20px; /* ปรับความห่างระหว่างปุ่ม */
}
</style>
