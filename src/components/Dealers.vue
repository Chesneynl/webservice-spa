<template>
    <div>
        <h1>Dealers</h1>
        <div v-if="succesMessage.length" class="succesMessage">{{succesMessage}}</div>
        <ul class="dealers">
            <li class="dealer" v-for="dealer of dealersData.dealers" v-bind:key="dealer.id">
                <span class="title">{{dealer.title}}</span>
                <span class="address">{{dealer.city}} - {{dealer.address}}</span>
                <button class="button button-red" v-on:click="deleteDealer(dealer.id)">Delete</button>
                <router-link :to="{ name: 'DealerDetail', params: { id: dealer.id }}">About</router-link>
            </li>
        </ul>
        <h2>Dealer toevoegen</h2>
        <div v-if="errorMessage.length" class="errorMessage">{{errorMessage}}</div>
        <form >
            <input type="text" ref="title" placeholder="Titel">
            <input type="text" ref="city" placeholder="Stad">
            <input type="text" ref="address" placeholder="Adres">
            <textarea ref="body" placeholder="Beschrijving" cols="30" rows="10"></textarea>
            <button class="button button-green" @click.prevent="getFormValues()">Toevoegen</button>
        </form>
        
        <!-- <div class="pagination">
            <div class="pag_link first">
                {{dealersData.pagination._links.first.page}}
            </div>
            <div class="pag_link prev">
                {{dealersData.pagination._links.previous.page}}
            </div>
            <div class=" current">
                {{dealersData.pagination.currentPage}}
            </div>
            <div class="pag_link next">
                {{dealersData.pagination._links.next.page}}
            </div>
            <div class="pag_link last">
                {{dealersData.pagination._links.last.page}}
            </div>
        </div> -->


    </div>
    
</template>

<script>
import DealerStore from "../stores/DealerStore";

export default {
    name: "Dealers",
    data() {
        return {
            dealersData: DealerStore.data,
            succesMessage: "",
            errorMessage: "",
            title: "",
            city: "",
            address: "",
            description: ""
        }
    },
    methods: {
        getFormValues () {
            var title   = this.$refs.title.value;
            var city    = this.$refs.city.value;
            var address = this.$refs.address.value
            var body    = this.$refs.body.value;

            if (title.length && city.length && address.length && body.length) {
                this.addDealer(title, body, city, address);
                this.errorMessage = "";
            }
            else {
                this.errorMessage = "Niet alle velden zijn correct ingevuld!"
            }  
        },
        addDealer: function (title, body, city, address) {
            DealerStore.methods.addDealer(title, body, city, address);
            this.succesMessage = "Dealer: '" + title + "' is succesvol toegevoegd.";
        },
        deleteDealer: function (id) {
            DealerStore.methods.deleteDealer(id);
            this.succesMessage = "Dealer met id: " + id + " is succesvol verwijderd";
        }
    },
    created() {
        DealerStore.methods.getAllDealers();
    }
}
</script>

<style scoped>
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    input {
        display:block;
        width:100%;
        padding:8px 10px;
        margin-bottom:10px;
    }

    textarea {
        display:block;
        width:100%;
        padding:10px 10px;
        margin-bottom:10px;
    }

    h2 {
        margin-bottom:20px;
    }
    .dealers {
        margin-top: 30px;
    }

    .errorMessage {
        margin-bottom:10px;
        color:red;
        font-weight:bold;
        font-size:12px;
    }

    .dealer {
        text-align:left;
        margin-bottom: 10px;
        background: #f2f2f2;
        padding: 20px;
        position:relative;
    }

    .dealer span.title,
    .dealer span.address {
        display:block;
    }

    .pagination {
        position:relative;
    }

    .current {
        position:absolute;
        left:50%;
        top:10px;
    }

    .pag_link.first {
        margin-left:0px;
    }

    .pag_link.last {
        float:right;
    }

    .pag_link.next {
        float:right;
    }

    .pag_link {
        display:inline-block;
        background: #f2f2f2;
        margin-left:20px;
        text-align:center;
        padding:10px 15px;
        cursor:pointer;
    }

    .pag_link:hover {
        background: #53c3ea;
        color:#fff;
    }

    .succesMessage {
        border-radius: 5px;
        color:#fff;
        background: #38c172;
        margin-bottom: 10px;
        margin-top: 10px;
        display: block;
        padding: 15px 10px;
    }
</style>
