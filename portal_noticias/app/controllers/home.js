module.exports.index = function (application,req,res) {
	
	var connection = application.config.dbConnection();
	var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

	NoticiasDAO.get5UltimasNoticias(function(error, result){
		res.render("home/index",{noticias : result});
	});

	
}