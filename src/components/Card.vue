<script>
import { ref } from 'vue'

export default {
    async setup() {
        const surahs = ref([])

        const response = await fetch("https://api.quran.sutanlab.id/surah");
        const result = await response.json();
        surahs.value = result.data;

        return {
            surahs
        }
    }
}
</script>

<template>
    <div class="my-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div v-for="surah in surahs" :key="surah.number" class="card bg-neutral text-[#fffffe] shadow-xl">
            <div class="card-body">
                <h2 class="card-title"><span
                        class="badge badge-primary badge-outline badge-md">{{ surah.number }}</span>{{ surah.name.transliteration.id }}
                </h2>
                <p class="text-[#ddd6d6]">Surah {{ surah.revelation.id }}</p>
                <p class="text-[#ddd6d6]">{{ surah.numberOfVerses }} Ayat</p>
                <div class="card-actions mt-3 justify-end">
                    <router-link class="btn btn-sm btn-primary btn-block" :to="`/surah/${surah.number}`">Baca
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>