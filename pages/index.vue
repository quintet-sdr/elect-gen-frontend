<script lang="ts" setup>
const email = useState('email')
await callOnce(async () => {
  email.value = 'a.potyomckin@innopolis.ru'
})

const localePath = useLocalePath()
navigateTo(localePath('/login'))
</script>
