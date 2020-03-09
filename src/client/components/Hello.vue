<template>
    <div class="hello">
        <h1>{{ greet }}</h1>
        <img id="cool" src="../assets/app.jpg" alt="Fullstack-app">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        props: {
            msg: String
        },
        data() {
            return {
                greet: 'Welcome to the jungle',
                imageLink: ('./client/assets/app.png')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hello{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        #cool{
            width: 60%;
        }
    }
</style>