<script>
import { ref, onErrorCaptured } from 'vue'
import Card from '../components/Card.vue'
import Loading from '../components/Loading.vue'

export default {
    components: {
        Card,
        Loading
    },
    setup() {
        const error = ref();
        
        onErrorCaptured((e) => {
            error.value = e;
            return true;
        });

        return {
            error
        }
    }
}
</script>

<template>
    <div class="container mx-auto px-5 md:px-5 lg:px-0">
        <div v-if="error" class="flex justify-center items-center h-[80vh] text-3xl text-center">Data gagal dimuat,
            silahkan coba lagi.</div>
        <Suspense v-else>
            <Card />
            <template #fallback>
                <div class="flex justify-center items-center h-[80vh]">
                    <Loading />
                </div>
            </template>
        </Suspense>
    </div>
</template>