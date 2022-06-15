import { createPool } from 'mysql2/promise';

const port: any = process.env.db_mysql_port || 3306;

console.log( '1.APP_FOO', process.env.APP_FOO);

export default createPool({
    host: process.env.db_mysql_host,
    user: process.env.db_mysql_user,
    password: process.env.db_mysql_password,    
    database: process.env.db_mysql_database,
    port: port,
    decimalNumbers: true

    // host: 'localhost',
    // user: 'root',
    // password: 'admin',
    // database: 'jsm_wallet',
    // port: 3308,
    // decimalNumbers: true
});