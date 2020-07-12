<template>
    <Layout>
        <section>
            <article v-for="post in $page.posts.edges" :key="post.title">
                <h2>{{post.node.title}}</h2>
                <p>{{post.node.description}}</p>
                <a :href="post.node.path">Read More</a>
            </article>
        </section>
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
                project
            }
        }
    }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>