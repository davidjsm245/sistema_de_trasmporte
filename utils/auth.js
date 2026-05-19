const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET;

///FUNCION PARA GENERAR UN TOKEN 
const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {expiresIn: '1h'});
}

////MIDDLEWARE PARA VERIFICAR TOKEN JWT
const verifyToken = (req, res, next)=> {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({message: 'Token no proporcionado'});
        
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], JWT_SECRET);
        req.user = decoded; //añade la informacion de usuario
        next();
    } catch (error) {
        return res.status(401).json({message: 'Token invalido'});
    }
};

module.exports = {
    generateToken,
    verifyToken
};
