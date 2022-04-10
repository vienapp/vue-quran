<script>
export default {
    props: ['number', 'arab', 'translation', 'audio']
}
</script>

<template>
    <div>
        <div class="flex items-center justify-between mt-5">
            <span class="badge badge-[#fffffe] badge-outline badge-lg mr-3">{{ number }}</span>
            <p class="text-right text-4xl font-alqalam">{{ arab }}</p>
        </div>
        <p class="mt-5"><span class="font-bold">Artinya:</span> {{ translation }}</p>
        <audio controls class="mt-3 w-full sm:w-auto">
            <source :src="audio" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>
        <div class="divider"></div>
    </div>
</template>