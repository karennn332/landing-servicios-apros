<script>
const servicios = [
  {id:1,nombre:'Landing Page Corporativa',precio:850,activo:true},
  {id:2,nombre:'Sitio Web Institucional',precio:1800,activo:true},
  {id:3,nombre:'Mantenimiento Web Mensual',precio:450,activo:true},
  {id:4,nombre:'Correos Corporativos',precio:320,activo:true},
  {id:5,nombre:'Integración con CMS',precio:950,activo:false}
];

let dataActual = [...servicios];

function renderServicios(lista){ const contenedor = document.getElementById("servicios");
  contenedor.innerHTML = "";

  lista.forEach(s => {
    contenedor.innerHTML += `
      <div class="card ${s.activo ? '' : 'inactive'}">
        <h3>${s.nombre}</h3>
        <p class="price">$${s.precio}</p>
        <p>${s.activo ? 'Activo' : 'Inactivo'}</p>
      </div>
    `;
  });
                                  dataActual = [...lista];
}

function filtrarActivos(){
  const filtrados = servicios.filter(s => s.activo);
  renderServicios(filtrados);
}

function ordenarPorPrecio(){
  const ordenados = [...dataActual].sort((a,b) => a.precio - b.precio);
  renderServicios(ordenados);
}

// Inicial
renderServicios(servicios);
</script>
