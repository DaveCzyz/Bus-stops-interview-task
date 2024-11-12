import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { ROUTE } from '@/enums';
import { updateDocumentMeta } from '@/router/guards';

const routes: Array<RouteRecordRaw> = [
  {
    name: ROUTE.home,
    path: '',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    name: ROUTE.stops,
    path: '/stops',
    component: () => import('@/views/StopsView.vue'),
    meta: {
      title: 'Stops',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => ROUTE.home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach(updateDocumentMeta);

export default router;
