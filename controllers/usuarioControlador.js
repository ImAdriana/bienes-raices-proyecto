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

const mostrarViajes = (req, res) => {
    res.render('viajes', {
        pagina: 'Viajes',
    });
};

const mostrarTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales',
    });
};

export { mostrarNosotros, mostrarInicio, mostrarViajes, mostrarTestimoniales };
