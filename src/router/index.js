import { createRouter, createWebHistory } from 'vue-router'


import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import BlogPosts from '@/views/BlogPosts.vue'

const router = createRouter({
  history: createWebHistory(),
    routes: [ 
        {path: '/', name:'home', component: Home},
        {path: '/BlogPosts',name:'blogposts', component: BlogPosts},
        {path: '/About',name:'about', component: About},
    ]
        
})

export default router