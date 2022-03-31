 /* eslint-disable */
 <template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      v-model="email"
      name="email"
      autocomplete="off"
      placeholder="Email"
    />
    <br />
    <input
      type="password"
      v-model="password"
      autocomplete="off"
      name="password"
      placeholder="Password"
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      /* console.log() */
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
