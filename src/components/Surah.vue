<script>

export default {
    props: {
        surahs: {
            type: Object,
            default: {}
        }
    },
    setup(props) {
        
    }
}
</script>

<template>
    <div v-for="surah in surahs.verses" :key="surah">
        <div class="flex items-center justify-between mt-5">
            <span class="badge badge-[#fffffe] badge-outline badge-lg mr-3">{{ surah.number.inSurah }}</span>
            <p class="text-right text-4xl font-alqalam">{{ surah.text.arab }}</p>
        </div>
        <p class="mt-5"><span class="font-bold">Artinya:</span> {{ surah.translation.id }}</p>
        <audio controls class="mt-3 w-full sm:w-auto">
            <source :src="surah.audio.primary" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>
        <div class="divider"></div>
    </div>
</template>