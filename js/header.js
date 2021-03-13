Vue.component("header-component", {
    data: () => {
        return {
            titulo: 'VIDEO PACHA TV',
            boton: {
                agregar: 'AGREGAR'
            }
        }
    },
    methods: {
        btnAgregarClick: () => {
            app.open = true;
            app.item = null;
        }
    },
    template: `
        <header class="header">
            <div class="main">
                <a href="/" class="logo" v-text="titulo"></a>
                <a href="#" v-text="boton.agregar" @click.prevent="btnAgregarClick"></a>
            </div>
        </header>
    `
})