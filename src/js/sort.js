const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

const sortSeq = ["name", "level"];

function orderByProps(obj, sortSeq) {
    //an array to store the result
    const ordered = [];

    //the first step is to sort by params from sortSeq'uence and delete them from the obj
    for (let i = 0; i < sortSeq.length; i++) {
        if (obj.hasOwnProperty(sortSeq[i])) {
            let o = Object.create(null);
            o = {};
            o.key = sortSeq[i];
            o.value = obj[sortSeq[i]];
            ordered.push(o);
            delete obj[sortSeq[i]];
        } else {
            throw new Error ('Недопустимый параметр сортировки');
        };
    };

    //the second step is to sort the rest of the properties which last in the obj by reduce method
    Object.keys(obj).sort().reduce(
        (_, k) => {
            let o = Object.create(null);
            o = {};
            o.key = k; 
            o.value = obj[k];
            ordered.push(o);
        },0
    );

return ordered;

};

module.exports = { orderByProps, obj, sortSeq };

//console.log(orderByProps(obj, sortSeq));