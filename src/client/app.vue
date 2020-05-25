<template>
    <v-app>
        <div id="app">
            <nav id="nav">
                <ul>
                    <li>
                        <span>Sander</span>
                    </li>
                    <li v-if="name">
                        <span id="name">{{name}}</span>
                        <v-btn @click="logout" style="margin-left:10px;" icon>
                            <i class="mdi mdi-logout-variant v-icon"></i>
                        </v-btn>
                    </li>
                </ul>
            </nav>
            <router-view/>
        </div>
    </v-app>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name:'main',
        components:{

        },
        data(){
            return{
            }
        },
        methods:{
            logout(){
                this.$store.commit('setName', null)
                this.$router.push({
                    name:'home'
                })
            }
        },
        computed:{
            ...mapState([
                'name'
            ])
        },
        mounted(){
            console.log('hello world');
        }
    }
</script>

<style lang="scss">
    *{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
    .v-icon{
        display: flex;
        font-size:20px;
    }
    input[type='button']{
        cursor: pointer;
        outline: none;
    }

    input[type=text]:focus{
        outline: none;
    }

    button:focus{
        outline: 0;
    }

    #app{
        height: 100vh;
        overflow-y: hidden;
    }
    
    #app::-webkit-scrollbar {
        display: none;
    }

    #nav{
        height: 10vh;
        width: 100vw;
        background-color: #324759;
        display: flex;
        align-items: center;

        a{
            color: rgb(255, 255, 255);
            text-decoration: none;
            &.router-link-exact-active{
                color: #42b983;
            }
        }

         ul{
             display: flex;
             justify-content: space-between;
             align-items: center;
             width: 96%;
             li{
                float: left;
                list-style: none;        
                display: flex;
                align-items: center;
                 span{
                     color: white;
                     font-size: 20px;
                 }
                 #name{
                     color: white;
                     font-size: 17px;
                 }
             }
         }
    }

</style>