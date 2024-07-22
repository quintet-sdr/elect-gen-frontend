import { Course, CourseGroup, StudentPriorities } from '~/server/utils/schemas'

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

type ElectiveType = 'tech' | 'hum'

function download(url: URL): void {
  const link = document.createElement('a')
  link.href = url.toString()
  link.click()
}

export async function getCurrentTable(elective: ElectiveType): Promise<void> {
  const url = new URL(api('/get-current-table/'))
  url.search = new URLSearchParams({ elective }).toString()

  const response = await fetch(url)

  download(new URL(response.url))
}

export async function getExampleTable(elective: ElectiveType): Promise<void> {
  const url = new URL(api('/get-example-table/'))
  url.search = new URLSearchParams({ elective }).toString()

  const response = await fetch(url)

  download(new URL(response.url))
}

export async function studentsSubmitted(): Promise<number | undefined> {
  const url = new URL(api('/students-submitted/'))

  return await fetch(url)
    .then((response) => response.json())
    .catch((_) => undefined)
}

export async function coursesGroups(elective: ElectiveType): Promise<CourseGroup[] | undefined> {
  const url = new URL(api('/courses-groups/'))
  url.search = new URLSearchParams({ elective }).toString()

  return await fetch(url)
    .then((response) => response.json())
    .catch((_) => undefined)
}

export async function uploadTable(file: File): Promise<Response> {
  const url = new URL(api('/upload-table/'))
  url.search = new URLSearchParams({ name: file.name }).toString()

  const body = new FormData()
  body.append('file', file)

  return await fetch(url, {
    method: 'POST',
    headers: fileHeaders(),
    body
  })
}

export async function postStudents(
  student: StudentPriorities,
  elective: ElectiveType
): Promise<Response> {
  const url = new URL(api('/students/'))
  url.search = new URLSearchParams({ elective }).toString()

  return await fetch(url, {
    method: 'POST',
    headers: jsonHeaders(),
    body: JSON.stringify(student)
  })
}

export async function getStudents(
  elective: ElectiveType
): Promise<StudentPriorities[] | undefined> {
  const url = new URL(api('/students/'))
  url.search = new URLSearchParams({ elective }).toString()

  return await fetch(url)
    .then((response) => response.json())
    .catch((_) => undefined)
}

export async function postCourses(course: Course, elective: ElectiveType): Promise<Response> {
  const url = new URL(api('/courses/'))
  url.search = new URLSearchParams({ elective }).toString()

  return await fetch(url, {
    method: 'POST',
    headers: jsonHeaders(),
    body: JSON.stringify(course)
  })
}

export async function getCourses(elective: ElectiveType): Promise<Course[] | undefined> {
  const url = new URL(api('/courses/'))
  url.search = new URLSearchParams({ elective }).toString()

  return await fetch(url)
    .then((response) => response.json())
    .catch((_) => undefined)
}

export async function distributions(course: Course, elective: ElectiveType): Promise<Response> {
  const url = new URL(api('/distributions/'))
  url.search = new URLSearchParams({ elective }).toString()

  return await fetch(url, {
    method: 'POST',
    headers: jsonHeaders(),
    body: JSON.stringify(course)
  })
}

export default {}
