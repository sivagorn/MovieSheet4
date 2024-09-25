import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Reviews from '../views/Reviews.vue'
import Review_show from '../views/Review_show.vue'
import Reports from '../views/Reports.vue'
import Welcome from '../views/Welcome.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movie/:index',
      name: 'MovieDetail',
      component: MovieDetail
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: Reviews
    },
    {
      path: '/review_show',
      name: 'Review_show',
      component: Review_show
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }

  ]
})

export default router
