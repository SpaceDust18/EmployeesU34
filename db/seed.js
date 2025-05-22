import client from "./client.js";
import { createEmployee } from "./queries/employees.js";

console.log("🌱 Database seeded.");

(async function seed() {
  await seedEmployees();
})();

async function seedEmployees() {

await createEmployee( "Alice Johnson", "1990-04-15", 75000 )
await createEmployee( "Bob Smith", "1985-06-23", 82000 )
await createEmployee( "Charlie Brown", "1992-11-02", 68000 )
await createEmployee( "Danielle Lee", "1988-09-12", 91000 )
await createEmployee( "Ethan Harris", "1995-02-28", 72000 )
await createEmployee( "Fatima Khan", "1991-07-17", 88000 )
await createEmployee( "George O'Malley", "1983-12-05", 94000 )
await createEmployee( "Hannah Nguyen", "1996-05-21", 67000 )
await createEmployee( "Isaac Turner", "1989-10-10", 81000 )
await createEmployee( "Jasmine Patel", "1993-03-09", 70000 )


await client.end();
}

seedEmployees()