<template>
  <div class="main-content bg-default">
    <!-- Navbar -->
    <base-nav
      type="primary"
      class="navbar-horizontal navbar-dark"
      containerClasses="px-4 container"
      expand
    >
      <router-link slot="brand" class="navbar-brand" to="/">
        <img src="img/brand/white.png" />
      </router-link>

      <template v-slot="{ closeMenu }">
        <!-- Collapse header -->
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <img src="img/brand/green.png" />
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                @click="closeMenu"
                class="navbar-toggler"
                aria-label="Toggle sidenav"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <!-- Navbar items -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link nav-link-icon" to="/register">
              <i class="ni ni-circle-08"></i>
              <span class="nav-link-inner--text">Register</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link nav-link-icon" to="/login">
              <i class="ni ni-key-25"></i>
              <span class="nav-link-inner--text">Login</span>
            </router-link>
          </li>
        </ul>
      </template>
    </base-nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>