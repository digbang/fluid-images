# Fluid images

Fluid image es un componente html+css3 que sirve para mostrar una imagen dentro de un contenedor, adaptándose al ancho y alto del mismo, sin perder ni modificar la proporción.
Es muy parecido a lo que hace un `background-size: contain;` de CSS, pero utilizando el tag img en el html.
Para que la imagen se muestre correctamente, es necesario que el contenedor posea un alto, ya sea seteandolo por CSS o expandiendo la altura del mismo mediante una imagen "invisible".

La estructura html completa del componente es:
```
<a href="#" class="fluid-image"> <!-- Block del componente -->
    <img class="fluid-image__ratio" src="img/1x1.png" alt=""> <!-- Opcional -->
    <span class="fluid-image__bg" style="background-image: url('your-image-url')"></span> <!-- Opcional -->
    <img class="fluid-image__img" src="your-image-url" alt=""> <!-- Requerido -->
</a>
```

Sus elementos internos:
- "fluid-image__ratio": (opcional) Si el contenedor no posee un alto fijado mediante CSS, se puede utilizar este elemento para expandir el contenedor
- "fluid-image__bg": (opcional) Muestra un fondo con la imagen con un filtro de blur aplicado
- "fluid-image__img": (requerido) Imagen centrada horizontal y verticalmente dentro de su contenedor

## Instalación:

El paquete se encuentra disponible en el repositorio de npm con el nombre "fluid-images"

```
npm i -S fluid-images
```

## Uso:

Para comenzar a utilizarlo, es necesario incluir el css (normal o minified) que se encuentra en la carpeta `node_modules/fluid-images/dist`, o bien incluyendo y compilando el `.scss` que se encuentra en `node_modules/fluid-images/resources/styles`.

### Alto fijo:

#### Contenedor con alto fijo

```
<div style="width:100px"><!-- Se necesita que el contenedor cuente con un alto -->
    <a href="#" class="fluid-image">
        <img class="fluid-image__img" src="your-image-url" alt="">
    </a>
</div>
```

#### Contenedor con alto fijo + blur de fondo

```
<div style="width:100px"><!-- Le damos un alto al contenedor -->
    <a href="#" class="fluid-image">
        <span class="fluid-image__bg" style="background-image: url('your-image-url')"></span>
        <img class="fluid-image__img" src="your-image-url" alt="">
    </a>
</div>
```

Ver [demos](https://digbang.github.io/fluid-images/fixed-height.html)

### Alto escalable:

Para que el alto del componente se expanda, es necesario especificar la proporción linkeando una imagen.
Por ejemplo, si quisiéramos que el componente siempre se vea cuadrado sin importar la proporción de la imagen que le demos, podemos linquear en el elemento `fluid-image__ratio` una imagen de 1px x 1px.
El paquete provee 4 imágenes con las proporciones más utilizadas normalmente:
- 1:1 -> docs/img/1x1.png
- 2:3 -> docs/img/2x3.png
- 4:3 -> docs/img/4x3.png
- 16:9 -> docs/img/16x9.png

```
<a href="#" class="fluid-image">
    <img class="fluid-image__ratio" src="img/1x1.png" alt="Square ratio">
    <span class="fluid-image__bg" style="background-image: url('your-image-url')"></span>
    <img class="fluid-image__img" src="your-image-url" alt="">
</a>
```

#### Alto escalable con blur

```
<a href="#" class="fluid-image">
    <img class="fluid-image__ratio" src="img/1x1.png" alt="Square ratio">
    <span class="fluid-image__bg" style="background-image: url('your-image-url')"></span>
    <img class="fluid-image__img" src="your-image-url" alt="">
</a>
```

Otra forma de utilizar esto sin necesidad de linkear una imagen es con el base64 de la misma. Por ejemplo, la de 1px x 1px sería:

```
<a href="#" class="fluid-image">
    <img class="fluid-image__ratio" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAQSURBVHjaYvj//z8DQIABAAj8Av7bok0WAAAAAElFTkSuQmCC" alt="Square ratio">
    <span class="fluid-image__bg" style="background-image: url('your-image-url')"></span>
    <img class="fluid-image__img" src="your-image-url" alt="">
</a>
```

Hay herramientas online para generar el base64 como [https://www.base64-image.de/](https://www.base64-image.de/).

Ver [demos](https://digbang.github.io/fluid-images/scalable-height.html)

## Desarrollo:

### Requerimientos

- nodejs


### Instalación

```
git clone git@github.com:digbang/fluid-images.git
cd fluid-images
npm i
```

### Compilado
Para compilar el código SASS se utiliza GULP.

#### Generar CSS Minificado

```
gulp
```

#### Generar CSS sin minificar + sourcemaps
```
gulp dev
```
