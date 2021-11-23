<style>
  #list-items {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    overflow: scroll;
  }

  .list-item {
    font-family: 'Lato', sans-serif;
    font-size: 1.2em;
    line-height: 1.5em;
    width: 100%;
    margin: 20px 30px;
    border-bottom: #ccc dotted 4px;
    padding-bottom: 10px;
    --min: 1em; /* minimum value */
    --val: 2.5vw; /* preferred value = 5% viewport width */
    --max: 2em; /* maximum value */
  }

  img {
    width: 100%;
  }

  .typed-in,
  h2,
  p {
    /* Font minimum, preferred and maximum value */
    font-size: clamp(var(--min), var(--val), var(--max));
  }

  .typed-in {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    padding-bottom: 80px;
    --min: 1em; /* minimum value */
    --val: 2vw; /* preferred value = 5% viewport width */
    --max: 1.5em; /* maximum value */
  }

  .typed-out {
    /* Font minimum, preferred and maximum value */
    font-size: clamp(var(--min), var(--val), var(--max));
  }

  .list-item {
    font-family: 'Lato', sans-serif;
    --min: 1em; /* minimum value */
    --val: 2.5vw; /* preferred value = 5% viewport width */
    --max: 2em; /* maximum value */
  }

  @media only screen and (max-width: 600px) {
    .typed-out,
    p {
      text-indent: 15px !important;
    }
    .list-item {
      margin: 6px 6px;
    }
    .head {
    margin: 6px 0px 0 6px !important;
  }
  }

  .typed-out {
    font-family: 'Lato', sans-serif;
    text-indent: 40px;
    line-height: 1.5em;
    font-weight: 700;
    overflow: hidden;
    border-right: 0.15em solid hsl(0, 0%, 70%);
    white-space: nowrap;
    animation: typing 2.0s steps(30, end) forwards, blinking 0.7s infinite;
    --min: 1.3em; /* minimum value */
    --val: 2vw; /* preferred value = 5% viewport width */
    --max: 2em; /* maximum value */
    width: 0;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blinking {
    from {
      border-color: transparent;
    }
    to {
      border-color: hsl(0, 0%, 72%);
    }
  }

  .head {
    margin: 30px 0px 0 40px;
  }

  .tail {
    margin: 20px 40px;
    padding-bottom: 40px;
  }

  .list-item > p {
    font-family: 'Lato', sans-serif;
    color: #222;
    text-indent: 40px;
    --min: 0.8em; /* minimum value */
    --val: 1vw; /* preferred value = 5% viewport width */
    --max: 1.2em; /* maximum value */
  }

  h2 {
    color: #000 !important;
    --min: 1em; /* minimum value */
    --val: 2.5vw; /* preferred value = 5% viewport width */
    --max: 2em; /* maximum value */
    font-family: 'Lato', sans-serif;
  }

</style>

<script>
  import { onMount, onDestroy } from 'svelte';
  import inView from 'in-view';
  import { listItems, sprudgeArticle } from './consts.js';
  import { activeListItem, activeMapItem } from './stores.js';

  // Define the ref
  let listRef;

  onMount(async () => {
    // Set a nicer offset so it's not a hard cutoff
    inView.offset(200);

    listRef.addEventListener('scroll', function () {
      // Active list item is top-most fully-visible item
      const visibleListItems = Array.from(
        document.getElementsByClassName('list-item')
      ).map(inView.is);
      // If it's a new one, update active list item
      const topMostVisible = visibleListItems.indexOf(true);
      if (topMostVisible !== $activeMapItem) {
        activeMapItem.set(topMostVisible);
      }
    });
  });

  // Update list scroll position when active list item is updated via map
  const unsubscribeActiveListItem = activeListItem.subscribe(
    (newActiveListItem) => {
      if (listRef) {
        listRef.scrollTop = document.getElementById(
          `list-item-${newActiveListItem}`
        ).offsetTop;
      }
    }
  );

  // Remove listener on unmount
  onDestroy(unsubscribeActiveListItem);
</script>

<div id="list-items" bind:this="{listRef}">
  <div class="head">
    <div
      style="background: transparent url(https://wttr.in/Berzoras_0tqp_lang=en.png?format=3) no-repeat; height: 40px; width: 150px; filter: invert(88%);"
    ></div>
    <div class="typed-in">Explore Beržoras:</div>
    <div class="typed-out">
      Where to stay and what to see...
    </div>
  </div>
  {#each listItems as listItem, index}
    <div class="list-item" id="list-item-{index}">
      <a href="{listItem.website}" target="_blank">
        <img src="{listItem.image}" alt="{listItem.name}" loading="lazy"/>
        <h2>
          {listItem.name}
        </h2>
      </a>
      <p>{@html listItem.description}</p>
    </div>
  {/each}
  <div class="tail"></div>
</div>
