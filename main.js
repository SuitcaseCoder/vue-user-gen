// we have access to Vue via the CDN we injected in our HTML
// createApp() is a method available to us via the Vue object
const app = Vue.createApp({
    // we are creating a template (remember template holds HTML to be rendered to the virtual dom)
    // notice that inside of .createApp() we are passing in an object where we are storing the template property in which we are saving to it a value of an HTML element
    template: `<h1>Hello World</h1>`
})


// app is what we defined to be our created app that gets rendered to the DOM
// .mount() is a method that will "mount"/display/render the element we pass in as an argument to it
// so here, app.mount('#app') is going to render whatever's in our app div
app.mount('#app');