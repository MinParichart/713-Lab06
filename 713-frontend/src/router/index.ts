import { createRouter, createWebHistory } from 'vue-router'
import EventDetailView from '../views/EventDetailView.vue'
import EventListView from '../views/EventListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route) => ({
       page: parseInt(route.query.page as string) || 1,
      }),
    },
    {
        path: '/event/:id',
        component: EventDetailView,
        props: true,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router // complie แบบ typeSript
