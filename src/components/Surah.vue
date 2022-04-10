<script>
export default {
    props: ['number', 'arab', 'translation']
}
</script>

<template>
    <div>
        <div class="flex items-center justify-between mt-5">
            <span class="badge badge-[#fffffe] badge-outline badge-lg mr-3">{{ number }}</span>
            <p class="text-right text-4xl font-alqalam">{{ arab }}</p>
        </div>
        <p class="mt-5"><span class="font-bold">Artinya:</span> {{ translation }}</p>
        <div class="divider"></div>
    </div>
</template>