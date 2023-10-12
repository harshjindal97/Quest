export const newUser = async (registerData) => {
    try {
       const response = await fetch("api/register",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(registerData)
       })
       const newUserData = await response.json();

       return newUserData;
    } catch (error) {
        console.log("error in registration")
    }
}