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
        <img src="/static/fauna-lens-logo-white.png" />
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
        <ul v-if="!$store.state.email" class="navbar-nav ml-auto">
          <li class="nav-item">
            <base-button type="link" class="nav-link nav-link-icon">
              <i class="ni ni-circle-08"></i>
              <span class="nav-link-inner--text">Register</span>
            </base-button>
          </li>
          <li class="nav-item">
            <base-button type="link" class="nav-link nav-link-icon">
              <i class="ni ni-key-25"></i>
              <span class="nav-link-inner--text">Login</span>
            </base-button>
          </li>
        </ul>
        <ul v-else class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/dashboard" type="link" class="nav-link nav-link-icon">
              <i class="ni ni-bullet-list-67"></i>
              <span class="nav-link-inner--text">Dashboard</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contribute" type="link" class="nav-link nav-link-icon">
              <i class="ni ni-world"></i>
              <span class="nav-link-inner--text">Contribute</span>
            </router-link>
          </li>
          <li class="nav-item">
            <base-button
              @click="$store.dispatch('logout')"
              type="link"
              class="nav-link nav-link-icon"
            >
              <i class="ni ni-key-25"></i>
              <span class="nav-link-inner--text">Logout</span>
            </base-button>
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