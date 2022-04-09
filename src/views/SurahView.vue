<script>
export default {
    data() {
        return {
            surahs: {},
            title: {}
        }
    },
    async created() {
        let { number } = this.$route.params

        const response = await fetch("https://api.quran.sutanlab.id/surah/" + number);
        const result = await response.json();
        this.surahs = result.data;
        
        this.title = this.surahs.name.transliteration
    }
}
</script>

<template>
    <div>
        <keep-alive>
            <div v-text="title.id"></div>
        </keep-alive>
    </div>
</template>