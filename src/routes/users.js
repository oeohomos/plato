export default {
  icon: 0xe615,
  title: '用户',
  name: 'users',
  auth: true,
  component: resolve => require(['views/users'], resolve),
  subRoutes: {
    '/': {
      name: 'users/all',
      auth: true,
      hidden: true,
      component: resolve => require(['views/users/all'], resolve)
    },
    '/:id': {
      name: 'users/detail',
      auth: true,
      hidden: true,
      component: resolve => require(['views/users/detail'], resolve)
    }
  }
}

// export const alias = {
//   '/users/:id/modify': '/users'
// }
