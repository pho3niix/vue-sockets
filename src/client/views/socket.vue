<template>
    <div class="room">
        <div id="box-chat">
            <div id="nothing" v-if="datos.length==0">
                <span>Send the first message</span>
            </div>
            <div v-else>
                <ul class="chat">
                    <li v-for="item of datos" :key="item.id" :style="color(item.name)">
                        <span id="username">{{item.name | mayus}}</span><br>
                        <p id="message">{{item.message}}</p><br>
                        <p id="date">{{item.date}}</p></li>
                </ul>
            </div>
        </div>
        <div id="rest">
            <form id="forms" @submit.prevent="sendMessage" autocomplete="off">
                <v-container fluid>
                    <v-row>
                        <v-col
                            cols="12"
                        >
                            <v-text-field hide-details ref="first" label="Message" type="text" v-model="message" single-line></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </form>
        </div>
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
                name:localStorage.getItem('token'),
                message:'',
                date:'',
                datos:[],
                user:'',
                background:''
            }
        },
        methods:{
            sendMessage(e){
                e.preventDefault();
                if(!this.message==''){
                    this.user = this.name;
                    socket.emit('newTestForm',{
                        name: this.name,
                        message: this.message,
                        date:this.time(new Date),
                    }, 
                    res=>{
                        this.message='';
                        this.$refs.first.focus();
                    })
                }
            },
            color(e){
                if(e==this.user){
                    return {
                        'background-color':'rgb(66, 185, 131)',
                        'align-self':'flex-end'
                    };
                }else{
                    return {
                        'background-color':'rgb(143, 143, 143)',
                        'align-self':'flex-start'
                    };
                }
            },
            time(date){
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12;
                minutes = minutes < 10 ? '0'+minutes : minutes;
                let strTime = hours + ':' + minutes + ' ' + ampm;
                return strTime;
            }
        },
        mounted(){
            socket.on('newTestForm', (obj)=>{
                this.datos.push(obj);
            });
            this.$refs.first.focus();
        },
        filters:{
            mayus(value){
                value = value.toString();
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
        },
        computed:{
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/socket.scss';
</style>