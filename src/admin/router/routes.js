

export default [
  { path: '/', component: ()=>import('../components/pages/about.vue') },
  { path: '/_works', component: ()=>import('../components/pages/works.vue')},
  { path: '/_reviews', component: ()=>import('../components/pages/reviews.vue')},
  { path: '/login', component: ()=>import('../components/pages/login.vue'), meta:{login:true}}
]