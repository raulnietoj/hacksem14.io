
const app = new Vue({
    el: '#app',
    data: {
        lista: [],
        item: null,
        open: false,
        confirm: false
    },
    methods: {
        btnConfirmarEliminar() {

        },
        btnCancelarEliminar() {

        }
    },
    beforeCreate() {
        let url = 'http://localhost:3000/video';

        fetch(url)
            .then(r => r.json())
            .then(j => {
                this.lista = j;
            });
    }
});