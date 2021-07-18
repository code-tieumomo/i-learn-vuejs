<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">I Learn Vuejs 3 😂</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Todos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/helloworld">Hello World</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  setup() {
    const validate = () => {
      var form = document.querySelectorAll('.needs-validation')[0];
      form.classList.add('was-validated');
    }

    return {
      validate
    }
  }
}
</script>

<style scoped>

</style>