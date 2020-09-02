import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}
    storeRecipes() {
        const token = this.authService.getToken();
        // return this.http.put('https://udemy-ng-http-b2917.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
        return this.http.put('https://udemy-ng-http-b2917.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        // this.http.get('https://udemy-ng-http-b2917.firebaseio.com/recipes.json?auth=' + token)
        this.http.get('https://udemy-ng-http-b2917.firebaseio.com/recipes.json')
            .subscribe(
                (response: HttpResponse<Recipe[]>) => {
                    console.log(response);
                    let i = 0;
                    const recipes: Recipe[] = [];
                    while (response[i]) {
                        const el = response[i];
                        let recipe = new Recipe('', '', '', []);
                        if (!el.ingredients) {
                            recipe = new Recipe(el.name, el.description, el.imagePath, []);
                        } else {
                            recipe = new Recipe(el.name, el.description, el.imagePath, el.ingredients);
                        }
                        recipes.push(recipe);
                        i++;
                    }
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}

