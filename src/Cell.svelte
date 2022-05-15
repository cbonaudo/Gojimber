<script>
  export let pristine;
  export let value;
  export let selected;
</script>

<button
  on:click
  disabled={!pristine}
  style:background-color={selected
    ? "darkseagreen"
    : pristine
    ? "darkslategrey"
    : "grey"}
  style:opacity={pristine ? 1 : 0.5}
>
  {value}
</button>

<style>
  button {
    font-weight: bold;
    font-size: 16px;
    width: 80%;
    color: white;
  }
</style>
