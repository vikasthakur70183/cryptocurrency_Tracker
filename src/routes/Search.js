import axios from 'axios';

export class SearchApi {

    async id(id) {
        try {
            const recipes = await axios.post("/api/SearchById", { id });
            console.log(recipes);
            return recipes;
        } catch (error) {
            console.error("Error fetching recipes by id:", error.message);
            throw new Error("Failed to fetch recipes by id");
        }
    }

    async name(name) {
        try {
            const recipes = await axios.post("/api/SearchByName", { name });
            console.log(recipes);
            return recipes;
        } catch (error) {
            console.error("Error fetching recipes by name:", error.message);
            throw new Error("Failed to fetch recipes by name");
        }
    }

    async category(category) {
        try {
            const recipes = await axios.post("/api/SearchBycategory", { category });
            console.log(recipes);
            return recipes;
        } catch (error) {
            console.error("Error fetching recipes by categorie:", error.message);
            throw new Error("Failed to fetch recipes by categorie");
        }
    }

    async area(area) {
        try {
            const recipes = await axios.post("/api/SearchByArea", { area });
            console.log(recipes);
            return recipes;
        } catch (error) {
            console.error("Error fetching recipes by area:", error.message);
            throw new Error("Failed to fetch recipes by area");
        }
    }

    
}

const searchApi = new SearchApi();

export default searchApi;
