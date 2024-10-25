document.getElementById('btnGuardar').onclick = async function (e) {
    e.preventDefault();

    let n = document.getElementById('nombre').value;
    let a = document.getElementById('apellido').value;
    let e = document.getElementById('edad').value;
    let f = document.getElementById('fechaNacimiento').value;
    let c = document.getElementById('confColor').value;
    let orden = "guardar";
    
    let response = await fetch(`/cgi-bin/funciones.cgi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'nombre': n,
            'apellido': a,
            'edad': e,
            'fechaNacimiento': f,
            'color': c,
            'orden': orden
        })
    });
    let data = await response.text();
    
    document.getElementById('resultado').innerHTML = decodeURI(data);
};

document.getElementById('btnCargar').onclick = async function (e) {
    e.preventDefault();

    let orden = "cargar";
    
    let response = await fetch(`/cgi-bin/funciones.cgi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'orden': orden
        })
    });
    let data = await response.json();
    
    document.getElementById('nombre').value = decodeURI(data.nombre);
    document.getElementById('apellido').value = decodeURI(data.apellido);
    document.getElementById('edad').value = decodeURI(data.edad);
    document.getElementById('fechaNacimiento').value = decodeURI(data.fechaNacimiento);
    document.getElementById('confColor').value = decodeURIComponent(data.color);
    document.getElementById('idBody').style.backgroundColor = decodeURIComponent(data.color);
    document.getElementById('resultado').innerHTML = decodeURI(data.mensaje);
};
