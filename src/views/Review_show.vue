<template>
  <div class="container">
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-else class="grid">
      <div class="card"
        v-for="review in sortedReviews" 
        :key="review.index">
        <div class="card-content">
          <p class="name">{{ review.name }}</p>
          <br>
          <p class="movie-title">{{ review.movie_name }}</p>
          <br>
          <p class="movie-rating">{{ review.rating }}</p>
          <br>
          <p class="movie-comment">{{ review.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const state = reactive({
  reviews: [],
  isLoading: true // สถานะการโหลดข้อมูล
});

// คำนวณรีวิวเรียงจากใหม่ไปเก่า
const sortedReviews = computed(() => {
  return state.reviews.slice().reverse(); // กลับลำดับอาร์เรย์
});

const fetchReviews = async () => {
  const url = 'https://script.google.com/macros/s/AKfycbzABRWHUuJyCth8H-Ri9-aSwEHa3SX8-Kvs8Oop6miNuZpV3awOTd0H5yZuwopu3Bca/exec';
  
  try {
    const response = await axios.get(url);
    console.log(response.data); // ตรวจสอบโครงสร้างข้อมูล
    state.reviews = response.data; 
    localStorage.setItem('reviews', JSON.stringify(state.reviews)); // เก็บข้อมูลใหม่
  } catch (error) {
    console.error('Error fetching reviews:', error);
  } finally {
    state.isLoading = false; // เปลี่ยนสถานะการโหลด
  }
};

onMounted(fetchReviews);
</script>

<style scoped>
/* สไตล์ CSS ตามที่ให้มา */
</style>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Itim&family=Kodchasan:ital,wght@1,600&family=Mali&family=Mooli&family=Nunito:wght@500&family=Roboto+Slab&family=Sriracha&display=swap');

.container {
  margin-top: 50px;
  padding-left: 70px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); /* กำหนดจำนวนคอลัมน์ให้เป็นแบบ responsive */
  gap: 3rem; /* ระยะห่างระหว่างการ์ด */
}

.card {
  display: flex;
  flex-direction: column;
  border: 5px solid #000000;
  border-radius: 5px; 
  box-sizing: border-box;
  background-color: #ffffff;
  transition: transform 0.3s; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: translateY(-10px); 
}

.card-content {
  padding: 1rem;
  text-align: center;
}

.movie-title {
  font-size: 20px;
  margin: 0;
  color: rgb(0, 0, 0);
}

.loading {
  text-align: center;
  font-size: 20px;
  color: #555;
}

.name {
  font-size: 20px;
  margin: 0;
  color: rgb(0, 0, 0);
}
</style>
