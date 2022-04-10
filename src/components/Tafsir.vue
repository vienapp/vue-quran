<script>
export default {
    props: ['number', 'tafsir']
}
</script>

<template>
    <div>
        <div class="flex items-start justify-between mt-5">
            <span class="badge mt-1 mr-3 badge-[#fffffe] badge-outline badge-lg">{{ number }}</span>
            <p class="text-md">{{ tafsir }}</p>
        </div>
        <div class="divider"></div>
    </div>
</template>