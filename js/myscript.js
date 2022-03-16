const app = new Vue(
    {
        el:'#app',

        data: {
            welcomeMsg: 'Hello Vue.js',
            imageUrl:'https://picsum.photos/200',
            linkImageInput: "",
            myImgDisplay:"d-none",
        },

        methods: {
            getImage: function(){
                this.myImgDisplay="d-block";
                console.log("click");
                console.log(this.linkImageInput);
                return this.linkImageInput;
            }
        }
    }       
);