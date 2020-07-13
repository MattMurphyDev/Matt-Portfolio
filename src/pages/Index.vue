<template>
  <Layout>
    <main class="w-full flex-grow p-4">
      <h1 class="text-2xl md:text-4xl font-black text-blue-900 mb-2">Matt Murphy</h1>
      <div class="flex mb-2">
        <a href="https://github.com/MattMurphyDev" target="_blank" rel="noopener">
          <i data-feather="github" class="h-5 w-5 mr-2 text-gray-700 hover:text-blue-900"></i>
        </a>
        <a href="https://linkedin.com/in/matt-murphy-2ba0b0126">
          <i data-feather="linkedin" target="_blank" rel="noopener" class="h-5 w-5 text-gray-700 hover:text-blue-900"></i>
        </a>
      </div>
      <p class="text-sm md:text-base">Front End Developer and Maker passionate about creating beautiful and unique products and user interfaces. I've been fascinated with technology and how things work my whole life. Almost 2 years ago I made the transition from a designer to a developer, and found it was the perfect place to utilize both my creative and logical thinking skills.</p>
      <section>
        <h2 class="text-xl font-black mt-2 md:mt-4 text-blue-900">My Skills</h2>
        <div class="w-full flex flex-wrap">
          <div class="px-3 py-1 mr-2 mt-2 leading-none rounded-full bg-blue-900 font-medium text-sm text-white" v-for="skill in skills" :key="skill">{{skill}}</div>
        </div>
      </section>
    </main>
  </Layout>
</template>

<script>
import feather from 'feather-icons'
export default {
  metaInfo: {
    title: "Developer"
  },
  data() {
    return {
      skills: [
        'HTML', 
        'CSS',
        'Bootstrap',
        'TailwindCSS',
        'JavaScript',
        'ES6',
        'jQuery',
        'Vue',
        'Vuex',
        'Vue Router',
        'Nuxt',
        'Gridsome',
        'React',
        'Git',
        'GitHub',
        'Netlify',
        'Terminal'
      ]
    }
  },
  mounted() {
    feather.replace()
  }
};
</script>
