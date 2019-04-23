<template>
  <b-container fluid>
    <b-img
      v-for="img in list"
      :key="img.id"
      :src="img.src"
      :alt="img.petName"
      :title="img.desc"
      thumbnail
      fluid
    ></b-img>
    <hr>
    <VuePetForm v-if="isLogin()" :authentication="authentication"/>
    <hr>
    <div>
      <b-button variant="danger" v-if="!isLogin()" @click="googleLogin">Login with Google</b-button>
      <b-button variant="warning" v-if="isLogin()" @click="googleLogout">Logout</b-button>
    </div>
  </b-container>
</template>

<script>
import VuePetForm from "./VuePetForm.vue";
import firebase from "firebase";

export default {
  name: "pet-list",
  components: {
    VuePetForm
  },
  data: function() {
    return {
      greeting: "hello test!",
      authentication: {
        token: null,
        user: null
      },
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
  },
  methods: {
    googleLogin(e) {
      var provider = new firebase.auth.GoogleAuthProvider();
      var obj = this;
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          obj.authentication.token = result.credential.accessToken;
          obj.authentication.user = result.user;
          console.log(obj.authentication);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    googleLogout(e) {
      var obj = this;
      firebase
        .auth()
        .signOut()
        .then(function() {
          obj.authentication.token = null;
          obj.authentication.user = null;
          console.log("logout");
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    isLogin() {
      return (
        this.authentication.token != null && this.authentication.user != null
      );
    }
  }
};
</script>