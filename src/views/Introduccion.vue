<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bg1.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12     
            .row.justify-content-center.align-items-center.bg4.brad.px-3.mb-4(data-aos="flip-down") 
              .col.my-3
                p(data-aos="fade-down").mb-0 Se ha realizado un recorrido que permite comprender la importancia de la salud mental y detectar los factores que pueden afectarla. Sin embargo, no basta con reconocer que se está en riesgo o que ciertas situaciones han impactado el bienestar personal; es crucial actuar, romper los círculos de violencia, alejarse de entornos perjudiciales y buscar la ayuda profesional necesaria.                        
              .col-lg-auto.my-3
                img.img-a.img-t(src='@/assets/curso/temas/2.png', alt='')       

            h5(data-aos="fade-down") En este componente se profundizará en:  

            .row.justify-content-center.bg2(data-aos="flip-down") 
              .col-lg-3.my-4
                img.img-a.img-t(src='@/assets/curso/temas/3.png', alt='')             
              .col-lg-9.my-4
                h5.mb-4(data-aos="fade-down") #[mark.bg4.px-2.p-1.brad1 Rutas de atención]
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check-circle.color1
                    | Se explorarán las rutas de atención disponibles en casos de violencia, trastornos mentales o consumo de sustancias psicoactivas (SPA).
                  li 
                    i.fas.fa-check-circle.color1
                    | Se fomentará la acción asertiva y oportuna para reducir los niveles de afectación.
                  li 
                    i.fas.fa-check-circle.color1
                    | Se generará conciencia sobre la importancia de denunciar situaciones propias o ajenas, esencial para la intervención de organismos competentes. 
                     

            .row.justify-content-center.bg3(data-aos="flip-down") 
              .col-lg-3.my-4
                img.img-a.img-t(src='@/assets/curso/temas/4.png', alt='')             
              .col-lg-9.my-4
                h5.mb-4(data-aos="fade-down") #[mark.bg4.px-2.p-1.brad1 Protección de la salud mental]
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check-circle.color1
                    | Se abordarán los aspectos relacionados con la protección de la salud mental desde una perspectiva personal.
                  li 
                    i.fas.fa-check-circle.color1
                    | Se enfatizará la responsabilidad individual en el propio desarrollo y bienestar mental.
                  li 
                    i.fas.fa-check-circle.color1
                    | Relación entre Hábitos de Vida Saludables y Bienestar 
                    

            .row.justify-content-center.bg2(data-aos="flip-down") 
              .col-lg-3.my-4
                img.img-a.img-t(src='@/assets/curso/temas/5.png', alt='')             
              .col-lg-9.my-4
                h5.mb-4(data-aos="fade-down") #[mark.bg4.px-2.p-1.brad1 Psicológico]
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check-circle.color1
                    | Se discutirá la relación entre los hábitos de vida saludables, el amor propio y la ética del cuidado.
                  li 
                    i.fas.fa-check-circle.color1
                    | Estos factores son fundamentales para gestionar el estrés y protegerse de entornos dañinos que podrían conducir al consumo de sustancias psicoactivas. 
                  
             
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
