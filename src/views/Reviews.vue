<script setup>
import { reactive } from 'vue';

// ประกาศตัวแปร state เพื่อเก็บข้อมูล movie
const state = reactive({
  movie: true // กำหนดค่าเริ่มต้นให้ movie เป็น true
});
</script>

<template>
  <AppLayout>
    <!-- แสดง iframe เมื่อ state.movie มีค่า -->
    <div v-if="state.movie" class="movie-card-container">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe4I0F9ZGH5nx0Bp2pbvoKyc1lOS2AvxTGMuqYK_Tjcypc_sQ/viewform?embedded=true" 
              width="100%" 
              height="1180" 
              frameborder="0" 
              marginheight="0" 
              marginwidth="0">Loading…</iframe>
    </div>
  </AppLayout>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Itim&family=Kodchasan:ital,wght@1,600&family=Mali&family=Mooli&family=Nunito:wght@500&family=Roboto+Slab&family=Sriracha&display=swap');

h1 {
  font-family: "Anton", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.movie-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* ทำให้เนื้อหาถูกจัดกึ่งกลางเต็มหน้าจอ */
  margin-top: 180px;
}
</style>
