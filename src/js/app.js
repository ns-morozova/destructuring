// TODO: write your code here

export default function extractSpec (special) {
    for (let i = 0; i < special.length; i++) {
        if (!special[i].hasOwnProperty('description')) {
            special[i].description = 'Описание недоступно';
        }
    }
    return special;
}
