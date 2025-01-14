<template>
    <form @submit.prevent="submitData">
        <div class="form-control">
            <label for="firstname"> First Name</label>
            <input type="text" id="firstname"  v-model.trim="firstName"/>
        </div> 
        <div class="form-control">
            <label for="lastname"> Last Name</label>
            <input type="text" id="lastname" v-model.trim="lastName" />
        </div> 
        <div class="form-control">
            <label for="description"> Description</label>
            <textarea id="description" rows="5" v-model.trim="description"></textarea>
        </div> 
        <div class="form-control">
            <label for="rate"> Hourly Rate </label>
            <input type="" id="rate" v-model.trim="rate"  />
        </div> 
        <div class="form-control">
            <h3> Areas of Expertise </h3>
            <div>
                <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
                <label for="frontend"> Frontend Development </label>
            </div>
            <div>
                <input type="checkbox" id="backend" value="backend" v-model="areas"/>
                <label for="backend"> Backend Development </label>
            </div>
            <div>
                <input type="checkbox" id="career" value="career"  v-model="areas"/>
                <label for="career"> Career Development </label>
            </div>
        </div>
        <base-button>Register</base-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            description: '',
            rate: '',
            areas: []
        }
    },
    methods : {
        submitData() {
            const coachData = {
                firstName: this.firstName,
                lastName: this.lastName,
                description: this.description,
                rate: this.rate,
                areas: this.areas
            }
            console.log(coachData);
        }
    }
}
</script>