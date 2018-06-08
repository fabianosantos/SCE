const teamMembers = [
  'Lucas',
  'Gabriela',
  'Leonardo',
  'Heyder',
  'Matheus',
  'Victor',
  'Marcus',
  'Jeferson',
  'Thiago',
  'Otavio',
  'Anna',
  'Fabiano',
  'Alberto'
]

export default () => {
  const key = Math.floor(Math.random() * (teamMembers.length - 0.1))
  return teamMembers[key]
}
