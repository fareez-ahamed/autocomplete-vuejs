<script>
import Vue from 'vue';

export default {

    data() {
        return {
            open: false,
            current: 0
        }
    },

    props: {
        suggestions: {
            type: Array,
            required: true
        },

        selection: {
            type: String,
            required: true,
            twoWay: true
        }
    },

    computed: {
        matches() {
            return this.suggestions.filter((str) => {
                return str.indexOf(this.selection) >= 0;
            });
        },

        openSuggestion() {
            return this.selection !== "" &&
                   this.matches.length != 0 &&
                   this.open === true;
        }
    },

    methods: {
        enter() {
            this.selection = this.matches[this.current];
            this.open = false;
        },

        up() {
            if(this.current > 0)
                this.current--;
        },

        down() {
            if(this.current < this.suggestions.length - 1)
                this.current++;
        },

        isActive(index) {
            return index === this.current;
        },

        change() {
            if (this.open == false) {
                this.open = true;
                this.current = 0;
            }
        },

        suggestionClick(index) {
            this.selection = this.matches[index];
            this.open = false;
        },
    }
}

</script>
<template>
<div style="position:relative" v-bind:class="{'open':openSuggestion}">
    <input class="form-control" type="text" v-model="selection"
        @keydown.enter = 'enter'
        @keydown.down = 'down'
        @keydown.up = 'up'
        @input = 'change'
    />
    <ul class="dropdown-menu" style="width:100%">
        <li v-for="suggestion in matches"
            v-bind:class="{'active': isActive($index)}"
            @click="suggestionClick($index)"
        >
            <a href="#">{{ suggestion }}</a>
        </li>
    </ul>
</div>
</template>
