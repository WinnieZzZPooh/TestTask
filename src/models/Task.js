export class Task {
  constructor (rawTask) {
    this.raw = rawTask
  }

  get id () {
    return this.raw.number_task
  }

  get nameOfTask () {
    return this.raw.task
  }

  get cost () {
    const formatter = new Intl.NumberFormat('ru');
    return formatter.format(this.raw.cost) + ' руб.'
  }

  get nameOfCompany () {
    return this.raw.name_of_company
  }

  get inn () {
    return this.raw.inn
  }

  get dateOfCreating () {
    return new Date(this.raw.date_of_creating * 1000).toLocaleDateString('ru')
  }

  get nameOfClient () {
    return this.raw.name_of_client
  }

  get tags () {
    return this.raw.tags.map(tag => {
      return {
        label: tag.label,
        ...(tag.color && { color: `#${tag.color}` })
      }
    })
  }

  get specialTags () {
    return this.raw.special_tags
  }
}
