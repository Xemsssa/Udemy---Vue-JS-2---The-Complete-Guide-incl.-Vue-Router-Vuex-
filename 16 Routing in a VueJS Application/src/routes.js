import HomeVue from './components/Home.vue';
// import UserVue from './components/user/User.vue';
// import UserStartVue from './components/user/UserStart';
// import UserDetailVue from './components/user/UserDetail';
// import UserEditVue from './components/user/UserEdit';

const UserVue = resolve => {
    require.ensure(["./components/user/User.vue"], () => {
        resolve(require('./components/user/User.vue'));
    })
}

const UserStartVue = resolve => {
    require.ensure(["./components/user/UserStart.vue"], () => {
        resolve(require('./components/user/UserStart.vue'));
    })
}  

const UserDetailVue = resolve => {
    require.ensure(["./components/user/UserDetail.vue"], () => {
        resolve(require('./components/user/UserDetail.vue'));
    })
}  

const UserEditVue = resolve => {
    require.ensure(["./components/user/UserEdit.vue"], () => {
        resolve(require('./components/user/UserEdit.vue'));
    })
}  

export const routes = [
    {path: '', component: HomeVue},
    // {path: '/user', component: UserVue},
    // {path: '/user/:id', component: UserVue},
    {path: '/user', component: UserVue,  children: [
        {path: '', component: UserStartVue, name: 'home'},
        {path: ':id', component: UserDetailVue, name: 'userDetail', beforeEnter: (to, from, next) => {
            console.log("beforeEnter");
            next();
        }},
        {path: '/:id/edit', component: UserEditVue, name: 'userEdit'},
    ]},
    {path: '/redirect-me', redirect: '/user'},
    {path: '*', redirect: '/'},

]