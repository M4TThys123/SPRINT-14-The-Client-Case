<script>
	import { page } from '$app/stores';
</script>

<nav class="" >
  <section class="nav__icon--wrapper">
    <button class="nav__icon"><a href="/"><i class="bx bxs-home" /></a></button>
    <div class="nav__diveder" />
    <button class="nav__icon"><i class="bx bxs-file-blank" /></button>
    <button class="nav__icon"><i class="bx bxs-file-blank" /></button>
    <button class="nav__icon"><i class="bx bxs-file-blank" /></button>
    <button class="nav__icon"><i class="bx bxs-file-blank" /></button>
  </section>
  <section class="nav__link--wrapper">
    <header class="nav__header">
      <h2>1.0 Beoogde leerresultaten</h2>
    </header>

    <ul class="nav__list">
      <li class="nav__item" class:nav__item--active={$page.url.pathname === '/beoogde-leerresultaten/1'}>
        <a class="nav__link" class:nav__link--active={$page.url.pathname === '/beoogde-leerresultaten/1'} href="/beoogde-leerresultaten/1"
          >1.1 Humanity-centered... </a
        >
      </li>
      <li class="nav__item" class:nav__item--active={$page.url.pathname === '/beoogde-leerresultaten/2'}>
        <a class="nav__link" href="/beoogde-leerresultaten/2" class:nav__link--active={$page.url.pathname === '/beoogde-leerresultaten/2'}
          >1.2 Competenties</a
        >
      </li>
      <li class="nav__item" class:nav__item--active={$page.url.pathname === '/beoogde-leerresultaten/3'}>
        <a class="nav__link" href="/beoogde-leerresultaten/3" class:nav__link--active={$page.url.pathname === '/beoogde-leerresultaten/3'}
          >1.3 Werkveld en maat...</a
        >
      </li>
      <li class="nav__item" class:nav__item--active={$page.url.pathname === '/beoogde-leerresultaten/4'}>
        <a class="nav__link" href="/beoogde-leerresultaten/4" class:nav__link--active={$page.url.pathname === '/beoogde-leerresultaten/4'}
          >1.4 Ontwikkelingen</a
        >
      </li>
      <li class="nav__item" class:nav__item--active={$page.url.pathname === '/beoogde-leerresultaten/5'}>
        <a class="nav__link" href="/beoogde-leerresultaten/5" class:nav__link--active={$page.url.pathname === '/beoogde-leerresultaten/5'}
          >1.5 Ambities en dilemma’s</a
        >
      </li>
    </ul>
  </section>
</nav>

<style>
/* NAV MENU */
  nav {
    display: flex;
    height: 100vh;
    max-width: 400px;
    width: 100%;

  }
  .nav__icon--wrapper {
    background-color: var(--yellow);
    min-width: 72px;
    max-width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav__icon {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    border-radius: 50%;
    margin-bottom: 1em;
  }
  .nav__icon:first-child {
    margin-bottom: 1em;
    margin-top: 1em;
  }
  .nav__icon i {
    font-size: 2.5em;
    color: #f0ebf0;
  }
  .nav__diveder {
    height: 2px;
    width: 32px;
    border-radius: 5px;
    background-color: #000;
    margin-bottom: 1em;
  }
  .nav__link--wrapper {
    background-color: var(--dark-grey);
    width: calc(400px - 72px);
  }

  .nav__header {
    background-color: var(--yellow);
    padding-left: 1em;
    height: 80px;
    display: flex;
    align-items: center;
  }

  .nav__list {
    padding: 1em;
  }

  .nav__item {
    margin-bottom: 1em;
    padding: 2px 4px;
  }
  .nav__link {
    color: var(--nav-text-grey);
    font-size: 22px;
  }
  .nav__item--active {
    background-color: var(--nav-accent-color);
    border-radius: 3px;
  }
  .nav__link--active {
    color: #fff;
  }
</style>
