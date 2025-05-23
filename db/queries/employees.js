







import client from "../client.js";

/** @returns the employee created according to the provided details */
export async function createEmployee( name, birthday, salary ) {
  const result = await client.query(
    'INSERT INTO employees (name, birthday, salary) VALUES ($1, $2, $3) RETURNING *;', [name, birthday, salary]
  )
  return result
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
 const { rows: employees } = await client.query(`SELECT * FROM employees;`);
 return employees;
}
/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  const { rows: employees } = await client.query(`SELECT * FROM employees WHERE id = $1`,
    [id]);
    return employees[0];
   }
/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  const { rows: existing } = await client.query(`SELECT * FROM employees WHERE id = $1`,
    [id]);
    if (existing.length === 0) {
      return undefined;
    }
    const { rows: updated } = await client.query(
      `UPDATE employees
       SET name = $1, birthday = $2, salary = $3
       WHERE id = $4
       RETURNING *`,
      [name, birthday, salary, id]
    );
      return updated[0];
  }

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  const { rows: existing } = await client.query(`SELECT * FROM employees WHERE id = $1`,
    [id]);
    if (existing.length === 0) {
      return undefined;      
    }
    const { rows: deleted } = await client.query(`DELETE FROM employees WHERE id = $1 RETURNING *`
      [id]
    )
    return deleted [0]
   }

