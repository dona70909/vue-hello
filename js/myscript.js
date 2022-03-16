const app = new Vue(
    {
        el:'#app',

        data: {
            welcomeMsg: 'Hello Vue.js',
            imageUrl:'https://picsum.photos/200',
            linkImageInput: "",
        },

        methods: {

            getImage: function() {
                return this.linkImageInput;
            }
        },

    }
);