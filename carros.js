const con = require('../connect/connect').con;

const create = (req, res) => {
    let marca_veiculo = req.body.marca_veiculo;
    let modelo_veiculo = req.body.modelo_veiculo;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiuclo = req.body.fabricacao_veiuclo;
    let cliente_id = req.body.cliente_id;
 

    let query = `INSERT INTO carros (marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiuclo, cliente_id) VALUES`
    query += `('${marca_veiculo}', '${modelo_veiculo}', '${ano_veiculo}', '${fabricacao_veiuclo}', '${cliente_id}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM carros', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result)
        }
    })
}


module.exports = {
    create,
    read
}