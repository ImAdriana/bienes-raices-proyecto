import Viaje from '../models/Viaje.js';

const mostrarNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros',
    });
};

const mostrarInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio',
    });
};

const mostrarViajes = async (req, res) => {
    // Consultar bd
    const viajes = await Viaje.findAll();
    console.log(viajes);

    res.render('viajes', {
        pagina: 'Viajes',
        viajes: viajes,
    });
};

const mostrarTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales',
    });
};

// Muestra un viaje por slug
const paginaDetalleViaje = async (req, res) => {
    //console.log(req.params.destino); // Aqui aplica el comodin del endpoing de viaje/:destino
    const { destino } = req.params;

    try {
        const resultado = await Viaje.findOne({ where: { slug: destino } }); // Donde el slug sea igual al
        res.render('viaje-informacion', {
            pagina: 'Información viaje',
            resultado,
        });
    } catch (error) {
        console.log(error);
    }
};

export {
    mostrarNosotros,
    mostrarInicio,
    mostrarViajes,
    mostrarTestimoniales,
    paginaDetalleViaje,
};
