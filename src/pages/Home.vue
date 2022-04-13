<template>
  <div
    class="dark fixed inset-0 flex flex-col items-center justify-center bg-blue-gray-900"
  >
    <div class="text-primary flex font-montserrat items-end">
      <div class="font-bold logo-large">MARX</div>
      <div class="font-thin logo-large">-MEDIA</div>
      <div class="font-thin logo-small">.net</div>
    </div>
    <div class="menu-bar">
      <div class="container mx-auto flex flex-1">
        <div class="mx-auto">
          <router-link to="/admin" class="nav-item">
            <span>Admin</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.menu-bar {
  @apply absolute inset-x-0 dark:border-blue-gray-500 2xl:(bottom-0 border-t);
}
.logo-large {
  @apply text-base 2xl:text-9xl;
}
.logo-small {
  @apply text-base 2xl:(text-6xl pb-2);
}
.nav-item {
  @apply uppercase flex-1 flex items-center justify-center font-medium px-3 py-2
  hover:(bg-blue-gray-800) 
  dark:(text-blue-gray-500);
}
.nav-item:hover {
  color: var(--color-primary);
}
</style>
