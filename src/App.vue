<template>
  <MainNav />
  <h1 class="text-6xl mt-8">Hello vue</h1>
  <HelloWorld msg="This is from Hello World" />
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import MainNav from "@/components/MainNav.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    MainNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
