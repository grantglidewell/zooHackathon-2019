<template>
  <div class="dashboard">
    <card class="mb-3" shadow>
      Welcome back, <badge type="primary">{{ $store.state.email }}</badge>
      <br />
      <div class="row mt-3">
        <div class="col-12 col-md-3">
          <div>Current Rank:</div>
          <base-button
            @click="isEmojiChooser = true"
            type="clear"
            class="p-0 w-100"
            title="Change Emoji"
          >
            <badge type="success" class="w-100">
              <rank
                :rank="$store.getters.rank"
                :emoji="$store.state.rank.emoji"
              />
            </badge>
          </base-button>
          <modal :show.sync="isEmojiChooser">
            <template slot="header">
              <h5 class="modal-title" id="exampleModalLabel">
                Change your Emoji
              </h5>
            </template>
            <p>
              Animal emojis are collected for completing contributions. Every
              time you rank up, you get a random one.
            </p>
            <EmojiChooser />
          </modal>
        </div>
        <div class="col-12 col-md-9">
          <base-progress
            type="success"
            :height="5"
            :value="($store.getters.totalEntries % 5) * 20"
            :label="`Progress to rank ${$store.getters.rank + 1}`"
          ></base-progress>
        </div>
      </div>
    </card>
    <card shadow class="mb-4">
      <div class="row">
        <div class="col-12 col-md-8">
          <h3>Top Contibutors</h3>
          <Leaderboard />
        </div>
        <div class="col-12 col-md-4">
          <h3>Highest Ranks</h3>
          <div style="max-height:398px;overflow-y:auto;overflow-x:hidden">
            <base-table
              :columns="['rank', 'user']"
              :data="topContributors"
              typed="striped"
            >
            </base-table>
          </div>
        </div>
      </div>
    </card>
    <card shadow>
      <div class="d-sm-flex align-items-center text-center text-sm-left">
        <h3>Recent Contributions:</h3>
        <div class="flex-grow-1"></div>
        <base-button type="primary" @click="isContribute = true">
          <i class="ni ni-world"></i> Contribute
        </base-button>
        <modal :show.sync="isContribute">
          <template slot="header">
            <h5 class="modal-title" id="exampleModalLabel">Contribute</h5>
          </template>
          <Form @submit="isContribute = false" />
        </modal>
      </div>
      <tabs fill class="flex-column flex-md-row">
        <tab-pane>
          <span slot="title">
            You
          </span>
          <Entries :entries="$store.getters.userEntries" />
        </tab-pane>

        <tab-pane>
          <span slot="title">
            Friends
          </span>
          <Entries :entries="$store.getters.friendEntries" />
        </tab-pane>

        <tab-pane>
          <span slot="title">
            All
          </span>
          <Entries :entries="$store.getters.entries" />
        </tab-pane>
      </tabs>
    </card>
  </div>
</template>

<script>
import Entries from "@/components/Entries";
import Form from "@/components/Form";
import Leaderboard from "@/components/Leaderboard";
import Rank from "@/components/Rank";
import EmojiChooser from "@/components/EmojiChooser";

export default {
  components: {
    Entries,
    Form,
    Leaderboard,
    Rank,
    EmojiChooser
  },

  data: () => ({
    isContribute: false,
    isEmojiChooser: false
  }),

  computed: {
    topContributors() {
      const contrs = [];
      this.$store.getters.topContributors.forEach(contr => {
        contrs.push({ user: contr[0], rank: Math.floor(contr[1] / 5) });
      });
      return contrs;
    }
  }
};
</script>

<style>
.modal-body {
  padding-top: 0 !important;
}
</style>