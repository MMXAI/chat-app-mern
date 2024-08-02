export const signup = async (req, res) => {
    try {
        const {fullName,username,password,confirmPassword,gender} = req.body;
        // Now we need to setup our database first
    } catch (error) {
        
    }
}

export const login = (req, res) => {
    console.log("[+] login User");
}

export const logout = (req, res) => {
    console.log("[+] signup User");
}
