<script>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import Surah from '../components/Surah.vue'
import Tafsir from '../components/Tafsir.vue'

export default {
    components: {
        Surah,
        Tafsir
    },
    async setup() {
        const surahs = ref([])
        const bismillah = ref([])
        const tabs = ref(['Surah', 'Tafsir'])
        const currentTab = ref('Surah')
        const route = useRoute()

        const currentTabComponent = computed(() => currentTab.value.toLowerCase())

        let { number } = route.params

        const response = await fetch("https://api.quran.sutanlab.id/surah/" + number);
        const result = await response.json();
        surahs.value = result.data;
        bismillah.value = surahs.bismillah

        return {
            surahs,
            bismillah,
            tabs,
            currentTab,
            currentTabComponent
        }
    },
}
</script>

<template>
    <div class="text-md mt-2 breadcrumbs">
        <ul>
            <li>
                <router-link to="/">Beranda</router-link>
            </li>
            <li>{{ surahs.name.transliteration.id }}</li>
        </ul>
    </div>
    <router-link to="/" class="btn btn-sm gap-2 btn-ghost normal-case mt-2 px-0">
        ❮ Kembali ke beranda
    </router-link>
    <div class="mt-4">
        <h1 class="text-4xl font-bold">{{ surahs.name.transliteration.id }}</h1>
        <p class="text-md">{{ surahs.name.translation.id }}</p>
    </div>
    <div class="tabs mt-5">
        <a class="tab tab-lg tab-bordered" v-for="tab in tabs" :key="tab" :class="{ 'tab-active': currentTab === tab}"
            @click="currentTab = tab">{{tab}}</a>
    </div>
    <div class="card bg-base-100 shadow-xl mb-5">
        <div class="card-body">
            <p v-if="currentTab === 'Surah'" class="text-center text-4xl font-alqalam">
                {{ surahs.preBismillah === null ? '' : surahs.preBismillah.text.arab  }}</p>
            <div v-if="currentTab === 'Surah' && surahs.preBismillah !== null" class="divider"></div>
            <keep-alive>
                <component :is="currentTabComponent" :surahs="surahs" />
            </keep-alive>
        </div>
    </div>
</template>