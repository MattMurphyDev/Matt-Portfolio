<template>
    <Layout>
        <section>
            <article v-for="project in $page.projects.edges" :key="project.title">
                <h2>{{project.node.title}}</h2>
                <p>{{project.node.description}}</p>
                <a :href="project.node.path">Read More</a>
            </article>
        </section>
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
export default {
    metaInfo: {
        title: 'Projects'
    }
}
</script>