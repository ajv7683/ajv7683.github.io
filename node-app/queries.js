const Pool = require('pg').Pool
const pool = new Pool({
        host: '/cloudsql/poised-journey-326013:us-central1:instance-1',
        database: 'postgres',
        password: 'vandorn1',
        name: 'poised-journey-326013',
        user: 'postgres',
        connector: 'postgresql',
        instance: 'instance-1',
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