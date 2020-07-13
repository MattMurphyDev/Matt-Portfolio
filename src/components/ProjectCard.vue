<template>
    <article class="flex mb-1">
        <g-link :to="info.node.path" class="w-full h-full -mx-2 px-2 py-1 hover:bg-blue-100 rounded">
            <h2 class="text-xl font-bold text-blue-900">{{info.node.title}}</h2>
        </g-link>
    </article>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: ['info']
}
</script>