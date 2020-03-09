<template>
    <div class="err">
        <center>
            <h1>{{ not }}</h1>
            <h3>{{ greet }}</h3>
        </center>
    </div>
</template>

<script>
export default {
  name: 'notf',
  data() {
      return {
          not: '404 Not Found',
          greet: "The page you looking for is doesn't exist"
      }
  }
};
</script>

<style lang="scss">
    .err{
        margin-top: 20%;
    }
</style>