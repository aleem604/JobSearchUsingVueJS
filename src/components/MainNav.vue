<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav class="flex items-center justify-between p-4">
        <div class="flex items-center">
          <a
            href="/"
            class="flex items-center text-gray-900 hover:text-blue-500"
          >
            <img src="../assets/logo.png" alt="Logo" class="h-8 w-8 mr-2" />
            <span class="text-lg font-semibold">{{ company }}</span></a
          >
          <h2 class="flex items-center h-full ml-8">
            Developed by &nbsp;<b>{{ author }}</b>
          </h2>
        </div>
        <ul class="flex space-x-4">
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-500">Home</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-500">About</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-500">Services</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-500">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Job Search",
      author: "By John Doe",
    };
  },
};
</script>
