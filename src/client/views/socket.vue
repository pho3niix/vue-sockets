<template>
    <div class="room">
        <ul>
            <li>Type a username into first input.</li>
            <li>Type a message into second input.</li>
            <li>Open this app on new window.</li>
            <li>Finally press enter or click the button and see the magic.</li>
        </ul>
        <form @submit.prevent="sendMessage">
            <v-text-field ref="name" label="Name" type="text" v-model="name"></v-text-field>
            <v-text-field ref="first" label="Message" type="text" v-model="message"></v-text-field>
            <v-btn type="submit" class="primary">Send Message</v-btn>
        </form>
        <br>
        <ul id="chat" v-for="item of datos" :key="item.id">
            <li>{{item.name | mayus}} dice: {{item.message}}</li>
        </ul>
    </div>
</template>

<script>
    import {socket} from '../main';
    export default {
        name:'Socket',
        components:{

        },
        data(){
            return{
                name:'',
                message:'',
                datos:[]
            }
        },
        methods:{
            sendMessage(e){
                console.log('este desmadre funciona');
                e.preventDefault();
                if(!this.message==''){
                    socket.emit('newTestForm',{
                        name: this.name,
                        message: this.message
                    }, 
                    res=>{
                        this.message='';
                        this.$refs.first.focus();
                    })
                }
            },
            saveSome(){

            }
        },
        mounted(){
            socket.on('newTestForm', (obj)=>{
                this.datos.push(obj);
            });
            this.$refs.name.focus();
        },
        filters:{
            mayus(value){
                value = value.toString();
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .room{
        display: block;
        padding: 2vh 4vw 4vw 4vw;

        #chat{
            li{
                list-style: none;            
            }
        }
    }
</style>