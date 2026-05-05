const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'lotteryvn', component: () => import('layouts/lotteryvn.vue') },
      { path: 'lotterymvn', component: () => import('layouts/lotterymvn.vue') },
      { path: 'lotterykh', component: () => import('layouts/lotterykh.vue') },
      { path: 'lotterythai', component: () => import('layouts/lotterythai.vue') },

      { path: '5d', component: () => import('src/pages/posts/Mobileapp.vue') },
    ],
  },

  {
    path: '/pages',
    component: () => import('layouts/PageLayout.vue'),
    children: [
      {
        path: 'result',
        component: () => import('src/pages/IndexPage.vue'),
      },
      {
        path: 'home',
        component: () => import('src/pages/home/components/index.vue'),
      },
    ],
  },

  {
    path: '/pages/find_prize/resultlottery/result',
    component: () => import('src/pages/find_prize/indexPage.vue'),
  },

  {
    path: '/pages/posts/apitest',
    component: () => import('src/pages/posts/Mobileapp.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
