/* Importar as configurações do servidor */
var app = require('./config/server');

/* Parametrizar a porta de escuta */
var server = app.listen(80, function(){
	console.log("Servidor ON");
});

var io = require('socket.io').listen(server);

app.set('io', io);

/* Criar a conesão por websocket */

io.on('connection', function(socket){

	console.log('Usuario conectou');

	socket.on('disconnect', function(){
		console.log('Usuario desconectou');
	});

	socket.on('msgParaServidor', function(data){
		
		/* Dialogo*/
		socket.emit(
			'msgParaCliente', 
			{
				apelido : data.apelido, 
				mensagem : data.mensagem
			}
		);

		socket.broadcast.emit(
			'msgParaCliente', 
			{
				apelido : data.apelido, 
				mensagem : data.mensagem
			}
		);	


		/* Pessoas*/
		if(parseInt(data.apelido_atualizado_nos_clientes) == 0){

			socket.emit(
				'participantesParaCliente', 
				{
					apelido : data.apelido
				}
			);

			socket.broadcast.emit(
				'participantesParaCliente', 
				{
					apelido : data.apelido
				}
			);	
		}

	});
});