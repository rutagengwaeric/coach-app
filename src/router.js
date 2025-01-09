import { createRouter, createWebHistory } from  'vue-router';
import CoachList from './pages/coach/CoachList.vue';
import CoachDetail from './pages/coach/CoachDetail.vue';
import ContactCoach from './pages/request/ContactCoach.vue';
import CoachRegisteration from './pages/coach/CoachRegisteration.vue';
import RequestReceived from './pages/request/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path : '/',
            redirect : '/coaches'
        }
        ,
        {
            path : '/coaches',
            component : CoachList
        },
        { 
            path : '/coaches/:id',
            component : CoachDetail,
            children : [
                {
                    path : '/contact',
                    component : ContactCoach
                }
            ]
        }
        ,{
            path : '/register',
            component : CoachRegisteration
        },
        {
            path: '/requests',
            component : RequestReceived
        },
        {
            path : '/:notFound(.*)',
            component : NotFound
        }

    ],
})

export default router;