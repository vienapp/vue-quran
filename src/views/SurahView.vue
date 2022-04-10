<script>
import Surah from '../components/Surah.vue'
import Tafsir from '../components/Tafsir.vue'

export default {
    components: {
        Surah,
        Tafsir
    },
    data() {
        return {
            surahs: [],
            bismillah: [],
            tabs: ['Surah', 'Tafsir'],
            currentTab: 'Surah'
        }
    },
    computed: {
        currentTabComponent() {
            return this.currentTab.toLowerCase()
        }
    },
    async created() {
        let {
            number
        } = this.$route.params

        const response = await fetch("https://quran-api-id.vercel.app/surahs/" + number);
        const result = await response.json();
        this.surahs = result.data;
        this.bismillah = this.surahs.bismillah
    }
}
</script>

<template>
    <div class="container mx-auto px-5 md:px-5 lg:px-0">
        <div class="text-md mt-2 breadcrumbs">
            <ul>
                <li>
                    <router-link to="/">Beranda</router-link>
                </li>
                <li>{{ surahs.name }}</li>
            </ul>
        </div>
        <router-link to="/" class="btn btn-sm gap-2 btn-ghost normal-case mt-2 px-0">
            ❮ Kembali ke beranda
        </router-link>
        <div class="mt-4">
            <h1 class="text-4xl font-bold">{{ surahs.name }}</h1>
            <p class="text-md">{{ surahs.translation }}</p>
        </div>
        <div class="tabs mt-5">
            <a class="tab tab-lg tab-bordered" v-for="tab in tabs" :key="tab"
                :class="{ 'tab-active': currentTab === tab}" @click="currentTab = tab">{{tab}}</a>
        </div>
        <div class="card bg-base-100 shadow-xl mb-5">
            <div class="card-body">
                <p v-if="currentTab === 'Surah'" class="text-center text-4xl font-alqalam">{{ bismillah.arab }}</p>
                <div v-if="currentTab === 'Surah'" class="divider"></div>
                <keep-alive>
                    <component :is="currentTabComponent" v-for="surah in surahs.ayahs" :key="surah"
                        :number="surah.number.inSurah" :arab="surah.arab" :translation="surah.translation"
                        :tafsir="surah.tafsir.kemenag.short" />
                </keep-alive>
            </div>
        </div>
    </div>
</template>