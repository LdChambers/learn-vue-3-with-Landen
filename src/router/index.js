import { createRouter, createWebHistory } from 'vue-router'


// import Home from '@/views/Home.vue'
// import About from '@/views/About.vue'
// import BlogPosts from '@/views/BlogPosts.vue'
// import BlogPost from '@/views/BlogPost.vue'
// import BlogPostsGreeting from '@/views/BlogPostsGreeting.vue'
// import NotFound from '@/views/NotFound.vue'
// import Ads from '@/views/ads.vue'
// import Login from '@/views/Login.vue'
// import MainLayout from '@/views/MainLayout.vue'
import { isAuthenticated } from '@/apis/auth'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    const scrollBehaviorOptions = {
      top: 0,
      behavior: 'smooth',
    }

    // If the route has a meta field with a scrollToElement property, scroll to that element
    if (to.meta.scrollToElement) {
      scrollBehaviorOptions.el = to.meta.scrollToElement
    }

    // If the route has a savedPosition, return it, otherwise return the scrollBehaviorOptions
    return savedPosition ?? scrollBehaviorOptions
  },
    routes: [ {
      path: '/',
      name: 'mainLayout',
      component: () => import('@/views/MainLayout.vue'),
      redirect: { name: 'home' },
          children: [
            {
            path: '/home',
            name: 'home',
            component: () => import('@/views/Home.vue'),
            meta: { requiresAuth: false },
        },
        {
          path: '/blogPosts',
          name: 'blogPosts',
          component: () => import('@/views/BlogPosts.vue'),
          meta: {
            enterAnimation: 'animate__animated animate__bounceIn',
            leaveAnimation: 'animate__animated animate__bounceOut',
          },
          redirect: { name: 'blogPostsGreeting' },
          children: [
            {
              path: '',
              name: 'blogPostsGreeting',
              component: () => import('@/views/BlogPostsGreeting.vue'),
              meta: { requiresAuth: false },
            },
            {
              path: '/blogPosts/:id(\\d+)',
              name: 'blogPost',
              components: {
                default: () => import('@/views/BlogPost.vue'),
                sidebar: () => import('@/views/ads.vue'),
              },
              meta: {
                requiresAuth: true,
                scrollToElement: '.blog-posts-layout',
              },
            },
          ],
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/About.vue'),
          meta: { requiresAuth: false },
      }
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: { requiresAuth: false },
  },
        {
          path: '/:catchAll(.*)*', 
          name: 'notFound', 
          component: () => import('@/views/NotFound.vue'),
          meta: { requiresAuth: false }},
    ]
        
})

router.beforeEach((to, from) => {
  console.log(from.name, '->', to.name)
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    // Redirect to the login page with the originally requested page as the redirect query parameter
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

// Global after each navigation guard (for cleanup or loggin)
router.afterEach((to, from) => {
  console.log(`Successfully navigated to: ${to.fullPath}`)
})

export default router