export default class RestoService {
    constructor() {
        this.url = 'http://localhost:3004/menu'
    }


    getMenuItems = async () => {
        const response = await fetch(this.url);

        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            console.log('Error HTTP' + response.status);
            throw new Error('Server Error');
        }
    }
}
