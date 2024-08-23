import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}); //Encapsuled the code of the component and send it to the shadow DOM.
    }
    //When the component is connected to the DOM it will execute the connectedCallback method.
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/abuelo-container.css">
        <section class= "abuelo-container">
        <product-card img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/kj6n1mmv5i3yqjvk6f56"
        title="The Legend of Zelda amiibo" 
        description="¡Potencia tu juego! Descubre amiibo, una forma divertida y única de interactuar con tus personajes y juegos favoritos de Nintendo." 
        button="¡Completa tu colección!">
        
        </product-card><product-card img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/afdfdrgq8i4dpnere9h5"
        title="Megapromoción 12+2" 
        description="2 meses adicionales al comprar cualquier suscripción de 12 meses." 
        button="Ver más detalles ">
        </product-card>
        
        <product-card img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/lvk7zz3tlmx5gqhpgf5r"
        title="Mando de Nintendo 64" 
        description="Disfruta de los juegos de Nintendo 64 de la forma en que se deben jugar: ¡con un mando inalámbrico de tamaño completo de Nintendo 64!" 
        button="Comprar">
        </product-card>
        </section>
        `
    }
};
customElements.define('app-container', AppContainer);