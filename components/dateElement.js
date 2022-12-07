export default (date) => {
    const dateElement = document.createElement("li");
    dateElement.class.add('date');
    dateElement.innerHTML = date;
    return dateElement;
};