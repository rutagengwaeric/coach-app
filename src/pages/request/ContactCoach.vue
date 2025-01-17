<template>
  <form action="" @submit.prevent="sendRequest">
    <div class="form-control">
      <label for="email">Your Email</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div class="form-control">
      <label for="message">Your Message</label>
      <textarea id="message" rows="5" v-model="message"></textarea>
    </div>
    <p class="errors" v-if="!formIsValid"> Please  Enter Email correctly or Message not emply</p>
    <div class="actions">
      <base-button>Send Request</base-button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true
    }
  },
  method: {
    sendRequest() {

      if (!this.email || !this.message.includes('@') || this.message == '') {
        this.formIsValid = false
        return
      }
      if (this.email && this.message) {
        this.formIsValid = true
        const contactData = {
          email: this.email,
          message: this.message
        }
        console.log('Sending Request', contactData)

      }

    }
  }
}
</script>
