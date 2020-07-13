<template>
  <Layout>
    <main class="w-full flex-grow p-4">
      <section>
        <ProjectCard v-for="project in $page.projects.edges" :key="project.title" :info="project" />
      </section>
    </main>
  </Layout>
</template>

<page-query>
query {
    projects: allProject {
        edges {
            node {
                path
                title
                description
            }
        }
    }
}
</page-query>

<script>
import ProjectCard from "../components/ProjectCard";

export default {
  components: { ProjectCard },
  metaInfo: {
    title: "Projects"
  }
};
</script>