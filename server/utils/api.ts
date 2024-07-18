import { Student } from '~/server/utils/schemas'

function api(route: string): string {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase

  return `${apiBase}${route}`
}

function jsonHeaders(): Headers {
  return new Headers({ 'Content-Type': 'application/json' })
}

export async function getStudents(): Promise<Student[] | undefined> {
  return await fetch(api('/students/'))
    .then((response) => response.json())
    .catch((_) => undefined)
}

export async function postStudent(student: Student): Promise<Response> {
  return await fetch(api('/students/'), {
    method: 'POST',
    headers: jsonHeaders(),
    body: JSON.stringify(student)
  })
}

export default {}
