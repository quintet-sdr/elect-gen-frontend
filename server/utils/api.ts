import { Course, Student } from '~/server/utils/schemas'

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
  await fetch(api('/courses/'))
    .then((response) => response.json())
    .catch((_) => undefined)

  return [
    {
      id: 0,
      codename: 'fwd-ar',
      type: 'hum',
      groups: [],
      full_name: 'Front-End Web Development',
      short_name: 'Front-End',
      description: 'React, Svelte, Vue, etc...',
      instructor: 'AbdelRahman',
      min_overall: 30,
      max_overall: 100,
      low_in_group: 10,
      high_in_group: 20,
      max_in_group: 30
    },
    {
      id: 1,
      codename: 'fwd-ar',
      type: 'hum',
      groups: [],
      full_name: 'Cross-Platform Flutter',
      short_name: 'Flutter',
      description: 'React, Svelte, Vue, etc...',
      instructor: 'AbdelRahman',
      min_overall: 30,
      max_overall: 100,
      low_in_group: 10,
      high_in_group: 20,
      max_in_group: 30
    },
    {
      id: 2,
      codename: 'fwd-ar',
      type: 'hum',
      groups: [],
      full_name: 'Introduction to 3D Modelling',
      short_name: '3D Modelling',
      description: 'React, Svelte, Vue, etc...',
      instructor: 'AbdelRahman',
      min_overall: 30,
      max_overall: 100,
      low_in_group: 10,
      high_in_group: 20,
      max_in_group: 30
    },
    {
      id: 3,
      codename: 'fwd-ar',
      type: 'hum',
      groups: [],
      full_name: 'Psychology and Mindfullness',
      short_name: 'Psychology',
      description: 'React, Svelte, Vue, etc...',
      instructor: 'AbdelRahman',
      min_overall: 30,
      max_overall: 100,
      low_in_group: 10,
      high_in_group: 20,
      max_in_group: 30
    },
    {
      id: 4,
      codename: 'fwd-ar',
      type: 'hum',
      groups: [],
      full_name: 'Real-Time Scheduling and Computing Devices',
      short_name: 'Real-Time Scheduling',
      description: 'React, Svelte, Vue, etc...',
      instructor: 'AbdelRahman',
      min_overall: 30,
      max_overall: 100,
      low_in_group: 10,
      high_in_group: 20,
      max_in_group: 30
    },
    {
      id: 5,
      codename: 'fwd-ar',
      type: 'hum',
      groups: [],
      full_name: 'Branding and Marketing in IT',
      short_name: 'Branding in IT',
      description: 'React, Svelte, Vue, etc...',
      instructor: 'AbdelRahman',
      min_overall: 30,
      max_overall: 100,
      low_in_group: 10,
      high_in_group: 20,
      max_in_group: 30
    }
  ]
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
