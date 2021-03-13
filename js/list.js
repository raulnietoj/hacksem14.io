Vue.component('list-component', {
    props: ['listado'],
    template: `
        <div class="info">
            <div v-if="listado.length == 0">No existe información</div>
            <ul v-else>
                <card-component v-for="x in listado" v-bind:item="x"></card-component>
            </ul>
        </div>
    `        
});