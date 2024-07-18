export interface Course {
  codename: string
  type: 'hum' | 'tech'
  full_name: string
  short_name: string
  description: string
  instructor: string
  min_overall: number
  max_overall: number
  low_in_group: number
  high_in_group: number
  max_in_group: number
}

export interface Student {
  email: string
  gpa: number
  priority_1: string
  priority_2: string
  priority_3: string
  priority_4: string
  priority_5: string
}

export default {}
