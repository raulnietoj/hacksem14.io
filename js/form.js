Vue.component('form-component', {
    props: ['open', 'item'],
    data: () => {
        return {
            id: null,
            url: { label: 'URL', valor: null },
            titulo: { label: 'Título', valor: null },
            descripcion: { label: 'Descripción', valor: null },
            boton: { guardar: 'GUARDAR', cerrar: 'CERRAR' }
        }
    },
    watch: {
        item(newValue, oldValue) {
            this.id = newValue == null ? null : newValue.id;
            this.url.valor = newValue == null ? null : newValue.url;
            this.titulo.valor = newValue == null ? null : newValue.titulo;
            this.descripcion.valor = newValue == null ? null : newValue.descripcion;
        }
    },
    methods: {
        frmSubmit() {
            let data = {
                url: this.url.valor,
                titulo: this.titulo.valor,
                visualizaciones: 0,
                descripcion: this.descripcion.valor
            };

            let url = `http://localhost:3000/video${(this.id == null ? "" : `/${this.id}`)}`;
            let init = { method: this.id == null ? 'POST' : 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) };

    fetch(url, init)
        .then(r => r.text())
        .then(this.mostrarResultadoRegistrarVideo);
},
btnCerrar() {
    app.open = false;
},
mostrarResultadoRegistrarVideo(data) {
    console.log(data);
}
},
template: `
<form @submit.prevent="frmSubmit" v-bind:class="'modal ' + (open == true ? 'open' : '')">
    <div class="container">
        <div class="row">
            <h2>Titulo</h2>
        </div>
        <div class="row">
            <label>
                {{url.label}}
                <input type="text" :placeholder="'Ingrese ' + url.label" v-model="url.valor" />
            </label>
        </div>
        <div class="row">
            <label>
                {{titulo.label}}
                <input type="text" :placeholder="'Ingrese ' + titulo.label" v-model="titulo.valor" />
            </label>
        </div>
        <div class="row">
            <label>
                {{descripcion.label}}
                <input type="text" :placeholder="'Ingrese ' + descripcion.label" v-model="descripcion.valor" />
            </label>
        </div>
        <div class="row buttons">
            <button type="button" v-text="boton.cerrar" @click.prevent="btnCerrar"></button>
            <button type="submit" v-text="boton.guardar"></button>
        </div>
    </div>
</form>
`
});