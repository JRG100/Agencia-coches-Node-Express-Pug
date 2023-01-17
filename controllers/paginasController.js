import { Coche } from '../models/Coche.js';
import { Testimonial } from '../models/Testimonial.js';

const paginaInicio = async (req, res) => {
    
    const promises = [];

    promises.push(Coche.findAll({
        limit: 2
    }));

    promises.push(Testimonial.findAll({
        limit: 3
    }));


    try {
        // pasar al promise
        const resultado =  await Promise.all(promises);

        console.log(resultado[0])

        res.render('inicio', {
            coches : resultado[0],
            testimoniales: resultado[1],
            clase : 'home',
            page: 'Inicio',
        })
    } catch (error) {
        console.log(error);
    }

}

const paginaNosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaCoches = async  (req, res) => { 
    // Consultar BD 
    const coches = await Coche.findAll();
    
    res.render('coches', {
        pagina: 'Próximos coches', 
        coches,
    });
}

const paginaTestimoniales =  async (req, res)  => {
     
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            testimoniales,
            page: 'Testimoniales', 
        })
    } catch (error) {
        console.log(error);
    }
}

// Muestra un coche por su slug
const paginaDetalleCoches = async (req, res) => {

    const { slug } = req.params;

    try {
        const coche = await Coche.findOne( { where : { slug } });

        res.render('coche', {
            pagina: 'Información Coche', 
            coche
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio, 
    paginaNosotros,
    paginaCoches, 
    paginaTestimoniales,
    paginaDetalleCoches
}