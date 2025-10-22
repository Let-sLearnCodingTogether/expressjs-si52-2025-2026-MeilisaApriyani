export const publicProfile = (req,res) => {
    const username = req.params.username;
    res.render("public-profile", {
        title : username,
        username: username,
        bio: "semangat"
    })
}

export const privateProfile = async (req, res) => {
    try {
        res.status(200).json({
            message: "Private profil berhasil di akses",
            data: null
        });
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};