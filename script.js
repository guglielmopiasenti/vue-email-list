console.log("Vue ok,", Vue);

// adding endpoint with emails
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

// Initializing vue
const app = Vue.createApp({
  data() {
    return {
      emails: [],
    };
  },
  created() {
    for (let i = 0; i < 10; i++) {
      axios.get(endpoint).then((res) => {
        this.emails.push(res.data.response);
        console.log(this.emails);
      });
    }
  },
});

app.mount("#root");
