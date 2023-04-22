const $ = document.querySelector.bind(document)

const heading = $('#heading')

console.log(heading)

const app = (() => {
  const cars = ['Mercedes', 'Audi', 'Ferrari']
  const input = $('#input')
  const submit = $('#submit')
  const list = $('#list')

  return {
    add(car) {
      cars.push(car)
    },
    delete(index) {
      cars.splice(index, 1)
    },
    render() {
      const html = cars
        .map(
          (car, index) => `
            <li>${car}
            <span class="delete" data-index="${index}">&times</span>
            </li>
            `
        )
        .join('')
      list.innerHTML = html
    },
    handleRemove(event) {
      if (event.target.closest('.delete')) {
        const index = event.target.dataset.index
        this.delete(index)
        this.render()
      }
    },
    init() {
      submit.onclick = () => {
        const car = input.value
        this.add(car)
        this.render()
        input.value = null
        input.focus()
      }

      list.onclick = this.handleRemove.bind(this)

      this.render()
    },
  }
})()

app.init()
