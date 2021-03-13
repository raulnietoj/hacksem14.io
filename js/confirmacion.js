Vue.component('confirm-component', {
    props: ['open', 'titulo', 'mensaje', 'confirmText', 'cancelText', 'confirmCallback', 'cancelCallback'],
    methods: {
        btnConfirmClick() {
            app.confirm = false;
            this.confirmCallback();
        },
        btnCancelClick() {
            app.confirm = false;
            this.cancelCallback();
        }
    },
    template: `
        <div  v-bind:class="'confirmacion ' + (open == true ? 'open' : '')">
            <div class="container">
                <div class="header">
                    <h2 v-text="titulo"></h2>
                </div>
                <hr>
                <div class="content">
                    <p v-text="mensaje"></p>
                </div>
                <hr>
                <div class="footer">
                    <button v-text="confirmText" @click="btnConfirmClick"></button>
                    <button v-text="cancelText" @click="btnCancelClick"></button>
                </div>
            </div>
        </div>
    `
})