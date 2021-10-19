const Pool = require('pg').Pool
const pool = new Pool({
        host: '/cloudsql/plenary-cascade-329422:us-central1:fnma-lab',
        database: 'postgres',
        password: '',
        name: 'plenary-cascade-329422',
        user: 'postgres',
        connector: 'postgresql',
        instance: 'fnma-lab',
})

const getTasks = (request, response) => {

  pool.query('SELECT * FROM todo;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


module.exports = {
  getTasks
}