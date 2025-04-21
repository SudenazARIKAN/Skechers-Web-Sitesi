
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TodoPage.vue') },
      { path: '/help', component: () => import('pages/HelpPage.vue') },
      { path: '/filtreler', component: () => import('pages/FiltrelerPage.vue') },
      { path: '/sepetim', component: () => import('pages/SepetPage.vue') },
      { path: '/favoriler', component: () => import('pages/FavorilerimPage.vue') },
      { path: '/header', component: () => import('pages/HeaderPage.vue') },
      { path: '/ürün gösterme', component: () => import('pages/UrunPage.vue') },
      { path: '/carousel', component: () => import('pages/CarouselPage.vue') },


    ]
  }
]

  // Always leave this as last one,
  // but you can also remove it
  if(process.env.MODE !== 'ssr') {
   routes.push({
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  })
}


export default routes
