const json = '{ "usuario": {"id": 1, "name": "Jose"}, "ultimo_login": "123456789 00:00:00"  }';

const info = JSON.parse (json);

console.log (info.usuario.id);
console.log (info.ultimo_login);
teste(info);

function teste (infoP){
    console.log (infoP.usuario.name);
}