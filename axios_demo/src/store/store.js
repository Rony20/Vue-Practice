import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth.js'
// import globalAxios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        idToken: null,
        userId: null
    },
    getters:{

    },
    mutations:{
        authUser(state, userData){
            state.idToken = userData.token
            state.userId = userData.userId
        }
    },
    actions:{
        signup(context, authData){
            axios.post('/accounts:signUp?key=AIzaSyBmRVGh6ovK6iLGOfIecyMiU5DWL2YHOE4', {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true
            })
            .then( resp => {
                console.log(resp)
                context.commit('authUser', {
                    token: resp.data.idToken,
                    userId: resp.data.localId
                }) 
                context.dispatch('storeUser', authData)
            })
            .catch( error => console.log(error) )
        },

        login(context, authData){
            console.log(authData)
            axios.post('/accounts:signInWithPassword?key=AIzaSyBmRVGh6ovK6iLGOfIecyMiU5DWL2YHOE4',{
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
              })
              .then( resp => {
                console.log(resp)
                context.commit('authUser', {
                    token: resp.data.idToken,
                    userId: resp.data.localId
                }) 
            })
            .catch( error => console.log(error) )
        },

        // storeUser(context, userData){
        //     console.log(userData)
        //     globalAxios.post('https://axios-demo-8f6b9.firebaseio.com/users.json', userData)
        //         .then( resp => console.log(resp) )
        //         .catch( error => console.log(error) )
        // },

        // fetchUser(){
        //     axios.get('/users.json')
        //     .then( resp => {
        //         console.log(resp) 
        //         const data = resp.data
        //         const users = []
        //         for(let key in data)
        //         {
        //             const user = data[key]
        //             user.id = key
        //             users.push(user)
        //         }
        //         console.log(users)
        //         this.email = users[0].email
        //         })
        //     .catch( error => console.log(error) )
        // }
    }
})