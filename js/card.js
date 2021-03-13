Vue.component('card-component', {
    data: () => {
        return {
            boton: { editar: 'Editar', eliminar: 'Eliminar' }
        }
    },
    methods: {
        btnEliminarClick() {
            app.confirm = true;
            app.btnCancelarEliminar = this.btnCancelar;
            app.btnConfirmarEliminar = this.btnConfirmar;
        },
        btnEditarClick() {
            let id = this.item.id;

            let url = `http://localhost:3000/video/${id}`;

            fetch(url)
                .then(r => r.json())
                .then(j => {
                    app.open = true;
                    delete j.visualizaciones;
                    app.item = j;
                });
        },
        btnConfirmar() {
            let id = this.item.id;

            let url = `http://localhost:3000/video/${id}`;
            let init = { method: 'delete' };

            fetch(url, init)
                .then(r => r.json())
                .then(j => console.log(j));
        },
        btnCancelar() {
            console.log('bye');
        }
    },
    props: ['item'],
    template: `
        <li class="card">
            <div class="video">
                <div class="opciones">
                    <a href="#" class="btnEditar" v-text="boton.editar" @click.prevent="btnEditarClick"></a>
                    <a href="#" class="btnEliminar" v-text="boton.eliminar" @click.prevent="btnEliminarClick"></a>
                </div>
                <video class="url" controls>
                    <source v-bind:src="item.url"></source>
                </video>
            </div>
            <div class="contenido">
                <div class="titulo" v-text="item.titulo"></div>
                <div class="visualizacion" v-text="item.visualizaciones + ' visualizaciones'"></div>
                <div class="descripcion" v-text="item.descripcion"></div>
            </div>
        </li>
    `
})