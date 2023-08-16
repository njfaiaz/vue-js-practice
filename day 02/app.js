var app = Vue.createApp({
    data(){
        return{
            tutorialInfo:{
                name: "Vue js bangla ", 
                githubLink: "https://github.com/njfaiaz?tab=repositories",
            },
            htmlCode: '<a href="https://github.com/njfaiaz?tab=repositories">Github</a>'
        };
    }
});

app.mount("#app");