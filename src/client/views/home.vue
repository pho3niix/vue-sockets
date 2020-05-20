<template>
    <div id="home">
        <div id="box-name">
            <v-form>
                <p>Enter your name</p>
                <v-text-field
                    v-model="name"
                    type="text"
                    ref="first"
                    @keypress.enter.prevent="send"
                    autocomplete="off"
                ></v-text-field>
            </v-form>
            <v-snackbar
                v-model="snackbar"
            >
                {{ text }}
                <v-btn
                    color="red"
                    text
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </v-snackbar>
        </div>
    </div>
</template>

<script>
    export default {
        name:'home',
        components:{
        },
        data(){
            return{
                name:'',
                text:'Be sure to enter your name',
                snackbar:false
            }
        },
        methods:{
            send(e){
                e.preventDefault();
                if(!this.name){
                    this.snackbar=true;
                }else{
                    let name = this.name;
                    name = name.toString();
                    let mayus = name.charAt(0).toUpperCase() + name.slice(1);
                    localStorage.setItem('token', mayus);
                    
                    this.$router.push({
                        name:'chat'
                    })
                }
            }
        },
        computed:{

        },
        mounted(){
            this.$refs.first.focus();
        }
    }
</script>

<style lang="scss" scoped>
    #home{
        display: flex;
        width: 100%;
        height: 90vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        #box-name{
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            p{
                font-size: 30px;
            }
            .v-text-field{
                width: 100%;
            }
        }
    }
</style>