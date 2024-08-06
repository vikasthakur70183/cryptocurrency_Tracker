import axios from 'axios';

export class RecipesApi {
    
    async saveRecipe(email, mealid) {
        try {
            const response = await axios.post('/api/save', { email, mealid });
            console.log(response);
            return response;
        } catch (error) {
            console.error("Error saving recipe:", error.message);
            throw new Error("Failed to save recipe");
        }
    }
    
}

const recipesApi = new RecipesApi();

export default recipesApi;
