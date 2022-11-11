<script>
  import { page } from "$app/stores";

  let navOpen = false;

  function handleNav() {
    navOpen = !navOpen;
  }

  const hoofdstuk1 = [
    {
      id: 1.1,
      name: "1.1 Humanity-centered digital designers",
      route: "/beoogde-leerresultaten/",
      hoofdstuk: 1,
      apiId: 5,
    },
    {
      id: 1.2,
      name: "1.2 Competenties",
      route: "/beoogde-leerresultaten/2",
      hoofdstuk: 1,
      apiId: 11,
    },
    {
      id: 1.3,
      name: "1.3 Werkveld en maatschappij",
      route: "/beoogde-leerresultaten/3",
      hoofdstuk: 1,
      apiId: 2,
    },
    {
      id: 1.4,
      name: "1.4 Ontwikkelingen",
      route: "/beoogde-leerresultaten/4",
      hoofdstuk: 1,
      apiId: 4,
    },
    {
      id: 1.5,
      name: "1.5 Ambities en dilemma’s",
      route: "/beoogde-leerresultaten/5",
      hoofdstuk: 1,
      apiId: 12,
    },
  ];
  const hoofdstuk2 = [
    {
      id: 2.1,
      name: "2.1 Onderwijsvisie en didactiek",
      route: "/onderwijsleeromgeving",
      hoofdstuk: 2,
      apiId: 15,
    },
    {
      id: 2.2,
      name: "2.2 Curriculumopbouw",
      route: "/Onderwijsleeromgeving/2",
      hoofdstuk: 2,
      apiId: 0,
    },
    {
      id: 2.3,
      name: "2.3 Borging onderwijskwaliteit",
      route: "/Onderwijsleeromgeving/3",
      hoofdstuk: 2,
      apiId: 18,
    },
    {
      id: 2.4,
      name: "2.4 Onderwijs en praktijk",
      route: "/Onderwijsleeromgeving/4",
      hoofdstuk: 2,
      apiId: 1,
    },
    {
      id: 2.5,
      name: "2.5 Onderwijs en onderzoek",
      route: "/Onderwijsleeromgeving/5",
      hoofdstuk: 2,
      apiId: 7,
    },
    {
      id: 2.6,
      name: "2.6 Internationalisering",
      route: "/Onderwijsleeromgeving/6",
      hoofdstuk: 2,
      apiId: 16,
    },
    {
      id: 2.7,
      name: "2.7 Studenten begeleiding",
      route: "/Onderwijsleeromgeving/7",
      hoofdstuk: 2,
      apiId: 14,
    },
    {
      id: 2.8,
      name: "2.8 Digitale en analoge voorzieningen",
      route: "/Onderwijsleeromgeving/8",
      hoofdstuk: 2,
      apiId: 22,
    },
    {
      id: 2.9,
      name: "2.9 Ambities en dilemma's",
      route: "/Onderwijsleeromgeving/9",
      hoofdstuk: 2,
      apiId: 10,
    },
  ];
  const hoofdstuk3 = [
    {
      id: 3.1,
      name: "3.1 Toetsbeleid en -plan",
      route: "/toetsing",
      hoofdstuk: 3,
      apiId: 17,
    },
    {
      id: 3.2,
      name: "3.2 Toetsprogramma en -praktijk",
      route: "/toetsing/2",
      hoofdstuk: 3,
      apiId: 9,
    },
    {
      id: 3.3,
      name: "3.3 Toetsing en feedback",
      route: "/toetsing/3",
      hoofdstuk: 3,
      apiId: 4,
    },
    {
      id: 3.4,
      name: "3.4 Borging en kwaliteit",
      route: "/toetsing/4",
      hoofdstuk: 3,
      apiId: 11,
    },
    {
      id: 3.5,
      name: "3.5 Ambities en dilemma's",
      route: "/toetsing/5",
      hoofdstuk: 3,
      apiId: 21,
    },
  ];
  const hoofdstuk4 = [
    {
      id: 4.1,
      name: "4.1 Afstudeerproces",
      route: "/gerealiseerde-leerresultaten",
      hoofdstuk: 4,
      apiId: 19,
    },
    {
      id: 4.2,
      name: "4.2 Borging afstudeerniveau vanuit examencommissie",
      route: "/gerealiseerde-leerresultaten/2",
      hoofdstuk: 4,
      apiId: 8,
    },
    {
      id: 4.3,
      name: "4.3 Ambities en dilemma's",
      route: "/gerealiseerde-leerresultaten/3",
      hoofdstuk: 4,
      apiId: 20,
    },
  ];

  let navHoofdstuk = hoofdstuk4;

  function navButtonEen() {
    navHoofdstuk = hoofdstuk1;
  }

  function navButtonTwee() {
    navHoofdstuk = hoofdstuk2;
  }

  function navButtonDrie() {
    navHoofdstuk = hoofdstuk3;
  }

  function navButtonVier() {
    navHoofdstuk = hoofdstuk4;
  }
