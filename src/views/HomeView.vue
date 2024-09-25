<template>
  <div class="container">
    <div v-if="loading" class="loader">Loading...</div>
    <div v-else class="movie-grid">
      <div 
        v-for="movie in state.movies" 
        :key="movie.movie_id" 
        class="card" 
        @click="goToDetail(movie.movie_id)"
      >
        <img 
          class="poster" 
          :src="movie.poster || 'path/to/placeholder-image.jpg'" 
          alt="Poster"
        />
        <div class="card-content">
          <p class="movie-title">{{ movie.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const state = reactive({
  movies: [] 
});

const loading = ref(true);

const goToDetail = (movie_id) => {
  router.push({ name: 'MovieDetail', params: { index: movie_id } }); 
}

onMounted(() => {
  const cachedMovies = localStorage.getItem('movies');
  if (cachedMovies) {
    state.movies = JSON.parse(cachedMovies);
    loading.value = false; // ตั้งค่า loading เป็น false ทันทีเมื่อใช้ cache
  } else {
    const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=6Zaipk-Qwe6VZ7ZqU8w2ZU90rICEwPtRs_EN3rbBjYdiOdHts-WyF0FLutmgMvKXLfk05TWB6dwWOc15I_EyID6t_lap3DAgm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnL8u_AcB_1UHpYPCdf8vF9NY5MH5fDAIIq05qmQpVHYvIVZediGCqp9VPBpAUZwcVLrWvMx9lReKudZEoNYGr_Nl257qV3UnLQ&lib=MlS1jc-5j_78AMWoObAbgVkPwlNntp4vT';
    axios.get(url)
      .then((response) => {
        state.movies = response.data; 
        localStorage.setItem('movies', JSON.stringify(state.movies));
      })
      .finally(() => {
        loading.value = false; // ตั้งค่า loading เป็น false หลังจากดึงข้อมูล
      });
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Itim&family=Kodchasan:ital,wght@1,600&family=Mali&family=Mooli&family=Nunito:wght@500&family=Roboto+Slab&family=Sriracha&display=swap');

.container {
  margin-top: 50px;
  padding-left: 70px;
  margin-bottom: 100px;
}

.movie-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}

.card {
  display: flex;
  flex-direction: column;
  width: 260px;
  border: 5px solid #000000;
  box-sizing: border-box;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* เพิ่มการเปลี่ยนแปลง */
}

.card:hover {
  transform: translateY(-10px); /* ลอยขึ้น 10px */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* เพิ่มเงาให้ดูน่าสนใจ */
}

.poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
  text-align: center;
}

.movie-title {
  font-family: "Anton", sans-serif;
  font-style: normal;
  font-size: 18px;
  margin: 0;
  color: rgb(0, 0, 0);
}

.loader {
  text-align: center;
  font-size: 24px;
  color: #000;
}
</style>
