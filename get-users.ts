// deno run -A get-users.ts

//import { fetch } from "https://deno.land/std@latest/http/fetch.ts";

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (response.status === 200) {
            const users = await response.json();
            users.forEach( (item) => {
                console.log(`Name: ${item.name} ===>>> Email: ${item.email}`);
            });
        } else {
            console.error('Error Request. Status Code:', response.status);
        }
    } catch (error) {
        console.error('Error Request:', error);
    }
}

getUsers();

