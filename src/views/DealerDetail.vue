<template>
  <div class="container">
    <router-link to="/" class="back_to_overview">Overzicht</router-link>
    <h1>Dealer - {{dealer.title}}</h1>
    <div class="dealer">
        <span class="title">{{dealer.title}}</span>
        <span class="address">{{dealer.city}} - {{dealer.address}}</span>
        <span class="body">{{dealer.body}}</span>
    </div>
    <h1>Gegevens wijzigen</h1>
    <form>
        <input type="text" ref="title"  placeholder="Titel">
        <input type="text" ref="city" placeholder="Stad">
        <input type="text" ref="address" placeholder="Adres">
        <textarea ref="body" placeholder="Beschrijving" cols="30" rows="10"></textarea>
        <button class="button button-green" @click.prevent="getFormValues()">Wijzigen</button>
    </form>
  </div>
</template>

<script>
import DealerStore from "../stores/DealerStore";
import axios from 'axios';

export default {
    name: "Dealers",
    data() {
        return {
            dealer:[]
        }
    },
    methods: {
        getDealer(id) {
            const config = { headers: { 'Accept': 'application/json' } };
            axios.get('https://stud.hosted.hr.nl/0901065/dealers/?id=' + id, config)
            .then(response => {
                this.dealer = response.data;
                this.$refs.title.value      = this.dealer.title;
                this.$refs.city.value       = this.dealer.city;
                this.$refs.address.value    = this.dealer.address;
                this.$refs.body.value       = this.dealer.body;
            })
            .catch(error => {
                console.log(error);
            })
        },
    },
    created() {
        this.getDealer(this.$route.params.id);
    }
}
</script>

<style scoped>
    .dealer {
        display:block;
        background:#f2f2f2;
        padding: 20px;
    }

    .back_to_overview {
        background:#3aa0c3;
        border:1px solid #3aa0c3;
        color:#fff;
        text-decoration:none;
        padding:10px 20px;
        border-radius:5px;
        font-size:16px;
        margin-top:20px;
        display:inline-block;
    }

    .back_to_overview:hover {
        color:#3aa0c3;
        background:#fff;
    }

    span.body,
    span.title,
    span.address {
        display:block;
        margin-bottom:10px;
    }
</style>