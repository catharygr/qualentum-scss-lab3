# Pasos que he desarrollado en la solución de problema

## Análisis del documento
- Analizando las dos secciones con tarjetas he llegado a la conclusión que con una condicional dentro de la web component podía reutilizar el mismo componente con diferentes slot y argumentos para ambas secciones

## Web component
- He creado un componente nuevo dentro de la carpeta web-components
- He creado una class Card que extiende HTMLElement
- En el contructor() usando super() he llamado la clase padre, he añadido shadowDOM y dos atributos. El primer atributo es para pasar el tipo de trajeta (colores o contenidos) con this.typeOfCard y algunas clases CSS con this.classes
- El método connectedCallback se llama automáticamente cuando el elemento se conecta al DOM y llama al método this.render() para renderizar el contenido de la tarjeta.
- El método render() se encarga de renderizar el contenido de la tarjeta en función del valor de this.typeOfCard. Si this.typeOfCard es "colores", se agrega el contenido generado por el método coloresHtmlToElement() al shadowRoot. Si es "contenido", se agrega el contenido generado por el método contenidoHtmlToElement() al shadowRoot.
- Ambos métodos mencionados generan el contenido de HTML. Se arreglan los estilos CSS y fragmentos de HTML. Utilizando la etiqueta slot añado el resto del contenido HTML que diferencia cada tarjeta una de la otra.
- El contenido de la tarjeta se puede personalizar utilizando el atributo classes.
- Con createElement() creo una "template" y con innerHTML() inserto el código HTML generado y se retorna template.
- Regreso a render donde al shadowRoot añado el contenido del template
- Finalmente, se registra el componente personalizado card-component utilizando window.customElements.define().

## HTML y CSS
- En index.html he eliminado todas las tarjetas originales y las he sustituido por el web component creado. <web-component></web-component>
- Tuve que copiar algunas clases desde otros documentos CSS dentro del template porque los estilos definidos fuera del ShadowDOM no se aplicaban al contenido dentro del él, porque el ShadowDOM está diseñado para encapsular el contenido y los estilos del componente.
- He intenado aplicar algunos estilos con el pseudo-elemento::slotted(li) pero como tiene algunas limitaciones que pueden hacer que no funciona como fue el caso, he creado una nueva clase global .card-color-li para aplicarle el padding-top 
- En el index.html todo el contendio que se diferencia de una tarjeta a la otra, le he pasado al componente utlizando slot.


Este problema ha sido un desafío muy difícil, me ha llevado mucho tiempo para llegar a la solución y seguramente no es una solución perfecta pero ha funcionado. :-) 
Muchas gracias. Un saludo






