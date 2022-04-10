<script>
import Card from '../components/Card.vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    components: {
        Card, Loading
    },
    data() {
        return {
            surahs: [],
            loading: true,
            fullPage: false
        }
    },
    async created() {
        const response = await fetch("https://api.quran.sutanlab.id/surah");
        const result = await response.json();
        this.surahs = result.data;
        this.loading = false
    }
}
</script>

<template>
    <div class="container mx-auto px-5 md:px-5 lg:px-0">
        <loading v-model:active="loading" :is-full-page="fullPage" loader="dots" background-color="#181818" color="#50c4cf" />
        <div v-if="loading === false" class="my-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card v-for="surah in surahs" :key="surah.number" :name="surah.name.transliteration.id" :number="surah.number"
                :revelation="surah.revelation.id" :numberAyahs="surah.numberOfVerses" :surahNumber="surah.number" />
        </div>
    </div>
</template>