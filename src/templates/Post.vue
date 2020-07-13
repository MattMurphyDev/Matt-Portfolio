<template>
    <Layout>
        <main v-html="$page.post.content" class="w-full md-content flex-grow p-4"></main>
    </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    description
    content
  }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.post.title
        }
    }
}
</script>
