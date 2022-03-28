export const getUsers = async ( ) => {
    try {
        const response = await fetch(`https://reqres.in/api/users?page=1`);

        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}