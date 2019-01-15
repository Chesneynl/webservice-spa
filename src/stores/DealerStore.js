import axios from 'axios';

const DealerStrore = {
    data: {
        dealers: [],
        dealer: ["title", "test"],
        pagination: [],
    },
    methods: {
        addDealer(titleInput, bodyInput, cityInput, addressInput) {
            const config = { headers: { 'Content-Type': 'application/json' } };
            const data = {title: titleInput, body: bodyInput, city: cityInput, address: addressInput};
            axios.post('https://stud.hosted.hr.nl/0901065/dealers/', data, config)
            .then(response => {
                this.getAllDealers();
            })
            .catch(error => {
                console.log(error);
            })
        },
        deleteDealer(id) {
            axios.delete('https://stud.hosted.hr.nl/0901065/dealers/?id=' + id)
            .then(response => {
                this.getAllDealers();
            })
        },
        getDealer(id) {
            const config = { headers: { 'Accept': 'application/json' } };
            axios.get('https://stud.hosted.hr.nl/0901065/dealers/?id=' + id, config)
            .then(response => {
                DealerStrore.data.dealer = response.data
            })
            .catch(error => {
                console.log(error);
            })
        },
        getAllDealers() {
            const config = { headers: { 'Accept': 'application/json' } };
            axios.get('https://stud.hosted.hr.nl/0901065/dealers/?limit=3', config)
            .then(response => {
                DealerStrore.data.dealers = response.data.items
                DealerStrore.data.pagination = response.data.pagination
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}

export default DealerStrore;
