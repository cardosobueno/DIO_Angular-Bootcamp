class CardNews extends HTMLElement {

    constructor() {
        super()


        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());


    }


    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");


        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "cardleft");

        const nome = document.createElement("span");
        const titulo = document.createElement("h1");
        const materia = document.createElement("p");

        cardLeft.appendChild(nome);
        cardLeft.appendChild(titulo);
        cardLeft.appendChild(materia);



        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "cardright");

        const imagem = document.createElement("img");
        cardRight.setAttribute(imagem);






        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;


    }

    styles() {

    }

}


customElements.define("card-news", CardNews);