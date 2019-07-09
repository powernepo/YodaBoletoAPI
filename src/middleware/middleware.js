module.exports = {
    verifyUserLogin(req, res, next) {

        if (true) //logged
        {
            console.log("Usuário logado !");
            next();
        } else {
            res.redirect("/");
        }
    }
}