// Crea l'applicazione Vue
const app = Vue.createApp({
    // Dati iniziali dell'applicazione
    data() {
        return {
            emailList: [], // Un array vuoto per gli indirizzi email
        };
    },
    // Metodo eseguito quando l'applicazione è pronta
    mounted() {
        // Genera 10 indirizzi email al caricamento della pagina
        this.generateEmails(10);
    },
    // Metodi per gestire la logica
    methods: {
        // Genera un indirizzo email
        generateEmail() {
            fetch('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => response.json())
                .then(data => {
                    // Aggiungi l'indirizzo email alla lista
                    this.emailList.push(data.response);
                })
        },
        // Genera un numero specifico di indirizzi email
        generateEmails(count) {
            for (let i = 0; i < count; i++) {
                this.generateEmail();
            }
        },
    },
});

// Monta l'applicazione su un elemento specifico nel DOM
app.mount('#app');
