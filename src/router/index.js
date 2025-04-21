import { createRouter, createWebHistory } from 'vue-router'


import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import BlogPost from '@/views/BlogPost.vue'
import BlogPostsGreeting from '@/views/BlogPostsGreeting.vue'
import NotFound from '@/views/NotFound.vue'
import { sliderContextKey } from 'element-plus'
import Ads from '@/views/ads.vue'

const router = createRouter({
  history: createWebHistory(),
    routes: [ 
        {path: '/', name:'home', component: Home},
        {path: '/blogPosts',name:'blogPosts', component: BlogPosts,
          redirect: {name:"blogPostsGreeting"}, 
          children: [
            {path: '',name: 'blogPostsGreeting', component: BlogPostsGreeting},
          {path: 'blogPosts/:id(\\d+)', name: 'blogPost', components: {default: BlogPost, sidebar: Ads,}},
        ]},
        {path: '/About',name:'about', component: About},
        {path: '/:catchAll(.*)*', name: 'notFound', component: NotFound},
    ]
        
})

export default router