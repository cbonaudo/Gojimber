<script>
  export let pristine;
  export let value;
  export let selected;
</script>

<button
  on:click
  disabled={!pristine}
  style:background-color={selected ? "cyan" : ""}
>
  {value}
</button>

<style>
  button {
    font-weight: bold;
    width: 80%;
  }
</style>
