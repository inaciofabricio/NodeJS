CREATE TABLE IF NOT EXISTS noticias(
	id_noticia INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    noticia TEXT,
    resumo VARCHAR(100),
    autor VARCHAR(100),
    data_noticia DATE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id_noticia)
);