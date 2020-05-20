<template>
    <div>
        {{nombre | mayus}}
    </div>
</template>

<script>
    import about from './About';
    export default {
        name:'home',
        components:{
            about
        },
        data(){
            return{
                nombre:'hugo'
            }
        },
        methods:{

        },
        computed:{

        }
    }
</script>

<style lang="scss" scoped>

</style>