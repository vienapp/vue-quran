<script>
export default {
    props: {
        surahs: {
            type: Object,
            default: {}
        }
    }
}
</script>

<template>
    <div v-for="surah in surahs.verses" :key="surah">
        <div class="flex items-start justify-between mt-5">
            <span class="badge mt-1 mr-3 badge-[#fffffe] badge-outline badge-lg">{{ surah.number.inSurah }}</span>
            <p class="text-md">{{ surah.tafsir.id.short }}</p>
        </div>
        <div class="divider"></div>
    </div>
</template>