"use server"

export async function addMember(email: string){
    const data = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        body: JSON.stringify({
            email: 'pkm19579@gmail.com',
        }),
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
            "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNDViZjdjYzAzYzQwZjIwOGE1NzMyNmQ5YThhOTAxZjUyNjFjY2U3YjJjODBkYzY3ZGY2NDQ3YTY0MTQ5MjFkNWU3NDc3ZDIyYzU3NTM1ZmEiLCJpYXQiOjE3MTc3NTI5OTAuNDg5ODYzLCJuYmYiOjE3MTc3NTI5OTAuNDg5ODY1LCJleHAiOjQ4NzM0MjY1OTAuNDg2ODExLCJzdWIiOiI5ODczOTQiLCJzY29wZXMiOltdfQ.gP5VowTovjapjBoVg76lxC9kOLCmoZQjDpe314oew9AmwusmnrbEqJAlml2lPFmy8XjYMsY2KJuj8udhNgv7xjZeZMRrrU9mgBJHgyOk1mklVvRJqFIpIGWOy3z2d3VkHhpppFA5G9_ygJIyJowHyxvsTYOcknN_heMgT95A6tU9RpfRFbSHl2X1DSY63Im2Dt_W0grGxmb7Zj5MCbEcsTmODSN4pNVWHz1yED9CR_naBHkEMTkAkeGRF7RR5uJ1sFiVdZXhGl5cmAgC7y5Z93F8ioEoIxHxf9ih5wOWXN-mzIR1GUtILqIHbSudP9U3KWbW7uYOqqpQVWE_EbFqKQ-tpNSDLU1uUkMXI44yMtv1P4X-butZDT9G1dPvEW1Lhjo3ldkPc7Y4y9ngW6xHScL0yC-QdJMImDIqKMYQuKEQXymTV1nZEQ4yaDRmUj0mabIB5VSrAaBZBk6DLhvdVFyUfzh9GEJjF-8VaDPOW5kolp5_X242jBLFYAHIVCJWnRiGLS5y-Tkq4Wp0sE0fUgMgN157oyBnfijMckyG9ourr55hvcnkSmha7vRgnxXwnWT2RJHQbJF8uTI0wXi3mq_cUDxzJhxNs-pd30Wbk-dmo49sROVXimT0KOHJcZjYe8dTXSGpAMGFKbap6sTovlWibmb8O1O-P4CnNupRJ9E"
        },
    })

    console.log(data);
}