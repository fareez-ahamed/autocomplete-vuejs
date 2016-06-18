import Vue from 'vue';
import Autocomplete from './Autocomplete.vue';

new Vue({
    el: 'body',

    components: { Autocomplete },

    data: {
        cities : [
            'Bangalore','Chennai','Cochin','Delhi','Kolkata','Mumbai'
        ],

        value: ''
    }

});
