const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  };

  function propsExtractor(obj) {
    let extracted = [];

        for (const i in obj.special) {
            const {id, name, icon, description = 'Описание недоступно'} = obj.special[i]
            extracted.push({id, name, icon, description});
        }

    return extracted;
  };

module.exports = { propsExtractor, character };

//console.log(propsExtractor(character));