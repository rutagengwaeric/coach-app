<template>
        <section>
            FILTER
        </section>

        <section>
            LIST OF COACHES 
            <ul v-if="hasCoaches">
                <li v-for="coaches in filteredCoaches" :key="coaches.id">
                    <h2> {{ coaches.firstName }} </h2>
                </li>
            </ul>
            <p v-else>No coaches found</p>
        </section>
</template>

<script>
export default{
    computed : {
        filteredCoaches(){
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches(){
            return this.$store.getters['coaches/hasCoaches'];
        }
    }
}

</script>