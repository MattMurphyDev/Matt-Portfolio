<template>
    <Layout>
        <div v-html="$page.project.content"></div>
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
