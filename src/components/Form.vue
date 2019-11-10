<template>
  <div class="form">
    <div v-if="step === 1">
      <h2>Thank you for your desire to contribute.</h2>
      <p>Please keep the following guidelines in mind while adding data</p>
      <ul>
        <li>Try to find latin animal names if possible</li>
        <li>Remember to enter the price per animal</li>
        <li>
          If an animal is possibly endangered it will be expedited to
          verification
        </li>
      </ul>
      <small>
        looking for a place to start? try
        <a
          href="https://www.terraristik.com/tb/list_classifieds.php"
          target="_blank"
        >
          terraristik
        </a>
        or
        <a href="http://www.faunaclassifieds.com/" target="_blank">
          faunaclassifieds
        </a>
      </small>
      <form @submit="onSubmit" class="mt-5">
        <base-alert v-if="error" type="danger">
          You must fill out each field before submitting.
        </base-alert>
        <div class="row">
          <div class="col-12">
            <base-input
              v-model="url"
              label="Page URL"
              placeholder="https://shadysite.com/"
            />
          </div>
          <div class="col-12">
            <base-input
              v-model="name"
              label="Animal Name"
              placeholder="Redfoot Tortoises"
            />
          </div>
          <div class="col-12">
            <base-input
              v-model="price"
              label="Animal Price"
              placeholder="450"
            />
          </div>
        </div>
        <base-button type="primary" @click="onSubmit">
          Submit Contribution
        </base-button>
        <span v-if="endangered" class="text-red">
          This animal is possibly endangered
        </span>
      </form>
    </div>
    <div v-else-if="step === 2" class="text-center">
      <h2>You Ranked Up!</h2>
      <p>
        You are now
        <badge type="success"> RANK {{ $store.getters.rank }}</badge>
      </p>
      <base-button v-if="!newEmoji" @click="unlockEmoji" type="primary">
        <i class="ni ni-lock-circle-open"></i>
        Unlock A New Emoji!
      </base-button>
      <div v-else style="font-size: 2rem" class="mb-2">
        {{ randomEmoji }}
      </div>
      <div :class="{ invisible: !isEmojiChosen }">
        <h3>
          Congrats on your new emoji! <br />
          Would you like to equip it?
        </h3>
        <base-button @click="equipAndClose" type="primary">
          Equip & Close
        </base-button>
        <base-button @click="close">
          Close
        </base-button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-console */
import { addTableRow } from "../util/api";
import emojis from "@/data/emojis";
import { debounce } from "../util/debounce";
export default {
  data: () => ({
    url: "",
    name: "",
    price: "",
    endangered: false,
    error: false,
    step: 1,
    newEmoji: false,
    isEmojiChosen: false,
    randomEmoji: emojis.getRandom(),
    emojis: emojis.all
  }),
  methods: {
    onSubmit: async function() {
      if (!this.url || !this.name || !this.price) {
        return (this.error = true);
      }

      this.error = false;

      const res = await addTableRow([
        {
          fields: {
            user: this.$store.state.email,
            url: this.url,
            animalName: this.name,
            animalPrice: this.price,
            endangered: this.endangered
          }
        }
      ]);
      if (res.error) {
        return alert("there was a problem with the submission");
      }

      this.$store.dispatch("setSessionContribution", res.records[0]);
      this.$store.dispatch("addDashboardEntry", res.records[0]);

      this.url = "";
      this.name = "";
      this.price = "";

      if (this.$store.getters.userEntries.length % 5 === 0) {
        this.step = 2;
      } else {
        this.$emit("submit");
      }
    },
    handleIsEndangered: debounce(({ name, list, callback }) => {
      const names = name.split(" ");
      const isEndangered = names.filter(n => {
        if (list.includes(n)) {
          return true;
        }
      });
      return callback(Boolean(isEndangered.length));
    }, 250),

    unlockEmoji() {
      this.newEmoji = true;
      let time = 250;
      const locked = this.emojis.filter(emoji => {
        return this.$store.state.rank.unlocked.indexOf(emoji);
      });
      for (let i = 1; i <= 50; i++) {
        time -= 10 / i;
        setTimeout(() => {
          this.randomEmoji = locked[Math.floor(Math.random() * locked.length)];
          if (i === 50) {
            this.isEmojiChosen = true;
            this.$store.dispatch("unlockEmoji", this.randomEmoji);
          }
        }, time * i);
      }
    },
    equipAndClose() {
      this.$store.dispatch("changeEmoji", this.randomEmoji);
      this.close();
    },
    close() {
      this.$emit("submit");
      this.step = 1;
      this.newEmoji = false;
      this.isEmojiChosen = false;
    }
  },
  watch: {
    name(value) {
      if (value.length > 3) {
        this.handleIsEndangered({
          name: value,
          list: this.$store.state.endangeredSpecies,
          callback: val => (this.endangered = val)
        });
      }
      this.endangered = false;
    }
  }
};
</script>
<style scoped>
</style>