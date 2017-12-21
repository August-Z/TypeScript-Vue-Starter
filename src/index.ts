import Vue from "vue";
import HelloComponent from "./components/Hello";

let vm = new Vue({
    el: "#app",
    // language=HTML
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5"></hello-component>
    </div>
    `,
    data: {
        name: 'World'
    },
    components: {
        HelloComponent
    }
});