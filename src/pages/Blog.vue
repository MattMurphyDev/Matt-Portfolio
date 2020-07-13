<template>
  <Layout>
    <main class="w-full flex-grow p-4">
      <section>
        <BlogCard v-for="post in $page.posts.edges" :key="post.title" :info="post" />
      </section>
    </main>
  </Layout>
</template>

<page-query>
query {
    posts: allPost {
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
import BlogCard from "../components/BlogCard";

export default {
  components: { BlogCard },
  metaInfo: {
    title: "Blog"
  }
};
</script>