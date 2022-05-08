import pg from 'pg';
const { Pool } = pg;

class Connection {
    constructor(){
        this.connection;    
    }
    getConnection(config){  
          if (!this.connection) {
           this.connection = new Pool(config);
         }
          return this.connection;
    }
  }

export {Connection}; 