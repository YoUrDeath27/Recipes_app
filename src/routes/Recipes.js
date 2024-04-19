// recipes.js
import Carbonara from '../assets/img/Spaghetti_Carbonara.jpg'
import Alfredo from '../assets/img/Chicken_Alfredo_Pasta.jpg'
import Margherita from '../assets/img/Margherita_Pizza.jpg';
import Beef from '../assets/img/Classic_Beef_Lasagna.jpg';
import Tikka from '../assets/img/Chicken_Tikka_Masala.jpg';
import Chili from '../assets/img/Vegetarian_Chili.jpg';
import Risotto from '../assets/img/Mushroom_Risotto.jpg';
import Stir from '../assets/img/Beef_Stir_Fry.jpg';
import Sushi from '../assets/img/Homemade_Sushi_Rolls.jpg';
import Tiramisu from '../assets/img/Classic_Tiramisu.jpg';
const Recipes = [
    {
        "id": 1,
        "name": "Spaghetti Carbonara",
        "top_name": "Spaghetti_Carbonara",
        "image": Carbonara,
        "alt": "Spaghetti Carbonara image",
        "ingredients": [
          { "name": "Spaghetti", "quantity": "200g" },
          { "name": "Pancetta or guanciale", "quantity": "100g" },
          { "name": "Eggs", "quantity": "2 large" },
          { "name": "Pecorino Romano cheese", "quantity": "50g" },
          { "name": "Parmesan cheese", "quantity": "50g" },
          { "name": "Garlic", "quantity": "2 cloves" }
        ],
        "steps": [
          "Cook spaghetti.",
          "Cook pancetta or guanciale until crispy, add garlic.",
          "Whisk eggs and cheese.",
          "Combine cooked spaghetti, pancetta/guanciale, and egg mixture."
        ]
      },
      {
        "id": 2,
        "name": "Chicken Alfredo Pasta",
        "top_name": "Chicken_Alfredo_Pasta",
        "image": Alfredo,
        "alt" : 'Chicken Alfredo Pasta image',
        "ingredients": [
          { "name": "Fettuccine pasta", "quantity": "250g" },
          { "name": "Chicken breast", "quantity": "300g" },
          { "name": "Heavy cream", "quantity": "250ml" },
          { "name": "Parmesan cheese", "quantity": "100g" },
          { "name": "Garlic", "quantity": "3 cloves" },
          { "name": "Butter", "quantity": "50g" }
        ],
        "steps": [
          "Cook pasta.",
          "Cook chicken until golden brown.",
          "Prepare Alfredo sauce with cream, Parmesan, garlic, and butter.",
          "Combine cooked pasta, chicken, and sauce."
        ]
      },
      {
        "id": 3,
        "name": "Margherita Pizza",
        "top_name": "Margherita_Pizza",
        "image" : Margherita,
        "alt": "Margherita Pizza image",
        "ingredients": [
          { "name": "Pizza dough", "quantity": "400g" },
          { "name": "Tomatoes", "quantity": "3 medium" },
          { "name": "Fresh mozzarella cheese", "quantity": "200g" },
          { "name": "Fresh basil leaves", "quantity": "A handful" },
          { "name": "Olive oil", "quantity": "2 tablespoons" },
          { "name": "Salt", "quantity": "To taste" }
        ],
        "steps": [
          "Preheat oven and prepare pizza dough.",
          "Slice tomatoes and mozzarella.",
          "Arrange toppings on dough.",
          "Bake until crust is golden and cheese is melted."
        ]
      },
      {
        "id": 4,
        "name": "Classic Beef Lasagna",
        "top_name": "Classic_Beef_Lasagna",
        "image" : Beef,
        "alt": "Classic Beef Lasagna image",
        "ingredients": [
          { "name": "Lasagna noodles", "quantity": "250g" },
          { "name": "Ground beef", "quantity": "500g" },
          { "name": "Tomato sauce", "quantity": "500ml" },
          { "name": "Ricotta cheese", "quantity": "250g" },
          { "name": "Mozzarella cheese", "quantity": "250g" },
          { "name": "Parmesan cheese", "quantity": "50g" },
          { "name": "Onion", "quantity": "1 large" },
          { "name": "Garlic", "quantity": "2 cloves" },
          { "name": "Olive oil", "quantity": "2 tablespoons" },
          { "name": "Salt", "quantity": "To taste" },
          { "name": "Black pepper", "quantity": "To taste" }
        ],
        "steps": [
          "Preheat oven to 375°F (190°C).",
          "Cook lasagna noodles according to package instructions.",
          "In a skillet, heat olive oil and sauté chopped onion and minced garlic until translucent.",
          "Add ground beef and cook until browned. Season with salt and pepper.",
          "Stir in tomato sauce and simmer for 10 minutes.",
          "In a separate bowl, mix ricotta cheese, grated Parmesan, and half of the mozzarella.",
          "Layer lasagna noodles, meat sauce, and cheese mixture in a baking dish. Repeat layers.",
          "Top with remaining mozzarella cheese.",
          "Cover with foil and bake for 25 minutes. Remove foil and bake for additional 10 minutes or until cheese is bubbly and golden brown."
        ]
      },
      {
        "id": 5,
        "name": "Chicken Tikka Masala",
        "top_name": "Chicken_Tikka_Masala",
        "image" : Tikka,
        "alt": "Chicken Tikka Masala image",
        "ingredients": [
          { "name": "Chicken thighs", "quantity": "600g" },
          { "name": "Plain yogurt", "quantity": "200g" },
          { "name": "Tomato puree", "quantity": "400g" },
          { "name": "Onion", "quantity": "1 large" },
          { "name": "Garlic", "quantity": "3 cloves" },
          { "name": "Ginger", "quantity": "1-inch piece" },
          { "name": "Garam masala", "quantity": "2 teaspoons" },
          { "name": "Cumin", "quantity": "1 teaspoon" },
          { "name": "Coriander", "quantity": "1 teaspoon" },
          { "name": "Turmeric", "quantity": "1/2 teaspoon" },
          { "name": "Cayenne pepper", "quantity": "1/2 teaspoon" },
          { "name": "Cream", "quantity": "200ml" },
          { "name": "Butter", "quantity": "2 tablespoons" },
          { "name": "Salt", "quantity": "To taste" },
          { "name": "Fresh cilantro", "quantity": "For garnish" },
          { "name": "Cooked rice", "quantity": "For serving" }
        ],
        "steps": [
          "Marinate chicken thighs in yogurt, minced garlic, grated ginger, and spices for at least 1 hour.",
          "In a skillet, melt butter and sauté chopped onion until golden brown.",
          "Add marinated chicken and cook until browned.",
          "Stir in tomato puree and simmer for 15 minutes.",
          "Add cream and simmer for additional 5 minutes.",
          "Garnish with chopped cilantro and serve with cooked rice."
        ]
      },
      {
        "id": 6,
        "name": "Vegetarian Chili",
        "top_name": "Vegetarian_Chili",
        "image" : Chili,
        "alt": "Vegetarian Chili image",
        "ingredients": [
          { "name": "Kidney beans", "quantity": "400g can" },
          { "name": "Black beans", "quantity": "400g can" },
          { "name": "Diced tomatoes", "quantity": "400g can" },
          { "name": "Bell peppers", "quantity": "2 medium" },
          { "name": "Onion", "quantity": "1 large" },
          { "name": "Garlic", "quantity": "3 cloves" },
          { "name": "Chili powder", "quantity": "2 tablespoons" },
          { "name": "Cumin", "quantity": "1 teaspoon" },
          { "name": "Paprika", "quantity": "1 teaspoon" },
          { "name": "Olive oil", "quantity": "2 tablespoons" },
          { "name": "Salt", "quantity": "To taste" },
          { "name": "Black pepper", "quantity": "To taste" },
          { "name": "Avocado", "quantity": "For garnish" },
          { "name": "Cilantro", "quantity": "For garnish" },
          { "name": "Sour cream", "quantity": "For serving" }
        ],
        "steps": [
          "In a large pot, heat olive oil and sauté chopped onion and minced garlic until translucent.",
          "Add diced bell peppers and cook until softened.",
          "Stir in chili powder, cumin, and paprika.",
          "Add canned kidney beans, black beans, and diced tomatoes (with liquid).",
          "Season with salt and black pepper.",
          "Simmer for 30 minutes, stirring occasionally.",
          "Serve hot, garnished with sliced avocado, chopped cilantro, and a dollop of sour cream."
        ]
      },
      {
        "id": 7,
        "name": "Mushroom Risotto",
        "top_name": "Mushroom_Risotto",
        "image" : Risotto,
        "alt": "Mushroom Risotto image",
        "ingredients": [
          { "name": "Arborio rice", "quantity": "300g" },
          { "name": "Mushrooms", "quantity": "250g" },
          { "name": "Vegetable broth", "quantity": "1 liter" },
          { "name": "White wine", "quantity": "150ml" },
          { "name": "Onion", "quantity": "1 large" },
          { "name": "Garlic", "quantity": "3 cloves" },
          { "name": "Parmesan cheese", "quantity": "100g" },
          { "name": "Butter", "quantity": "2 tablespoons" },
          { "name": "Olive oil", "quantity": "2 tablespoons" },
          { "name": "Salt", "quantity": "To taste" },
          { "name": "Black pepper", "quantity": "To taste" },
          { "name": "Fresh parsley", "quantity": "For garnish" }
        ],
        "steps": [
          "In a large skillet, heat olive oil and sauté chopped onion and minced garlic until translucent.",
          "Add sliced mushrooms and cook until browned.",
          "Stir in Arborio rice and cook for a few minutes until translucent.",
          "Deglaze the skillet with white wine and cook until evaporated.",
          "Gradually add vegetable broth, stirring constantly until rice is cooked and creamy.",
          "Stir in grated Parmesan cheese and butter. Season with salt and black pepper.",
          "Serve hot, garnished with chopped parsley."
        ]
      },
      {
        "id": 8,
        "name": "Beef Stir Fry",
        "top_name": "Beef_Stir_Fry",
        "image" : Stir,
        "alt": "Beef Stir Fry image",
        "ingredients": [
          { "name": "Beef sirloin", "quantity": "500g" },
          { "name": "Broccoli", "quantity": "1 head" },
          { "name": "Bell peppers", "quantity": "2" },
          { "name": "Soy sauce", "quantity": "3 tablespoons" },
          { "name": "Garlic", "quantity": "3 cloves" },
          { "name": "Ginger", "quantity": "1-inch piece" },
          { "name": "Sesame oil", "quantity": "2 tablespoons" },
          { "name": "Cornstarch", "quantity": "1 tablespoon" },
          { "name": "Water", "quantity": "100ml" },
          { "name": "Rice", "quantity": "For serving" },
          { "name": "Green onions", "quantity": "For garnish" }
        ],
        "steps": [
          "Slice beef into thin strips.",
          "In a bowl, mix soy sauce, minced garlic, grated ginger, cornstarch, and water to make a marinade.",
          "Marinate beef strips in the marinade for 30 minutes.",
          "Heat sesame oil in a wok or skillet over high heat.",
          "Stir fry marinated beef until browned.",
          "Add chopped broccoli and bell peppers, and continue to stir fry until vegetables are tender-crisp.",
          "Serve hot over cooked rice, garnished with sliced green onions."
        ]
      },
      {
        "id": 9,
        "name": "Homemade Sushi Rolls",
        "top_name" : "Homemade_Sushi_Rolls",
        "image" : Sushi,
        "alt": "Homemade Sushi Rolls image",
        "ingredients": [
          { "name": "Sushi rice", "quantity": "2 cups" },
          { "name": "Nori sheets", "quantity": "5" },
          { "name": "Fresh fish (salmon, tuna)", "quantity": "200g" },
          { "name": "Cucumber", "quantity": "1" },
          { "name": "Avocado", "quantity": "1" },
          { "name": "Soy sauce", "quantity": "For dipping" },
          { "name": "Pickled ginger", "quantity": "For serving" },
          { "name": "Wasabi", "quantity": "For serving" }
        ],
        "steps": [
          "Cook sushi rice according to package instructions and let it cool.",
          "Place a sheet of nori on a bamboo sushi mat.",
          "Spread a thin layer of sushi rice evenly over the nori sheet, leaving a 1-inch border at the top.",
          "Arrange thinly sliced fish, cucumber, and avocado in the center of the rice.",
          "Roll up the sushi tightly using the bamboo mat.",
          "Slice the sushi roll into bite-sized pieces using a sharp knife.",
          "Serve with soy sauce, pickled ginger, and wasabi."
        ]
      },
      {
        "id": 10,
        "name": "Classic Tiramisu",
        "top_name": "Classic_Tiramisu",
        "image" : Tiramisu,
        "alt": "Classic Tiramisu image",
        "ingredients": [
          { "name": "Ladyfingers", "quantity": "200g" },
          { "name": "Espresso coffee", "quantity": "1 cup" },
          { "name": "Mascarpone cheese", "quantity": "250g"
        },
        { "name": "Eggs", "quantity": "3 large" },
        { "name": "Granulated sugar", "quantity": "100g" },
        { "name": "Cocoa powder", "quantity": "For dusting" }
      ],
      "steps": [
        "Brew strong espresso coffee and let it cool.",
        "In a mixing bowl, beat egg yolks with sugar until pale and creamy.",
        "Add mascarpone cheese to the egg mixture and beat until smooth.",
        "In a separate bowl, beat egg whites until stiff peaks form.",
        "Gently fold the beaten egg whites into the mascarpone mixture.",
        "Dip ladyfingers into the cooled espresso coffee and layer them in a serving dish.",
        "Spread a layer of mascarpone mixture over the ladyfingers.",
        "Repeat layers, ending with a layer of mascarpone mixture on top.",
        "Cover and refrigerate tiramisu for at least 4 hours or overnight.",
        "Before serving, dust the top with cocoa powder."
      ]
    }  
];
  
  export default Recipes;
  