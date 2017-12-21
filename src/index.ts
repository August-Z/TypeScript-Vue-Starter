import Vue from "vue";
import HelloComponent from "./components/Hello";

let vm = new Vue({
    el: "#app",
    // language=HTML
    template: `
        <div>
            <div>Hello {{name}}!</div>
            Name：<input v-model="name" type="text"/>
            <HelloCompint></HelloCompint>
        </div>
    `,
    data: {
        name: 'World'
    },
    components: {
        HelloComponent
    }
});