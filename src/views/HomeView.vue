<script>
import Card from '../components/Card.vue'

export default {
    components: {
        Card
    },
    data() {
        return {
            surahs: []
        }
    },
    async created() {
        const response = await fetch("https://api.quran.sutanlab.id/surah");
        const result = await response.json();
        this.surahs = result.data;
    }
}
</script>

<template>
    <div class="container mx-auto">
        <div class="my-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" >
            <Card 
            v-for="surah in surahs" 
            :key="surah.number" 
            :name="surah.name.transliteration.id"
            :number="surah.number"
            :revelation="surah.revelation.id"
            :numberAyahs="surah.numberOfVerses" />
        </div>
    </div>
</template>