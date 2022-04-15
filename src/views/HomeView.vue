<script>
import Card from '../components/Card.vue'
import Loading from '../components/Loading.vue'

export default {
    components: {
        Card, Loading
    }
}
</script>

<template>
    <div class="container mx-auto px-5 md:px-5 lg:px-0">
        <Suspense>
            <Card />
            <template #fallback>
                <div class="flex justify-center items-center h-[80vh]">
                    <Loading />
                </div>
            </template>
        </Suspense>
    </div>
</template>