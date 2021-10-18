
const app = Vue.createApp({

    template: `
        <img :class="gender" v-bind:src="picture" v-bind:alt="firstName">
        <h1>{{firstName}},{{lastName}}</h1>
        <h3>Email: {{email}}</h3>
        <button v-on:click="getUser()" :class="gender" >Get Random User </button>
    `, 

    data(){
        return {
            firstName: 'LeChef',
            lastName: 'LeGois',
            email: "leGois@gmail.com",
            gender: 'male', 
            // this will be tricky because we need to use the v-bind directive, because we can't just set <img src="{{picture}}">
            picture: 'https://randomuser.me/api/portraits/lego/8.jpg',
        }
    },
    methods: {
        async getUser(){
            const res = await fetch(`https://randomuser.me/api`)
            // { results } is destructured because one single user is being returned form a list of users from the api, that's the way the api does it
            const { results } = await res.json()
            console.log(results[0].name.first);
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large

        },
    },
})


app.mount('#app');