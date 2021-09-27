import React from "react";
import Estudiante from "./Estudiante";
import Formulario from "./Formulario";
const estudiantes = [
   {
       "nombre" : "mirage",
       "edad" : "30",
       "genero" : "M",
       "descripcion" : "Mirage es la típica persona a la que le gusta no pasar desapercibida. El menor de 4 hermanos, ha llevado a la perfección el arte de bromear para llamar la atención. Lo que sí se tomó muy en serio fue la tecnología de holopiloto. Su madre, ingeniera, le enseñó los entresijos de esta tecnología creadora de ilusiones, y Mirage se entregó al estudio de sus mecanismos hasta aprender todo lo que pudo sobre estos. Incluso después de que sus hermanos desaparecieran en combate durante la Guerra de la Frontera, Mirage y su madre siguieron desarrollando dispositivos holográficos, y el trabajo los unió.",
       "imagen" : "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-mirage.png.adapt.crop16x9.1023w.png"
   },
   {
        "nombre" : "wraith",
       "edad" : "30",
       "genero" : "F",
       "descripcion" : "Wraith es un torbellino de lucha, capaz de realizar ataques letales y manipular el espacio-tiempo mediante la creación de brechas en el continuo de la realidad. Pero estas habilidades tienen un precio. Hace años, se despertó en un centro de detención de IMC sin recordar quién era. La jefa de experimentos Renee Blasey, que se ofreció como conejillo de Indias para sus pruebas, cuya compañera la traicionó y la encerró... ya no existía. Lo único que quedaba era una niña tímida, asustada por una cacofonía de voces de su cabeza, hasta que apareció otra versión de ella y le enseñó a escuchar a las voces. Wraith le hizo caso y reunió fuerzas para liberarse de su prisión y escapar a una realidad diferente: esta realidad.",
       "imagen" : "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-wraith-xl.jpg.adapt.320w.jpg"
} ,
{
    "nombre" : "Octane",
    "edad" : "20",
    "genero" : "M",
    "descripcion" : "Un día, Octavio Silva estaba aburrido. De hecho, así era la mayoría de los días. Hijo de los presidentes de Silva Pharmaceuticals (absortos en su trabajo) y con todo el dinero del mundo, se entretenía realizando increíbles acrobacias desafiando a la muerte y publicando holovídeos de estas para el asombro de sus seguidores. Aquel día, decidió batir el récord de un circuito cercano lanzándose hacia la línea de meta... tras explotar una granada",
       "imagen" : "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-octane-xl.jpg.adapt.320w.jpg"
} ,
{
    "nombre" : "Lifeline",
    "edad" : "32",
    "genero" : "F",
    "descripcion" : "Ajay Che, apodada Lifeline, no es la típica persona que esperarías encontrar en los Juegos Apex. Hija de unos ricos mercaderes de la guerra, huyó de casa cuando supo el daño que había provocado su familia y se alistó en el Cuerpo de Paz Fronterizo, una organización humanitaria que ayuda a las comunidades necesitadas de la Frontera. Desde entonces ha dedicado su vida a ayudar a los demás y se ha unido a los Juegos Apex para financiar el Cuerpo de Paz Fronterizo con sus ganancias.",
       "imagen" : "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-lifeline-xl.jpg.adapt.320w.jpg"
} ,
{
    "nombre" : "Valk",
    "edad" : "21",
    "genero" : "F",
    "descripcion" : "Valiente, audaz, pasional y feroz, a Kairi Imahara no le importar soslayar la ley ni sobornar a cualquiera. De niña, robó un titán que pertenecía a su padre, cuyo indicativo era Viper. De mayor, quería ser igual que él. Pero un día se marchó a una misión y nunca regresó. En cierto modo, siguió sus pasos: aunque no era un titán, su nave ofrecía una vida decente. Sin embargo, su vida personal era inexistente. Durante el día traficaba con cargamentos valiosos y, por la noche, se enfrentaba a forajidos y mercenarios en los bares. Pero a pesar de poder disfrutar de mujeres, alcohol y su amor por el cielo, seguía obsesionada con buscar al hombre que envió a su padre a su última misión: su comandante, Kuben Blisk.",
       "imagen" : "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/valkyrie/apex-section-bg-legends-valkyrie-xl.jpg.adapt.320w.jpg"
} ,
{
    "nombre" : "Seer",
    "edad" : "21",
    "genero" : "M",
    "descripcion" : "Antes de su nacimiento, se predijo que Seer traería dolor y sufrimiento al mundo. La noche que nació, un meteorito atravesó el cielo e impactó en la luna de su mundo. Se consideró un mal presagio y, cuando los ojos azul pálido de Obi Edolasim se abrieron, su comunidad vio a un niño maldito. No era así para sus padres, que lo adoraban incondicionalmente porque veían el alma creativa y empática de su hijo. Incluso le apoyaron cuando se sintió atraído por la teatralidad de las Arenas, donde podía expresarse por completo.",
       "imagen" : "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/seer/apex-section-bg-legends-seer-l.jpg.adapt.320w.jpg"
} 

]
const Contenedor = () =>(
    <>
    {
       // estudiantes.map(c => <Estudiante nombre={c.nombre} edad={c.edad} genero={c.genero} imagen={c.imagen} descripcion={c.descripcion}/>)
    }

    <Formulario></Formulario>
    </>

);

export default Contenedor;