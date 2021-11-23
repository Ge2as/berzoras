<style>

  .container {
    height: 100vh;
    display: flex;
    flex-direction: row;
    background-color: hsl(0, 0%, 88%);
  }

  .pane {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
  }

  @media only screen and (max-width: 600px) {
    .pane {
      flex-direction: column;
      height: 50vh;
    }
    .container {
      height: 100vh;
      flex-direction: column;
      -webkit-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }

    .pane.left {
      width: 100%;
      height: 70vh;
    }

    .pane.right {
      width: 100%;
      height: 28vh;
    }

  }

  .left {
    align-items: center;
    width: 65%;
    justify-content: center;
  }

  .right {
    justify-content: space-between;
    width: 35%;
  }
</style>

<script>
  import List from './List.svelte';
  import Map from './Map.svelte';
</script>

<div class="container">
  <div class="pane left">
    <List />
  </div>
  <div class="pane right">
    <Map />
  </div>
</div>
