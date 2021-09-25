<template>
  <div class="home">
    <div class="flex flex-col items-center">
    <div>Username</div>
    <input type="text" class="w-40 h-10 bg-gray-200 rounded my-8"/>
    <div>Password</div>
    <input type="password" class="w-40 h-10 bg-gray-200 rounded my-8"/>
        <router-link to="/card" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign In
    </router-link>
    </div>
    

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
