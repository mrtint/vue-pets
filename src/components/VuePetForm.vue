<template>
  <div>
    <b-alert show>Hello, {{ authentication.user.displayName }}</b-alert>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Pet name:"
        label-for="input-1"
        description="Let me know your buddy's name"
      >
        <b-form-input
          id="input-1"
          v-model="form.petName"
          type="text"
          required
          placeholder="Enter pet name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Introduce your buddy:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.desc" required placeholder="she is very clever"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Choose buddy's picture:" label-for="input-3">
        <b-form-file
          v-model="form.file"
          :state="Boolean(form.file)"
          placeholder="Choose a file..."
          drop-placeholder="Drop file here..."
          required
          accept=".jpg, .png, .gif"
          @change="previewImage"
        ></b-form-file>
        <div class="mt-3">Selected file: {{ form.file ? form.file.name : '' }}</div>
        <div>
          <b-img :src="previewImageData"></b-img>
        </div>
      </b-form-group>

      <b-button type="submit" variant="info">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result" v-if="show">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["authentication"],
  data() {
    return {
      form: {
        petName: "",
        file: "",
        desc: ""
      },
      show: true,
      previewImageData: null
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset
      this.form.petName = "";
      this.form.file = "";
      this.form.desc = "";
      this.previewImageData = null;
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    previewImage(evt) {
      var input = event.target;

      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = e => {
          this.previewImageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      } else {
        this.previewImageData = null;
      }
    }
  }
};
</script>