import app from './src/app'
import {sequelize} from './src/db'
import bootstrap from './src/bootstrap'
import User from './src/models/Usuario'
import config from './lib/config';

sequelize
.sync({force:true, logging:false})
.then(() => {

    bootstrap()
    app.listen(config.port, () => {
        
    })

})
.catch(err => {
    console.log(err)
})



