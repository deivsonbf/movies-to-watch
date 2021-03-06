const mysql = require('../config/config');

exports.indexPage = (req, res) => {
    mysql.getConnection((error, conn) => {
        const sql = `SELECT * FROM filmes f WHERE watched = 0 ORDER BY f.titulo ;`
        conn.query(sql, (err, result) => {
            conn.release();
            res.render('index', { filmes: result })
        })
    })
}

exports.allMovies = (req, res) => {
    res.render('cadastrar_filme')
}

exports.insertMovies = (req, res) => {
    let watched = 0;
    mysql.getConnection((error, conn) => {
        const sql = `INSERT INTO filmes (titulo, image ,streaming , watched) values (? , ? , ? , ?)`;
        conn.query(sql, [req.body.titulo, req.body.image, req.body.streaming, watched], (error, result) => {
            conn.release()
            if (error) {
                return res.send(error)
            }

            res.redirect('/')
        })
    })
}

exports.watched = ((req, res) => {
    mysql.getConnection((error, conn) => {

        let id = req.body.id;

        let watch = 1

        const sql = `UPDATE filmes SET watched = ? WHERE id_filme = ?;`

        conn.query(sql, [watch, id], (error, result) => {

            conn.release();
            if (error) {
                return res.send(error)
            }
            res.redirect('/')
        })
    })
})