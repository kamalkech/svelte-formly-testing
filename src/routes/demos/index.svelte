<style>
  .custom-form :global(.form-group) {
    padding: 10px;
    border: solid 1px #333;
    margin: 5px 0; 
  }
  h2 {
    font-size: x-large;
    font-weight: 500;
  }
  button {
    margin-top: 36px;
  }
</style>

<script lang="js">
  import { valuesForm, Field } from 'svelte-formly';
  import fieldsYou from './fieldsYou';
  import fieldsYouDo from './fieldsYouDo';

</script>

<h1>Demographics</h1>


<form>
  <h2>About You</h2>
  <p>Information on your preferences and demographic information</p>
	<Field fields={fieldsYou} />
  <hr />
  <h2>About what You Do</h2>
  <Field fields={fieldsYouDo} />
  <hr />

	<button class="btn btn-primary" type="submit">Submit</button>
</form>

