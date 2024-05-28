<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Acciones de prevención en salud mental

    .row.bg14.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12     
            .row.justify-content-center.mb-4(data-aos="flip-down") 
              .col-lg-8.my-3
                p(data-aos="fade-down").mb-0 Las acciones de prevención en salud mental son fundamentales para fomentar el bienestar y la resiliencia en individuos y comunidades. Estas acciones incluyen promover estilos de vida saludables que integren una nutrición adecuada, actividad física regular y técnicas de manejo del estrés. La educación sobre la salud mental y la concientización acerca de los factores de riesgo y los signos de trastornos emocionales también son clave. Además, el fortalecimiento del amor propio y la autoestima, así como el desarrollo de redes de apoyo social, son esenciales para crear un ambiente propicio para la salud mental.                      
              .col-lg-4.my-3
                img.img-a.img-t(src='@/assets/curso/temas/28.svg', alt='')  

            .row.justify-content-start.mb-4
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4
                    h3.mb-0 Estilos de vida saludables 
            p(data-aos="fade-down") Los estilos de vida pueden guiar a las personas hacia dos direcciones: una de enfermedad, adicciones, violencia, maltrato y muerte, o hacia una de positividad, felicidad, respeto, nutrición adecuada, actividad física y bienestar. 

            .row.justify-content-center.mb-4(data-aos="fade-left")
              .col-lg-3.my-3.p-0
                .bg5.p-3.h-100
                  img.img-a.img-t(src='@/assets/curso/temas/29.png', alt='')      
              .col-lg-5.my-3.p-0
                .bg2.p-5.h-100 
                  h5(data-aos="fade-down") ¿Qué determina el camino que una persona seguirá?   
                  p(data-aos="fade-down").mb-0 Depende exclusivamente de la persona. Aunque ciertos riesgos aumentan la probabilidad de desarrollar trastornos mentales, también existe la posibilidad real de protegerse a sí mismo y a otros de estos peligros. 

            .row.justify-content-start.mb-4
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4
                    h3.mb-0 Autoestima, amor propio y familia
            p(data-aos="fade-down") La autoestima es una construcción psicológica que refleja cómo una persona se ve, se siente y está satisfecha con su vida. Se forma a partir de componentes actitudinales, cognitivos y afectivos. Por ejemplo, alguien que no se siente a gusto con su imagen personal puede sentirse y pensar que es menos atractivo y alimentar este sentimiento al compararse desfavorablemente con otros.     

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-3.my-3.p-0
        .bg5.p-3.h-100
          img.img-a.img-t(src='@/assets/curso/temas/30.svg', alt='')      
      .col-lg-4.my-3.p-0
        .bg2.p-3.h-100.j 
          p(data-aos="fade-down").mb-0 El problema radica en la falta de autoaceptación, la subvaloración y el consecuente deterioro de la autoestima.  
      .col-lg-4.my-3
        p(data-aos="fade-down").mb-0 Es importante reconocer que #[b la familia y los entornos sociales] desempeñan un papel esencial en la construcción de nuestra autoestima. Sin embargo, #[b el control sobre nuestros propios pensamientos y sentimientos recae en nosotros], y debemos aprender a gestionarlos adecuadamente.    

    .row.justify-content-center.mb-4(data-aos="flip-down") 
      .col-lg-8.my-3
        p(data-aos="fade-down") Aunque ciertos riesgos incrementan la posibilidad de experimentar trastornos mentales, es posible salvaguardarse tanto a uno mismo como a otros de estos peligros. El concepto de autoestima se amplía para abarcar el amor propio, una idea que Fernando Savater introduce al definir la ética como amor propio. Esto implica la capacidad y la responsabilidad de interactuar con los demás a partir de un reconocimiento auténtico de lo que uno es, piensa y siente.                    
        p(data-aos="fade-down").mb-0 Esta perspectiva establece el amor propio como un límite ineludible en la interacción social, implicando que el respeto y amor por uno mismo son esenciales para el respeto y amor hacia los demás.                   
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/curso/temas/31.svg', alt='')  

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 ¿Cuál es el papel de la familia en el desarrollo del amor propio?
    p(data-aos="fade-down") La familia está llamada a #[b enseñar a amar], esta es la #[b esencia de las relaciones humanas] y por sencillo que parezca, es la falla más común en las familias. 

    .row.justify-content-start.my-5
      .col-auto.bg4.px-2.m-1.p-1.brad1(data-aos="flip-down")
        h5.text-center.mb-0 ¿Por qué hay fallas en el sistema familiar?  

    .row.justify-content-center.mb-5
      .col-sm-11.col-xl-4.col-md-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bg21
              .p-4
                .row.justify-content-center.mt-4
                  .col-auto.my-4.bgw.px-2.m-1.p-1
                    h5.text-center.mb-0 Experiencias propias 
                img.img-a.img-t(src='@/assets/curso/temas/32.svg', alt='')  
            .tarjeta-flip__contenido.p-4.p-xl-5
              .row.justify-content-center
                .col-auto.my-4.bgw.px-2.m-1.p-1(data-aos="flip-down")
                  h5.text-center.mb-0 Experiencias propias
              p Cuando las personas han tenido historias de violencia intrafamiliar, abuso y maltrato, los patrones e imaginarios que se crean están enmarcados en este tipo de relaciones y por lo general es el modelo que se sigue al construir una nueva familia. Sin embargo, esto no es una condena, lo contrario también sucede, es decir, que se trata de hacer lo opuesto a lo que se vivió. 

      .col-sm-11.col-xl-4.col-md-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bg21
              .p-4
                .row.justify-content-center.mt-4
                  .col-auto.my-4.bgw.px-2.m-1.p-1
                    h5.text-center.mb-0 Entorno violento – historia como sociedad  
                img.img-a.img-t(src='@/assets/curso/temas/33.svg', alt='')  
            .tarjeta-flip__contenido.p-4.p-xl-5
              .row.justify-content-center
                .col-auto.my-4.bgw.px-2.m-1.p-1(data-aos="flip-down")
                  h5.text-center.mb-0 Entorno violento – historia como sociedad
              p Colombia se ha vivido marcada por una historia de violencia social, que ha enseñado a solucionar los conflictos, vía eliminación del otro. Se han naturalizado estas prácticas y se asumen como normales en muchos entornos. Pelear, tratar mal a las personas, ser agresivos, decir malas palabras, son actitudes que no se cuestionan.

      .col-sm-11.col-xl-4.col-md-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bg21
              .p-4
                .row.justify-content-center.mt-4
                  .col-auto.my-4.bgw.px-2.m-1.p-1
                    h5.text-center.mb-0 Medios de comunicación 
                img.img-a.img-t(src='@/assets/curso/temas/34.svg', alt='')  
            .tarjeta-flip__contenido.p-4.p-xl-5
              .row.justify-content-center
                .col-auto.my-4.bgw.px-2.m-1.p-1(data-aos="flip-down")
                  h5.text-center.mb-0 Medios de comunicación
              p Ejercen una influencia directa sobre la construcción de estereotipos, forma de hacer y ver las cosas. Noticias de violencia y abuso a diario, novelas que recrean formas de relación de pareja basadas en el desequilibrio y las marcadas relaciones de poder.  

    .row.justify-content-start.my-5
      .col-auto.bg4.px-2.m-1.p-1.brad1(data-aos="flip-down")
        h5.text-center.mb-0 ¿Qué se requiere de la familia para construir amor propio? 

    .row.bg12.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.p-5 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .tarjeta.bgw.p-4(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4 Necesidades básicas de crecimiento
                    p Cada individuo, especialmente los niños, requiere cuidados esenciales como alimentación, atención en la enfermedad y protección. Los niños necesitan la presencia de padres que los cuiden, se preocupen por ellos y les enseñen a alimentarse, a cuidar y respetar el cuerpo. Esto se aprende fundamentalmente en la familia.
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/35.png', alt="")     

                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4 Aprendizaje del amor y vínculos afectivos
                    p El aprendizaje del amor se realiza a través del apego y vínculos afectivos y efectivos. La familia debe ser un modelo que fomente el amor, siendo este el propósito de su existencia. Se aprende a amar mediante el ejemplo de prácticas de buen trato, respeto, abrazos, palabras amables, sonrisas, protección, establecimiento de límites, diálogo para solucionar problemas, escucha y orientación.
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/36.png', alt="")    

                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4 Responsabilidad familiar
                    p Comprender la responsabilidad que cada acto tiene frente a otros miembros de la familia es crucial. Este aspecto es vital para el desarrollo del amor propio y el respeto mutuo dentro del entorno familiar. Si cada integrante fuera consciente del impacto de sus acciones, las conductas violentas o de maltrato serían inexistentes.
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/37.png', alt="")    

    h5.mb-4(data-aos="fade-down") Algunos principios del buen trato son: 
    .row.justify-content-center
      .col-lg-10.mb-5    
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Principios del buen trato.
        .bgfig1(data-aos="zoom-in") 
          img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/39.svg', alt='La figura presenta un diagrama con forma de pentágono que representa los Principios del buen trato. En cada una de las cinco esquinas del pentágono se destaca un principio: Reconocimiento, empatía, comunicación efectiva y afectiva, interacción igualitaria y negociación. ')                          
          img.img-a.img-t.d-block.d-lg-none(data-aos="zoom-in")(src='@/assets/curso/temas/38.svg', alt='La figura presenta un diagrama con forma de pentágono que representa los Principios del buen trato. En cada una de las cinco esquinas del pentágono se destaca un principio: Reconocimiento, empatía, comunicación efectiva y afectiva, interacción igualitaria y negociación. ')

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Aspectos claves para la consolidación del amor propio en la vida 
    p(data-aos="fade-down") Cada familia es un mundo distinto, con sus propios engranajes, las mismas familias en el proceso de reconstrucción permanente, van dando la pauta. 

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-4.my-3.p-0
        .bg5.h-100
          img.img-a.img-t(src='@/assets/curso/temas/40.svg', alt='')      
      .col-lg-6.my-3.p-0
        .bg2.p-3.h-100.j 
          ul.lista-ul.fa-ul.mb-0
            li 
              i.fas.fa-check-circle.color1
              | Patrones de crianza: forma que cada familia levanta a los hijos según valores y conceptos propios. 
            li 
              i.fas.fa-check-circle.color1
              | El apego, construcción de vínculos sanos. 
            li 
              i.fas.fa-check-circle.color1
              | El rechazo a toda forma de abandono. 
            li 
              i.fas.fa-check-circle.color1
              | Rechazo a toda forma de violencia. 
            li 
              i.fas.fa-check-circle.color1
              | El tiempo libre. 
            li 
              i.fas.fa-check-circle.color1
              | Roles y tareas.     


    p(data-aos="fade-down").mb-5 #[mark.bg15.text-white.px-2.p-1 Afrontamiento ante las crisis:] dentro de la familia se generan situaciones de crisis propias del ciclo vital de la misma o por duelos, problemas económicos, entre otras; sin embargo, sin estas situaciones no se lograría desarrollar la capacidad para enfrentarlas. Aprender a ser fuertes, a superar la adversidad, a acompañar y ser solidario y a generar formas sanas de superar los momentos difíciles para propiciar una vida más sana, es lo que llamamos resiliencia y se aprende en familia, con el afecto. 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Ética del cuidado
    p(data-aos="fade-down") Lo anterior nos lleva a pensar que los seres humanos #[b somos sujetos de cuidado permanente]. Requerimos cuidado materno, #[b cuidado en la familia, en la escuela] para garantizar los mínimos vitales. La ética del cuidado nos invita a hacer de esta práctica una forma de vida, cuidar de otros y preocuparse por su bienestar es una manifestación de solidaridad, de mejores formas de convivencia y sobre todo de prevención. Prevención de #[b violencias, prevención de abusos, prevención de seguridad individual y colectiva]. Desde esta perspectiva, la defensa y garantía de los derechos sería una responsabilidad de todos y para todos.   
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.align-items-center.bg13.text-white.brad.px-3.my-4(data-aos="flip-down")
          .col-lg-auto.my-3
            img.img-a.img-t.beat(src='@/assets/curso/temas/22.svg', alt='')                   
          .col.my-3
            p(data-aos="fade-down").mb-0 Ética del cuidado significa entonces observar con atención, denunciar, dialogar, involucrarse en los asuntos del otro, para preservar la vida e integridad de la persona.  

    .row.justify-content-start.my-4
      .col-auto.bg4.px-2.m-1.p-1.brad1(data-aos="flip-down")
        h5.text-center.mb-0  ¿Qué debemos cuidar?  

    .row.justify-content-center.mb-4
      .col-lg-5.my-3.p-0.bg5.d-none.d-lg-block 
        img.img-a.mov(src='@/assets/curso/temas/41.png', alt='')       
      .col-lg-7.my-3.p-0
        .bg5.h-100.j.p-4
          p(data-aos="fade-down").mb-0 En primera instancia debemos cuidar del cuerpo, como nuestro territorio más cercano, y esto nos lleva a desarrollar acciones y comportamientos de cuidado del cuerpo de los demás. Pero igualmente tenemos que cuidar la mente, que significa equilibrar nuestras pasiones para aplicarlas al desarrollo de un proyecto de vida coherente con nuestra condición humana. Igualmente cuidamos el espíritu, esa dimensión de nuestra vida que nos permite sentirnos parte de realidades abstractas como la humanidad y el universo, pero que en lo cotidiano se traduce en la vivencia de una ética autónoma. Finalmente, cuidamos el intelecto, mediante una actitud que nos permite desarrollar nuestros mejores talentos para ponerlos al servicio de nosotros mismos, de nuestra familia, nuestra comunidad, con una actitud solidaria y altruista. (Alcaldía Mayor de Bogotá, 2013. Orientaciones para la acción en cuidado y Autocuidado)

    p(data-aos="fade-down") De esta forma, las prácticas de cuidado y autocuidado permitirán mantener una salud mental sana. Solamente quien cuida de sí mismo de forma responsable puede cuidar de otros, del entorno cercano y del medioambiente.                              
                   
    .row.justify-content-center
      .col-lg-8  
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Hábitos de vida saludables 
        .bgfig1(data-aos="zoom-in") 
          img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/42.svg', alt='La figura presenta un diagrama con forma de pentágono que representa los Principios del buen trato. En cada una de las cinco esquinas del pentágono se destaca un principio: Reconocimiento, empatía, comunicación efectiva y afectiva, interacción igualitaria y negociación. ')                          
          img.img-a.img-t.d-block.d-lg-none(data-aos="zoom-in")(src='@/assets/curso/temas/43.svg', alt='La figura presenta un diagrama con forma de pentágono que representa los Principios del buen trato. En cada una de las cinco esquinas del pentágono se destaca un principio: Reconocimiento, empatía, comunicación efectiva y afectiva, interacción igualitaria y negociación. ')                   
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
