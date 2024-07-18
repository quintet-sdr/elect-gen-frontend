<script lang="ts" setup>
import * as api from '~/server/utils/api'

const students = ref(await api.getStudents())
console.log(students.value)

const studentForm = ref(
  {} as {
    email?: string
    gpa?: number
    priority1?: string
    priority2?: string
    priority3?: string
    priority4?: string
    priority5?: string
  }
)

const computedBody = computed(() => ({
  email: studentForm.value.email!,
  gpa: studentForm.value.gpa!,
  priority_1: studentForm.value.priority1!,
  priority_2: studentForm.value.priority2!,
  priority_3: studentForm.value.priority3!,
  priority_4: studentForm.value.priority4!,
  priority_5: studentForm.value.priority5!
}))

async function submitStudent(): Promise<void> {
  const response = await api.postStudent(computedBody.value)
  if (!response.ok) {
    return alert(response.statusText)
  }

  studentForm.value = {}
  students.value = await api.getStudents()
}
</script>

<template>
  <div class="flex flex-col gap-12">
    <div>
      Current students:
      <div class="bg-slate-800 text-green-500">
        {{ students }}
      </div>
    </div>

    <form class="flex flex-col items-start gap-2" @submit.prevent="submitStudent">
      <div>
        Email
        <input v-model="studentForm.email" />
        {{ studentForm.email }} ({{ typeof studentForm.email }})
      </div>
      <div>
        GPA
        <input v-model="studentForm.gpa" step="any" type="number" />
        {{ studentForm.gpa }} ({{ typeof studentForm.gpa }})
      </div>
      <div>
        Priority 1
        <input v-model="studentForm.priority1" />
        {{ studentForm.priority1 }} ({{ typeof studentForm.priority1 }})
      </div>
      <div>
        Priority 2
        <input v-model="studentForm.priority2" />
        {{ studentForm.priority2 }} ({{ typeof studentForm.priority2 }})
      </div>
      <div>
        Priority 3
        <input v-model="studentForm.priority3" />
        {{ studentForm.priority3 }} ({{ typeof studentForm.priority3 }})
      </div>
      <div>
        Priority 4
        <input v-model="studentForm.priority4" />
        {{ studentForm.priority4 }} ({{ typeof studentForm.priority4 }})
      </div>
      <div>
        Priority 5
        <input v-model="studentForm.priority5" />
        {{ studentForm.priority5 }} ({{ typeof studentForm.priority5 }})
      </div>

      <div>
        Request body:
        <div class="bg-slate-800 text-green-500">
          {{ computedBody }}
        </div>
      </div>

      <button class="rounded bg-green-400 px-4 py-1 text-slate-800" type="submit">Submit</button>
    </form>
  </div>
</template>
