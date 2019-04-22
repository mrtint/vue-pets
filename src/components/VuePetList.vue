<template>
  <b-container fluid>
    <b-img v-for="img in list" :key="img.id" :src="img.src" :alt="img.petName" :title="img.desc" thumbnail fluid ></b-img>
    <hr/>
    <VuePetForm/>
  </b-container>
</template>

<script>
import VuePetForm from "./VuePetForm.vue";

export default {
  name: "pet-list",
  components : {
    VuePetForm
  },
  data: function() {
    return {
      greeting: "hello test!",
      list: [
        {
          id: 1,
          userName: "John doe",
          petName: "HelloWorld",
          src: "https://picsum.photos/250/250/?image=40",
          desc: "he is my pet."
        },
        {
          id: 2,
          userName: "Jenny",
          petName: "World",
          src: "https://picsum.photos/250/250/?image=41",
          desc: "she is my pet."
        },
        {
          id: 3,
          userName: "Andy",
          petName: "Tommy",
          src: "https://picsum.photos/250/250/?image=38",
          desc: "there is no description"
        },
        {
          id: 4,
          userName: "Hansan",
          petName: "Pen",
          src: "https://picsum.photos/250/250/?image=22",
          desc: "blank"
        },
        {
          id: 5,
          userName: "Tanaka",
          petName: "Penguin",
          src: "https://picsum.photos/250/250/?image=11",
          desc: "petto"
        }
      ]
    };
  }
};
</script>