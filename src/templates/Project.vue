<template>
    <Layout>
        <main v-html="$page.project.content" class="w-full prose flex-grow p-4"></main>
    </Layout>
</template>

<page-query>
query Project ($id: ID!) {
  project: project (id: $id) {
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
            title: this.$page.project.title
        }
    }
}
</script>
