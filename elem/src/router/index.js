import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyElement from '@/components/MyElement'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MyElement',
            component: MyElement
        },
        {
            path: '/help',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})
