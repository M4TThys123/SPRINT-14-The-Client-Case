<nav>
	<section class="nav__icon--wrapper">
		<button class="nav__icon"><a href="/"><i class='bx bxs-home'></i></a></button>
    <div class="nav__diveder"></div>
		<button class="nav__icon"><i class='bx bxs-file-blank'></i></button>
		<button class="nav__icon"><i class='bx bxs-file-blank'></i></button>
		<button class="nav__icon"><i class='bx bxs-file-blank'></i></button>
		<button class="nav__icon"><i class='bx bxs-file-blank'></i></button>
	</section>
  <section class="nav__link--wrapper">
    <header class="nav__header">
      <h2>1.0 Beoogde leerresultaten</h2>
    </header>
    <ul class="nav__list">
      <li class="nav__item nav__item--active">
        <a  class="nav__link nav__link--active" href="/beoogde-leerresultaten/1">1.1 Humanity-centered digital designers</a>
      </li>
      <li class="nav__item">
        <a  class="nav__link" href="/beoogde-leerresultaten/2">1.2 Competenties</a>
      </li>
      <li class="nav__item">
        <a  class="nav__link" href="/beoogde-leerresultaten/3">1.3 Werkveld en maatschappij</a>
      </li>
      <li class="nav__item">
        <a  class="nav__link" href="/beoogde-leerresultaten/4">1.4 Ontwikkelingen</a>
      </li>
    <li class="nav__item">
      <a  class="nav__link" href="/beoogde-leerresultaten/4">1.4 Ontwikkelingen</a>
      </li>
    </ul>
  </section>

</nav>

<style>
  nav{
    display: flex;
    position: absolute;
    height: 100%;
    max-width: 400px;
    width: 100%;
  }
  .nav__icon--wrapper{
    background-color: var(--yellow);
    width: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav__icon{
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    border-radius: 50%;
    margin-bottom: 1em;
  }
  .nav__icon:first-child{
    margin-bottom: 1em;
    margin-top: 1em;
  }
  .nav__icon i{
    font-size: 2.5em;
    color: #F0EBF0;
  }
  .nav__diveder{
    height: 2px;
    width: 32px;
    border-radius: 5px;
    background-color: #000;
    margin-bottom: 1em;
  }
  .nav__link--wrapper{
    background-color: var(--dark-grey);
    max-width: calc(400px - 72px);
  }

  .nav__header{
    background-color: var(--yellow);
    padding: 1em;
  }

  .nav__list{
    padding: 1em;
  }

  .nav__item{
    margin-bottom: 1em;
    padding: 2px 4px;
  }
  .nav__link{
    color: var(--nav-text-grey);
    font-size: 22px;
  }
  .nav__item--active {
    background-color: var(--nav-accent-color);
  border-radius: 3px;
  }
  .nav__link--active{
    color: #fff;
  }



</style>
