<script>

    import Header from "../components/+header.svelte"
    import Nav from "../components/+nav.svelte"
    import Footer from "../components/+footer.svelte"
</script>

<!-- <Header/> -->
<Nav/>
<main>
    <slot></slot>
</main>

<Footer/>

<style></style>