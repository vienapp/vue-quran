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
        const response = await fetch("https://quran-api-id.vercel.app/surahs");
        const result = await response.json();
        this.surahs = result.data;
        console.log(this.surahs)
    }
}
</script>

<template>
    <div class="container mx-auto px-5 md:px-5 lg:px-0">
        <div class="my-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" >
                <Card 
                v-for="surah in surahs" 
                :key="surah.number" 
                :name="surah.name"
                :number="surah.number"
                :revelation="surah.revelation"
                :numberAyahs="surah.numberOfAyahs"
                :surahNumber="surah.number" 
                />
        </div>
    </div>
</template>