import Personajes from './personajes.js';

export default class DetallesPersonajes extends Personajes {
    constructor (id, name, status, species, gender, created, origin, location, episode) {
       super(id);
       let _name = name;
       this.getName = () => _name;  // closures a name
       this.setName = (nuevo_name) => _name = nuevo_name;
       let _status = status;
       this.getStatus = () => _status;  // closures a status
       this.setStatus = (nuevo_status) => _status = nuevo_status;
       this.species = species;
       this.gender = gender;
       this.created = created;
       this.origin = origin;
       this.location = location;
       this.episode = episode;
    }
    get name() {
        return this.getName();
    }
    set name(nuevo_name) {
        this.setName(nuevo_name);
    }
    get status() {
        return this.getStatus();
    }
    set status(nuevo_status) {
        this.setStatus(nuevo_status);
    }
    get species() {
        return this._species;
    }
    set species(species) {
        this._species = species;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    infoModal() {
        body.insertAdjacentHTML('afterbegin',  // inyecta modal con información detallada de personajes en html
        `<div class="modal fade" id="personaje${this.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title font-weight-bold text-uppercase" id="exampleModalLabel">${this.name}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                                <div class="modal-body">
                                    <ul>
                                        <li>ID: ${this.id}</li>
                                        <li>Nombre: ${this.name}</li>
                                        <li>Estado: ${this.status}</li>
                                        <li>Especie: ${this.species}</li>
                                        <li>Género: ${this.gender}</li>
                                        <li>Creado: ${this.created}</li>
                                        <li>Origen: ${this.origin}</li>
                                        <li>Ubicación: ${this.location}</li>
                                        <li>Episodios: ${this.episode}</li>
                                    </ul>
                                </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>  
        </div>`);
    }
    infoGeneral(image, resultado) {
        resultado.insertAdjacentHTML('beforeend',  // inyecta ficha con información general de personajes en html (id, species)
        // la imagen tiene atributos data-toggle y data-target para ejecutar el modal
        `<div class="fichaPersonaje Personaje${this.id} col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div class="imagenPersonaje">
                    <img src="${image}" class="card-img-top" alt="${this.name}" data-toggle="modal" data-target="#personaje${this.id}"></img>  
                </div>
                <div class="datosPersonaje">  
                    <ul>
                        <li><span>${this.id}</span></li>
                        <li><span>${this.species}</span></li>
                    </ul>
                </div>
        </div>`);
    }
}