<script>
export default {
    props: ['name', 'number', 'revelation', 'numberAyahs']
}
</script>

<template>
    <div class="card bg-neutral text-[#fffffe] shadow-xl">
        <div class="card-body">
            <h2 class="card-title"><span class="badge badge-primary badge-outline badge-md">{{ number }}</span>{{ name }}</h2>
            <p class="text-[#ddd6d6]">Surah {{ revelation }}</p>
            <p class="text-[#ddd6d6]">{{ numberAyahs }} Ayat</p>
            <div class="card-actions mt-3 justify-end">
                <button class="btn btn-sm btn-primary btn-block">Baca</button>
            </div>
        </div>
    </div>
</template>