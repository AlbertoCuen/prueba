export const asyncPostCall = async () => {

    try {
        const response = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: "eve.holt@reqres.in",
                password: "pistol"

            })
        });

        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }

}
