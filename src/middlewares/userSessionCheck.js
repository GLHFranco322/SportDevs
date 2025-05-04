const authMiddleware = async (req, res, next) => {
    try {
        const userLogin = req.session?.userLogin;
        
        if (!userLogin) {
            return res.status(401).json({
                error: 'No autenticado',
                message: 'Debes iniciar sesión para acceder'
            });
        }

        const user = await Users.findOne({
            where: { userLogin },
            include: [{
                model: Roles,
                as: 'rol'
            }]
        });

        if (!user) {
            return res.status(404).json({
                error: 'Usuario no encontrado',
                message: 'El usuario no existe en el sistema'
            });
        }

        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = authMiddleware;