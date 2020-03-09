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

        },
        beforeMount:{

        },
        mounted:{

        },
        beforeUpdate:{

        },
        updated:{

        },
        beforeCreate:{

        },
        created:{

        },
        beforeDestroy:{

        },
        destroyed:{

        },
        filters:{
            mayus(i){
                return i;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>