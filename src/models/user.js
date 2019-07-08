module.exports = {
    createUser(con,sql){
        con.query(sql,(err, result)=>{
            if (err) throw err;
            console.log('Usuário criado com sucesso!')
        })
    }
}