</script>
<div class="flex">
  <nav class="sidenav" class:open={navOpen}>
    <button class="closebtn" on:click={handleNav}>&times;</button>
  
    <section class="nav__icon--wrapper">
      <button class="nav__icon"><a href="/"><i class="bx bxs-home" /></a></button>
        <div class="nav__diveder" />
      <button class="nav__icon" on:click={navButtonEen} class:button__active={navHoofdstuk == hoofdstuk1}>
        <i class="bx bxs-file-blank" />
      </button>
      <button class="nav__icon" on:click={navButtonTwee} class:button__active={navHoofdstuk == hoofdstuk2}>
        <i class="bx bxs-file-blank" />
      </button>
      <button class="nav__icon" on:click={navButtonDrie} class:button__active={navHoofdstuk == hoofdstuk3}>
        <i class="bx bxs-file-blank" />
      </button>
      <button class="nav__icon" on:click={navButtonVier} class:button__active={navHoofdstuk == hoofdstuk4}>
        <i class="bx bxs-file-blank" />
      </button>
    </section>
  
    <section class="nav__link--wrapper">
      <header class="nav__header">
        <h2>1.0 Beoogde leerresultaten</h2>
      </header>
      <ul class="nav__list">
        {#each navHoofdstuk as paragraaf}
        <li class="nav__item" class:nav__item--active={$page.url.pathname === paragraaf.route}>
          <a
            class="nav__link" 
            href={paragraaf.route}
            class:nav__link--active={$page.url.pathname === paragraaf.route}
          >
            {paragraaf.name}
          </a>
        </li>
      {/each}
      </ul>
    </section>
  </nav>

  <button class="hamButton" class:pushMainToRight={navOpen} on:click={handleNav}>
    <i class="bx bx-menu-alt-left" />
  </button>

  <main class="" class:pushMainToRight={navOpen}>
    <slot />
  </main>
</div>

<style>
  /* Hamburger Menu icon */
  .hamButton {
    position: absolute;
    left: 20px;
    display: inline-block;
    cursor: pointer;
    z-index: 2;
    font-size: 2.5em;
    transition: 0.3s;
  }
/* DOM MAIPULATION */
.pushMainToRight {
    position: absolute;
    transform: translate3d(400px, 0, 0);
  }
  .open {
    transform: translate3d(0px, 0, 0);
  }

/* NAV MENU */
nav {
    display: flex;

    height: 100vh;
    max-width: 400px;
    width: 100%;

    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;

    background-color: #2f3135;

    overflow-x: hidden; /* Disable horizontal scroll */

    transition: 0.3s;
    transform: translate3d(-400px, 0, 0);
  }
  nav a{
    transition: 0.3s;
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

  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
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

/* MAIN */
main{
  transition: all 0.3s;
}

</style>
