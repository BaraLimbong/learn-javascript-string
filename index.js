const word1 = 'Please welcome'
const word2 = 'DinoCode'

console.log(word1)
console.log(word2)

const result = word1 + ' ' + word2 // using plus operator
const result2 = `${word1} ${word2}` // using string template

console.log(result)
console.log(result2)
console.log('---------')

const student = ['jo ', 'mario ', 'sakti ', 'ari ', 'bara ', 'ajin ']
const best = student[4] + 'best student' // using plus operator
const best2 = `${student[4]} best student` // using string template

console.log(best)
console.log(best2)

const good =
  student[2] + 'dan ' + student[0] + 'dan ' + student[1] + 'its so good'
const good2 = `${student[2]} and ${student[0]} and ${student[1]} are so good`
console.log(good)
console.log(good2)

const bad = student[3] + 'dan ' + student[5] + 'its not so good'
const bad2 = `${student[3]} and ${student[5]} are not so good`
console.log(bad)
console.log(bad2)

console.log('--------')

const sentence = new String(
  'semenjak mengenal impact byte saya jadi terbiasa untuk coding dan mengembangkan kemampuan saya terimakasih impact byte'
)
console.log(sentence.toUpperCase())
