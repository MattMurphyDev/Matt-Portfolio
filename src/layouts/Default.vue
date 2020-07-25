<template>
  <div class="bg w-screen h-screen">
    <div
      class="flex flex-col items-center h-screen w-full sm:w-4/5 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto"
    >
      <header class="w-full mb-2 p-2 flex flex-row justify-between items-center">
        <g-link
          to="/"
          class="leading-none p-2 rounded-full text-white font-black text-xl bg-blue-900 border-2 border-transparent hover:bg-white hover:text-blue-900 hover:border-blue-900"
        >M</g-link>
        <nav>
          <g-link
            class="mr-2 font-bold text-blue-900 hover:bg-blue-100 py-1 px-2 rounded"
            :class="{'bg-blue-100': $route.path.includes('projects')}"
            to="/projects"
          >Projects</g-link>
          <g-link
            class="mr-2 font-bold text-blue-900 hover:bg-blue-100 py-1 px-2 rounded"
            :class="{'bg-blue-100': $route.path.includes('blog')}"
            to="/blog"
          >Blog</g-link>
          <g-link
            class="font-bold text-blue-900 hover:bg-blue-100 py-1 px-2 rounded"
            :class="{'bg-blue-100': $route.path.includes('uses')}"
            to="/uses"
          >Uses</g-link>
        </nav>
      </header>
      <slot />
      <footer class="flex p-2 mb-3 h-10">
        <a href="https://github.com/MattMurphyDev" target="_blank" rel="noopener">
          <i data-feather="github" class="h-6 w-6 mr-2 text-gray-700 hover:text-blue-900"></i>
        </a>
        <a href="https://linkedin.com/in/matt-murphy-2ba0b0126">
          <i data-feather="linkedin" class="h-6 w-6 text-gray-700 hover:text-blue-900"></i>
        </a>
      </footer>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import feather from 'feather-icons'
export default {
  mounted() {
    feather.replace()
  }
}
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: #333;
}
</style>
