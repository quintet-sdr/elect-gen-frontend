import { Course, StudentPriorities } from '~/server/utils/schemas'

function api(route: string): string {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase

  return `${apiBase}${route}`
}

function jsonHeaders(): Headers {
  return new Headers({ 'Content-Type': 'application/json' })
}

function fileHeaders(): Headers {
  return new Headers({
    Accept: 'application/json'
    // 'Content-Type': 'multipart/form-data'
  })
}

export async function uploadTable(file: File): Promise<Response> {
  const url = new URL(api('/upload-table'))
  url.search = new URLSearchParams({ name: file.name }).toString()

  const body = new FormData()
  body.append('file', file)

  return await fetch(url, {
    method: 'POST',
    headers: fileHeaders(),
    body
  })
}

export async function getCourses(): Promise<Course[] | undefined> {
  return await fetch(api('/courses/'))
    .then((response) => response.json())
    .catch((_) => undefined)
}

export async function newCourse(course: Course): Promise<Response> {
  return await fetch(api('/courses/'), {
    method: 'POST',
    headers: jsonHeaders(),
    body: JSON.stringify(course)
  })
}

export async function editCourse(course: Course): Promise<Response> {
  return await fetch(api('/courses/'), {
    method: 'POST',
    headers: jsonHeaders(),
    body: JSON.stringify(course)
  })
}

export async function getStudents(): Promise<StudentPriorities[] | undefined> {
  return await fetch(api('/students/'))
    .then((response) => response.json())
    .catch((_) => undefined)
}

export async function postStudent(student: StudentPriorities): Promise<Response> {
  return await fetch(api('/students/'), {
    method: 'POST',
    headers: jsonHeaders(),
    body: JSON.stringify(student)
  })
}

export default {}
