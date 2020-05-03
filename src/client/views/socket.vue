<template>
    <div class="room">
        <div id="rest">
            <ul id="how">
                <li>Type a username into first input.</li>
                <li>Type a message into second input.</li>
                <li>Open this app on new window.</li>
                <li>Finally press enter or click the button and see the magic.</li>
            </ul>
            <form id="forms" @submit.prevent="sendMessage" autocomplete="off">
                <v-text-field ref="name" label="Name" type="text" v-model="name"></v-text-field>
                <v-text-field ref="first" label="Message" type="text" v-model="message"></v-text-field>
                <v-btn type="submit" class="primary">Send Message</v-btn>
            </form>
        </div>
        <div id="box-chat">
            <ul class="chat">
                <li v-for="item of datos" :key="item.id" :style="color(item.name)">
                    <span id="username">{{item.name | mayus}}</span><br>
                    <p id="message">{{item.message}}</p><br>
                    <p id="date">{{item.date}}</p></li>
            </ul>
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
                name:'',
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
                        'align-self':'flex-start'
                    };
                }else{
                    return {
                        'background-color':'rgb(143, 143, 143)',
                        'align-self':'flex-end'
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
            this.$refs.name.focus();
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
        padding-left: 4vw;
        padding-right: 4vw;
        padding-top: 2vh;
        #rest{
            height: 47vh;
            #how{
                height: 35%;
            }
            #forms{
                height: 65%;
            }
        }
        #box-chat{
            height: 40vh;
            overflow-y: auto;
            &::-webkit-scrollbar {
                display: none;
            }
            .chat{
                flex: 1 1 auto;
                display: flex;
                flex-direction: column-reverse;
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