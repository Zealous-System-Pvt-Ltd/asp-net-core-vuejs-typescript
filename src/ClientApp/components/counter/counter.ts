import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import VueResource from 'vue-resource';
import axios from 'axios';

@Component
export default class CounterComponent extends Vue {
    currentcount: number = 0;
    mounted() {
        Vue.use(VueResource)
    }
    // methods() {
    //     this.incrementCounter();
    // }

    incrementCounter() {
        //this.currentcount++;
        var formData = new FormData();
        formData.append('value', 'bar');

        let authorization = "Bearer OTzuE7V02JZ3dNlU3eHcRIaFdZCvGAJ0x4EYQk0WFnzN_m6wZUyzN1yHYPM8ADT1Ss403J3luEvKrOPd6wGtwPbKB0nXtkN-S5GI21s-BHJRCOBffGu22g7OumpJ86SWhIPu6oFv5DVp2dooh_jafWdK880_bDO9pe6HkdbwtadRVItyOQ48vFNZE0ywggKoLDSYNDTbZQuEKqFV212Uj9t3rlvwgWXf_LpxUYSL0b9KesYq8BCJCdy04hDuTt5Aj9Z2Xrz-IualUPz29F1aeA";
        // this.$http.post("https://localhost:44399/api/values", formData, { headers: { "content-type": "application/json" } }).then(result => {
        //     // this.response = result.data;
        //     debugger
        // }, error => {
        //     console.error(error);
        // });
let da = "hitesh";
        axios({
            method: 'post',
            url: 'https://localhost:44399/api/values',
            data: {da: "dfghfjdgf"}
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
