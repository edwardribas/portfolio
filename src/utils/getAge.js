export const getAge = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    
    let age = currentYear - 2005;
    if (currentMonth < 3 || (currentMonth === 3 && currentDay < 11))
        age--;

    return { age }
}