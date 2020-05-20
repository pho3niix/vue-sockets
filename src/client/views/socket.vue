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
                            md="1"
                        >
                            <v-text-field ref="name" label="Name" type="text" v-model="name" readonly></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="10"
                        >
                            <v-text-field ref="first" label="Message" type="text" v-model="message"></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="1"
                        >
                            <v-btn type="submit" class="primary">Send Message</v-btn>
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
    .room{
        display: block;
        padding-left: 1vw;
        padding-right: 1vw;
        height: 90vh;
        overflow-y: hidden;
        margin-top: 1vh;
        #rest{
            display: flex;
            height: 8vh;
            width: 96%;

            #forms{
                display: block;
                width: 100%;
                height: 18%;
            }
        }
        #box-chat{
            height: 76vh;
            overflow-y: auto;
            flex: 1 1 0;
            display: flex;
            flex-direction: column-reverse;
            #nothing{
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                span{
                    font-size: 24px;
                }
            }
            &::-webkit-scrollbar {
                display: none;
            }
            .chat{
                flex: 1 1 auto;
                display: flex;
                flex-direction: column;
                background: white;
                #username{
                    font-size: 12px;
                    font-weight: 600;
                }
                #date{
                        font-size: 12px;
                        font-weight: 600;
                        text-align: right;
                        width: 100%;
                        align-self: flex-start;
                        padding: 0px;
                        margin: 0px;
                        margin-top: -5vh;
                }
                #message{
                    width: 96%;
                    position: relative;
                    padding: 0px;
                    margin: 0px;
                }
                li{
                    list-style: none;
                    padding: 1vh;
                    margin-bottom: 1.5vh;
                    color:white;
                    border-bottom-left-radius: 10px;
                    border-top-right-radius: 10px;
                    width: 50%;
                }
            }
        }
    }
</style>