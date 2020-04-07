<template>
    <div class="about">
        <h1>{{ about }}</h1>
        <h2>{{ hero }}</h2>
        <img id="hero" src="../assets/final.png" alt="">
        <!-- <ul v-for="(index,item) of data" :key="item.id">
            <li>{{item.nombre}}</li>
            <li>{{item.apellido}}</li>
            <li>{{item.i}}</li>
        </ul> -->
        <input type="text" v-model="name">
        <input type="text" v-model="apellido">
    </div>
</template>

<script>
    export default {
        name: 'about',
        components: {

        },
        data() {
            return {
                about: 'This is a Little example about',
                hero: 'How implement Socket.io on a Vue application',
                data:'',
                name:'',
                apellido:'',
                mensaje:'',
                bool:false
            }
        },
        created(){
            // this.axios.get('/api/locochona')
            // .then(res=>{
            //     this.data = res.data;
            // })
            // this.axios.post('/api/lochona', {
            //     name:this.name,
            //     apellido: this.apellido
            // })
            // .then(res=>{
            //     this.mensaje = res.msj;
            //     this.bool = res.ok;
            //     setTimeout(()=>{
            //         this.bool = !this.bool;
            //     }, 2000)
            // })
        }
    }
</script>

<style lang="scss" scoped>
    .about{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        #hero{
            padding: 0;
            width: 30%;
        }
    }
</style>