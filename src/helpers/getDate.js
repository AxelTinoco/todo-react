export const getDate = () => {    //Poner en un helpers para mejro uso y lectura de codigo

    const newDate = new Date();
    const date = newDate.toLocaleDateString('default', { weekday: 'long' });;
    const dateNumber = newDate.getDate();
    const hour = newDate.getHours();
    const minutes = newDate.getMinutes();
    const month = newDate.toLocaleString('default', { month: 'long' });
    const year = newDate.getFullYear();

    
    
        const dateOrganized = {
            date,
            hour,
            minutes,
            month,
            year,
            dateNumber
        }
    
      return(dateOrganized)
    }