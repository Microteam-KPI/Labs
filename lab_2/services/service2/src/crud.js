class CRUD {
    constructor(conect, config) {
      this.connection = conect.getConnection(config);
    }
  
    async select(id){
      const  res = await this.connection.query(`select * from serfirst where id='${id}';`);
      return res.rows;
    }
  
    async insert(id, name){
      let res = await this.connection.query(`INSERT INTO serfirst VALUES ('${id}', '${name}');`);
      return res.command;
    }
  
    async delete(id){
      let res = await this.connection.query(`DELETE FROM serfirst WHERE id = '${id}';`);
      return res.command;
    }
  
    async update(id, name){
      let res = await this.connection.query(`UPDATE serfirst SET name = '${name}' WHERE id='${id}';`);
      return res.command;
    }
  }

export {CRUD};
