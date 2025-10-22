function getToday(){
    const today = new Date();
    return today.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
module.exports = {getToday};