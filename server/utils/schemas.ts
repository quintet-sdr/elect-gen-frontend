export type CourseCodename = string
export type CourseGroup = string
export type StudentEmail = string

export interface Course {
  codename: CourseCodename
  type: 'tech' | 'hum'
  full_name: string
  short_name: string
  description: string
  instructor: string
  min_overall: number
  max_overall: number
  low_in_group: number
  high_in_group: number
  max_in_group: number
  groups: CourseGroup[]
}

export interface Student {
  email: StudentEmail
  gpa: number
  priority_1: CourseCodename
  priority_2: CourseCodename
  priority_3: CourseCodename
  priority_4: CourseCodename
  priority_5: CourseCodename
  group: CourseGroup[]
  completed: CourseCodename[]
  available: CourseCodename[]
}

export default {}
