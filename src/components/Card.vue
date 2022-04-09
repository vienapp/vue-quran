<script>
export default {
    props: ['name', 'number', 'revelation', 'numberAyahs', 'surahNumber']
}
</script>

<template>
    <div class="card bg-neutral text-[#fffffe] shadow-xl">
        <div class="card-body">
            <h2 class="card-title"><span class="badge badge-primary badge-outline badge-md">{{ number }}</span>{{ name }}</h2>
            <p class="text-[#ddd6d6]">Surah {{ revelation }}</p>
            <p class="text-[#ddd6d6]">{{ numberAyahs }} Ayat</p>
            <div class="card-actions mt-3 justify-end">
                <router-link class="btn btn-sm btn-primary btn-block" :to="`/surah/${surahNumber}`">Baca</router-link>
            </div>
        </div>
    </div>
</template>