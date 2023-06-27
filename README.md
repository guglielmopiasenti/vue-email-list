# EXERCISE: Vue email list

1. The code starts by logging a message "Vue ok," and the Vue object to the console using console.log().
2. The code defines a constant variable endpoint which contains the URL for an email endpoint.
3. I initialize a Vue application using Vue.createApp().
4. Inside the Vue application, it defines a data property that contains an empty array called emails.
5. The code defines a created lifecycle hook, which is a callback that is executed when the Vue instance is created.
6. Inside the created hook, a loop runs 10 times.
7. In each iteration of the loop, it makes an HTTP GET request to the endpoint using axios.get().
8. Once the response is received, it pushes the response data (res.data.response) to the emails array using this.emails.push().
9. It also logs the updated emails array to the console using console.log(this.emails).
10. After the loop completes, the Vue application is mounted to an element with the id of "root" using app.mount("#root").
