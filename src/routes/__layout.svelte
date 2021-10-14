<script>
    import Nav from "./../lib/nav.svelte"
    import "./../styles/reset.css";
    import "./../styles/globals.css";
</script>

<div class="flex-layout">
    <header class="absolute">
        <Nav />
    </header>
    <slot></slot>
    <p class="footer">&copy; Seldo 2021</p>
</div>

<style>
.absolute {
    position: absolute;
    width: 100%;
  }
</style>
