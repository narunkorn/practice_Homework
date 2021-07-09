let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let result = words.filter((word) => {
    console.log(word.includes('io'));
    return word.includes('io')
});
console.log(result);//[ 'elite', 'exuberant', 'destruction', 'present' ]
