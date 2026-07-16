var recipes = [
    {
        title: "Honey Garlic Salmon",
        description: "Tender salmon fillets seared and glazed in a sweet and savory honey garlic sauce",
        image: "./pic/honey-garlic-salmon.jpg",
        badgeone: "Seafood",
        badgetwo: "Quick",
        rating: "4.9",
        reviews: "320 reviews",
        prepTime: "10 min",
        cookTime: "10 min",
        servings: "2 people",
        ingredients: [
            "2 salmon fillets (skin-on or off)",
            "3 tablespoons honey",
            "4 garlic cloves, minced",
            "1 tablespoon soy sauce",
            "1 tablespoon fresh lemon juice",
            "1 tablespoon olive oil"
        ],
        instructions: [
            "Season salmon fillets with salt and black pepper on both sides.",
            "Heat olive oil in a skillet over medium-high heat and sear salmon for 3-4 minutes per side.",
            "Add minced garlic to the pan, cooking for 30 seconds until fragrant.",
            "Pour in the honey, soy sauce, and lemon juice; bring to a simmer.",
            "Spoon the sauce generously over the salmon fillets until the glaze thickens."
        ],
        nutrition: {
            Calories: "410 kcal",
            Protein: "34g",
            Carbohydrates: "22g",
            Fat: "16g",
            Fiber: "0g",
            Sodium: "580mg"
        },
        chefTips: [
            "Keep skin on during cooking to hold the fillets together.",
            "Lower the heat before adding glaze to prevent burning garlic.",
            "Baste salmon constantly with pan juices to keep it moist.",
            "Serve with jasmine rice to soak up the extra sauce."
        ]
    },
    {
        title: "Chicken Stir-Fry",
        description: "Colorful mixed vegetables and chicken breast tossed in a classic savory stir-fry sauce",
        image: "./pic/ChickenStirFry.jpg",
        badgeone: "Easy",
        badgetwo: "Healthy",
        rating: "4.7",
        reviews: "245 reviews",
        prepTime: "15 min",
        cookTime: "10 min",
        servings: "3 people",
        ingredients: [
            "400g chicken breast, cubed",
            "1 bell pepper, sliced",
            "1 cup broccoli florets",
            "1 carrot, thinly sliced",
            "2 tablespoons soy sauce",
            "1 tablespoon sesame oil"
        ],
        instructions: [
            "Heat sesame oil in a large wok or skillet over high heat.",
            "Add chicken breast cubes and cook until browned and cooked through (5-6 minutes).",
            "Remove chicken from skillet and toss in broccoli, carrots, and bell peppers.",
            "Stir-fry vegetables for 3-4 minutes until tender-crisp.",
            "Return chicken to the skillet, pour soy sauce over everything, and toss well."
        ],
        nutrition: {
            Calories: "320 kcal",
            Protein: "28g",
            Carbohydrates: "14g",
            Fat: "12g",
            Fiber: "3g",
            Sodium: "690mg"
        },
        chefTips: [
            "Prep all ingredients beforehand; stir-frying goes very fast.",
            "Cut veggies to uniform sizes for even cooking.",
            "Add a splash of water to steam tough broccoli.",
            "Garnish with sesame seeds and green onions before serving."
        ]
    },
    {
        title: "Caprese Sandwich",
        description: "Fresh mozzarella, ripe tomatoes, and fragrant basil pesto pressed in crusty ciabatta bread",
        image: "./pic/CapreseSandwich.jpg",
        badgeone: "Vegetarian",
        badgetwo: "Quick",
        rating: "4.6",
        reviews: "180 reviews",
        prepTime: "10 min",
        cookTime: "5 min",
        servings: "1 person",
        ingredients: [
            "1 ciabatta bread or panini roll",
            "3-4 slices fresh mozzarella cheese",
            "1 ripe tomato, sliced",
            "2 tablespoons basil pesto",
            "1 tablespoon balsamic glaze",
            "Fresh basil leaves"
        ],
        instructions: [
            "Slice the ciabatta bread in half horizontally.",
            "Spread basil pesto evenly over the bottom half of the bread.",
            "Layer mozzarella slices, tomato slices, and fresh basil leaves on top.",
            "Drizzle with balsamic glaze and close the sandwich.",
            "Optional: press in a panini maker or griddle on a skillet for 2-3 minutes until toasted."
        ],
        nutrition: {
            Calories: "460 kcal",
            Protein: "16g",
            Carbohydrates: "48g",
            Fat: "22g",
            Fiber: "3g",
            Sodium: "610mg"
        },
        chefTips: [
            "Pat mozzarella dry to prevent a soggy sandwich.",
            "Weigh down with a heavy skillet if you lack a press.",
            "Use high-quality sourdough or crusty bread for max crunch.",
            "Add prosciutto or grilled chicken for extra protein."
        ]
    },
    {
        title: "Thai Green Curry",
        description: "A rich and fragrant coconut milk curry loaded with chicken, vegetables, and aromatic herbs",
        image: "./pic/ThaiGreenCurry.jpg",
        badgeone: "Thai",
        badgetwo: "Spicy",
        rating: "4.8",
        reviews: "290 reviews",
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "4 people",
        ingredients: [
            "400g chicken breast, thinly sliced",
            "2 tablespoons Thai green curry paste",
            "1 can (400ml) coconut milk",
            "1 cup bamboo shoots or bell peppers",
            "1 tablespoon fish sauce",
            "Fresh Thai basil and lime"
        ],
        instructions: [
            "Heat a tablespoon of oil in a pot over medium heat and fry the green curry paste for 1 minute.",
            "Gradually pour in the coconut milk, stirring constantly to blend with the paste.",
            "Add the sliced chicken breast and simmer gently in the sauce for 8-10 minutes.",
            "Toss in the bamboo shoots and bell peppers, cooking until they soften slightly.",
            "Stir in the fish sauce, then garnish with fresh Thai basil and a squeeze of lime juice."
        ],
        nutrition: {
            Calories: "390 kcal",
            Protein: "24g",
            Carbohydrates: "12g",
            Fat: "28g",
            Fiber: "2g",
            Sodium: "780mg"
        },
        chefTips: [
            "Sauté curry paste first to unlock deep, aromatic oils.",
            "Use full-fat canned coconut milk for a rich texture.",
            "Balance excessive spice with a teaspoon of brown sugar.",
            "Serve piping hot over fragrant steamed jasmine rice."
        ]
    },
    {
        title: "Shrimp Scampi",
        description: "Tender shrimp tossed in a luxurious garlic, white wine, butter, and lemon sauce over pasta",
        image: "./pic/GarlicButterShrimp.jpg",
        badgeone: "Seafood",
        badgetwo: "Classic",
        rating: "4.8",
        reviews: "310 reviews",
        prepTime: "10 min",
        cookTime: "10 min",
        servings: "2 people",
        ingredients: [
            "250g linguine or angel hair pasta",
            "400g shrimp, peeled and deveined",
            "3 tablespoons butter",
            "4 garlic cloves, minced",
            "Juice of 1 lemon",
            "Fresh parsley, finely chopped"
        ],
        instructions: [
            "Cook pasta in salted boiling water according to package directions, then drain.",
            "Melt butter and olive oil in a large skillet over medium-high heat.",
            "Sauté minced garlic for 1 minute, then add shrimp in a single layer.",
            "Cook shrimp for 2 minutes per side until pink, then splash with lemon juice.",
            "Toss in the drained pasta and fresh parsley, stirring to coat in the butter sauce."
        ],
        nutrition: {
            Calories: "530 kcal",
            Protein: "28g",
            Carbohydrates: "58g",
            Fat: "18g",
            Fiber: "2g",
            Sodium: "640mg"
        },
        chefTips: [
            "Remove shrimp as soon as they curl to avoid overcooking.",
            "Reserve pasta water to loosen the sauce if needed.",
            "Add red pepper flakes with garlic for a subtle kick.",
            "Use fresh lemon juice; avoid bottled alternatives."
        ]
    },
    {
        title: "French Onion Soup",
        description: "Slow-caramelized sweet onions simmered in rich beef broth, topped with toasted Gruyère cheese",
        image: "./pic/FrenchOnionSoup.jpg",
        badgeone: "Warm",
        badgetwo: "French",
        rating: "4.7",
        reviews: "220 reviews",
        prepTime: "15 min",
        cookTime: "50 min",
        servings: "4 people",
        ingredients: [
            "4 large yellow onions, thinly sliced",
            "3 tablespoons butter",
            "4 cups rich beef broth",
            "1 French baguette, sliced",
            "1 cup Gruyère or Swiss cheese, grated",
            "2 garlic cloves"
        ],
        instructions: [
            "Melt butter in a heavy pot over medium-low heat. Add onions and cook, stirring occasionally.",
            "Caramelize the onions slowly for 35-40 minutes until they are deep golden brown and sweet.",
            "Pour in the beef broth and simmer uncovered for an additional 15 minutes.",
            "Toast baguette slices and rub them gently with a raw clove of garlic.",
            "Ladle soup into oven-safe bowls, float the toasted baguette, top with cheese, and broil until bubbly."
        ],
        nutrition: {
            Calories: "310 kcal",
            Protein: "12g",
            Carbohydrates: "26g",
            Fat: "15g",
            Fiber: "4g",
            Sodium: "920mg"
        },
        chefTips: [
            "Be patient! Do not rush the onions on high heat.",
            "Deglaze the pot with water to scrape up tasty brown bits.",
            "Use deep, oven-safe crocks for the best cheese crust.",
            "Add a splash of Worcestershire sauce for deeper flavor."
        ]
    },
    {
        title: "Greek Moussaka",
        description: "A traditional baked Greek dish with layered eggplant, spiced minced meat, and creamy Béchamel",
        image: "./pic/GreekMoussaka.jpg",
        badgeone: "Greek",
        badgetwo: "Baking",
        rating: "4.9",
        reviews: "190 reviews",
        prepTime: "30 min",
        cookTime: "1 hour",
        servings: "6 people",
        ingredients: [
            "2 large eggplants, sliced",
            "500g ground beef or lamb",
            "1 onion, chopped",
            "1 can (400g) crushed tomatoes",
            "2 cups milk (for Béchamel)",
            "3 tablespoons butter and flour (for Béchamel roux)"
        ],
        instructions: [
            "Salt the eggplant slices and bake them at 200°C for 20 minutes until tender.",
            "Sauté onions and brown the ground meat. Stir in tomatoes, cinnamon, and simmer for 15 minutes.",
            "To make Béchamel: whisk butter and flour, cook for 1 minute, slowly add milk until thick.",
            "Layer eggplants at the bottom of a baking dish, followed by the meat sauce.",
            "Pour the Béchamel sauce over the top layer and bake at 180°C for 45 minutes until golden brown."
        ],
        nutrition: {
            Calories: "480 kcal",
            Protein: "24g",
            Carbohydrates: "32g",
            Fat: "28g",
            Fiber: "6g",
            Sodium: "710mg"
        },
        chefTips: [
            "Salt eggplant first to draw out bitterness and reduce oil absorption.",
            "Let moussaka rest 20-30 minutes before slicing to keep layers intact.",
            "Add a pinch of nutmeg to the Béchamel for authentic flavor.",
            "Layer thinly sliced parboiled potatoes at the bottom if desired."
        ]
    },
    {
        title: "Mediterranean Quinoa Bowl",
        description: "Healthy bowl with quinoa, fresh vegetables, and tahini dressing",
        image: "./pic/MediterraneanQuinoaBowl.jpg",
        badgeone: "Easy",
        badgetwo: "Mediterranean",
        rating: "4.5",
        reviews: "156 reviews",
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "1 person",
        ingredients: [
            "1 cup quinoa",
            "Cherry tomatoes, halved",
            "Cucumber, diced",
            "Red onion, sliced",
            "Kalamata olives",
            "Feta cheese, crumbled"
        ],
        instructions: [
            "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
            "While quinoa cooks, prepare all vegetables and set aside.",
            "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
            "Fluff cooked quinoa with a fork and let cool slightly.",
            "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives."
        ],
        nutrition: {
            Calories: "480 kcal",
            Protein: "18g",
            Carbohydrates: "58g",
            Fat: "20g",
            Fiber: "10g",
            Sodium: "540mg"
        },
        chefTips: [
            "Rinse quinoa well to remove its bitter outer coating.",
            "Let quinoa cool completely before tossing with fresh greens.",
            "Make extra tahini dressing; it stores great in the fridge.",
            "Add chickpeas or grilled chicken to boost the protein."
        ]
    },
    {
        title: "Caesar Salad",
        description: "Crisp romaine lettuce tossed in creamy Caesar dressing with parmesan and crunchy garlic croutons",
        image: "./pic/Caesar-Salad.jpg",
        badgeone: "Healthy",
        badgetwo: "Fresh",
        rating: "4.6",
        reviews: "210 reviews",
        prepTime: "15 min",
        cookTime: "10 min",
        servings: "2 people",
        ingredients: [
            "1 large head of romaine lettuce, chopped",
            "1/2 cup parmesan cheese, shaved",
            "1 cup garlic croutons",
            "1/2 cup Caesar dressing",
            "1 tablespoon black pepper",
            "Optional: sliced grilled chicken breast"
        ],
        instructions: [
            "Wash and thoroughly dry the chopped romaine lettuce.",
            "In a large bowl, toss the lettuce with the Caesar dressing until evenly coated.",
            "Add the garlic croutons and shaved parmesan cheese, tossing gently.",
            "Slice warm grilled chicken breast diagonally if using.",
            "Top the salad with the chicken slices and finish with freshly cracked black pepper."
        ],
        nutrition: {
            Calories: "380 kcal",
            Protein: "28g",
            Carbohydrates: "12g",
            Fat: "24g",
            Fiber: "3g",
            Sodium: "720mg"
        },
        chefTips: [
            "Dry the lettuce completely so the dressing clings properly.",
            "Chill your mixing bowl to keep the salad ultra-crisp.",
            "Squeeze fresh lemon juice at the end to brighten flavors.",
            "Swap chicken for grilled shrimp to enjoy a seafood twist."
        ]
    },
    {
        title: "Classic Beef Burger",
        description: "Juicy homemade beef patty with cheese and secret burger sauce",
        image: "./pic/beef-burger.jpg",
        badgeone: "Fast Food",
        badgetwo: "Classic",
        rating: "4.8",
        reviews: "512 reviews",
        prepTime: "15 min",
        cookTime: "10 min",
        servings: "4 people",
        ingredients: [
            "600g ground beef (80/20 lean to fat)",
            "4 burger buns, toasted",
            "4 cheddar cheese slices",
            "1 large tomato, sliced",
            "Lettuce leaves",
            "Burger sauce (mayo, ketchup, and relish)"
        ],
        instructions: [
            "Divide the ground beef into 4 equal portions and shape them into patties.",
            "Season both sides of each patty generously with salt and black pepper.",
            "Heat a grill pan or skillet over high heat and sear patties for 3-4 minutes per side.",
            "Place a slice of cheddar cheese on each patty during the last minute of cooking to melt.",
            "Assemble the burgers: spread sauce on buns, add lettuce, tomato, patty, and close."
        ],
        nutrition: {
            Calories: "620 kcal",
            Protein: "34g",
            Carbohydrates: "40g",
            Fat: "28g",
            Fiber: "2g",
            Sodium: "890mg"
        },
        chefTips: [
            "Never press down on cooking patties to keep juices locked in.",
            "Dimple the center of patties to prevent them from swelling.",
            "Toast buns to prevent them from absorbing excess sauce.",
            "Let patties rest for 2 minutes before assembling."
        ]
    },
    {
        title: "BBQ Pulled Pork",
        description: "Slow-cooked pork shoulder shredded and tossed in a smoky sweet BBQ sauce",
        image: "./pic/BBQPulledPork.jpg",
        badgeone: "Slow Cook",
        badgetwo: "Comfort",
        rating: "4.9",
        reviews: "450 reviews",
        prepTime: "20 min",
        cookTime: "6 hours",
        servings: "8 people",
        ingredients: [
            "1.5kg pork shoulder (Boston butt)",
            "2 cups BBQ sauce",
            "1/4 cup brown sugar",
            "1 tablespoon paprika",
            "1 onion, sliced",
            "1/2 cup apple cider vinegar"
        ],
        instructions: [
            "Rub the pork shoulder with brown sugar, paprika, salt, pepper, and garlic powder.",
            "Place sliced onions at the bottom of a slow cooker, then add the pork.",
            "Pour apple cider vinegar and half of the BBQ sauce over the pork.",
            "Cover and cook on low for 6-8 hours until extremely tender.",
            "Remove pork, shred with two forks, discard excess fat, and mix back in with remaining BBQ sauce."
        ],
        nutrition: {
            Calories: "450 kcal",
            Protein: "32g",
            Carbohydrates: "28g",
            Fat: "18g",
            Fiber: "1g",
            Sodium: "840mg"
        },
        chefTips: [
            "Always cook on 'Low' for an ultra-shreddable texture.",
            "Sear the pork in a skillet first to seal in extra flavor.",
            "Serve on warm brioche buns alongside cold coleslaw.",
            "Save cooking juices to moisten leftovers when reheating."
        ]
    },
    {
        title: "Vegetable Curry",
        description: "A hearty and warming coconut-based curry loaded with potatoes, chickpeas, and fresh spinach",
        image: "./pic/VegetableCurry.jpg",
        badgeone: "Vegetarian",
        badgetwo: "Spicy",
        rating: "4.6",
        reviews: "175 reviews",
        prepTime: "15 min",
        cookTime: "25 min",
        servings: "4 people",
        ingredients: [
            "2 large potatoes, cubed",
            "1 can (400g) chickpeas, drained",
            "2 cups fresh baby spinach",
            "1 can (400ml) coconut milk",
            "2 tablespoons yellow curry powder",
            "1 onion and 2 garlic cloves, minced"
        ],
        instructions: [
            "Sauté onion and garlic in olive oil in a large pot until soft.",
            "Stir in the yellow curry powder, cooking for 1 minute until highly aromatic.",
            "Add potato cubes, chickpeas, and pour in the coconut milk.",
            "Simmer on medium-low heat for 20 minutes until potatoes are completely fork-tender.",
            "Stir in the fresh spinach leaves during the last 2 minutes until wilted."
        ],
        nutrition: {
            Calories: "340 kcal",
            Protein: "8g",
            Carbohydrates: "48g",
            Fat: "14g",
            Fiber: "8g",
            Sodium: "510mg"
        },
        chefTips: [
            "Cut potatoes into small cubes to ensure fast, even cooking.",
            "Customize with cauliflower florets or green peas if desired.",
            "Finish with fresh lime juice to cut the rich coconut fat.",
            "Serve side-by-side with warm, toasted garlic naan."
        ]
    },
    {
        title: "Pad Thai",
        description: "Classic Thai stir-fried rice noodles with tofu, shrimp, eggs, bean sprouts, and crushed peanuts",
        image: "./pic/PadThai.jpg",
        badgeone: "Thai",
        badgetwo: "Stir-Fry",
        rating: "4.8",
        reviews: "390 reviews",
        prepTime: "20 min",
        cookTime: "10 min",
        servings: "2 people",
        ingredients: [
            "150g flat rice noodles",
            "150g shrimp or tofu, cubed",
            "2 eggs, lightly beaten",
            "3 tablespoons Pad Thai sauce (tamarind, fish sauce, sugar)",
            "1 cup bean sprouts",
            "1/4 cup crushed roasted peanuts"
        ],
        instructions: [
            "Soak rice noodles in warm water for 30 minutes until pliable, then drain.",
            "Heat oil in a wok and sauté shrimp or tofu until cooked through.",
            "Push food to the side of the wok, crack in the eggs, and scramble them.",
            "Add noodles and Pad Thai sauce, tossing everything quickly on high heat.",
            "Stir in bean sprouts, then plate and top with crushed peanuts and lime wedges."
        ],
        nutrition: {
            Calories: "510 kcal",
            Protein: "22g",
            Carbohydrates: "74g",
            Fat: "14g",
            Fiber: "3g",
            Sodium: "860mg"
        },
        chefTips: [
            "Never boil noodles; soak in hot tap water for perfect chew.",
            "Tamarind paste is mandatory for authentic sweet-sour flavor.",
            "Prep ingredients beforehand; wok-cooking finishes in minutes.",
            "Offer extra chili flakes on the side for adjustable heat."
        ]
    },
    {
        title: "Beef Tacos",
        description: "Crispy or soft taco shells filled with seasoned ground beef, fresh salsa, lettuce, and cheddar",
        image: "./pic/BeefTacos.jpg",
        badgeone: "Mexican",
        badgetwo: "Quick",
        rating: "4.7",
        reviews: "280 reviews",
        prepTime: "15 min",
        cookTime: "10 min",
        servings: "3 people",
        ingredients: [
            "500g ground beef",
            "1 packet taco seasoning (cumin, chili, garlic)",
            "6-8 taco shells (soft or hard)",
            "1 cup shredded lettuce",
            "1 cup cheddar cheese, shredded",
            "1/2 cup sour cream or pico de gallo"
        ],
        instructions: [
            "Brown the ground beef in a skillet over medium-high heat; drain excess grease.",
            "Add taco seasoning and 1/4 cup water, letting it simmer for 5 minutes until thick.",
            "Warm the taco shells in the oven or dry skillet according to package instructions.",
            "Assemble by spooning seasoned beef into each taco shell.",
            "Top generously with shredded lettuce, cheddar cheese, salsa, and sour cream."
        ],
        nutrition: {
            Calories: "420 kcal",
            Protein: "26g",
            Carbohydrates: "24g",
            Fat: "22g",
            Fiber: "4g",
            Sodium: "790mg"
        },
        chefTips: [
            "Drain beef grease completely to prevent soggy taco shells.",
            "Bake hard shells for 5 minutes to restore ultimate crunch.",
            "Set up a DIY topping bar for a fun, interactive dinner.",
            "Squeeze fresh lime over beef to elevate the warm spices."
        ]
    },
    {
        title: "Creamy Spaghetti Carbonara",
        description: "An authentic Roman pasta dish made with egg yolks, crisp guanciale, and sharp Pecorino Romano",
        image: "./pic/CreamySpaghettiCarbonara.jpg",
        badgeone: "Italian",
        badgetwo: "Creamy",
        rating: "4.8",
        reviews: "490 reviews",
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",
        ingredients: [
            "200g spaghetti pasta",
            "100g guanciale or pancetta, cubed",
            "2 large egg yolks and 1 whole egg",
            "1 cup Pecorino Romano cheese, grated",
            "Plenty of freshly cracked black pepper"
        ],
        instructions: [
            "Cook spaghetti in salted boiling water until al dente.",
            "In a skillet, fry cubed guanciale over medium heat until crispy; remove from heat.",
            "In a bowl, whisk eggs, egg yolks, grated Pecorino, and black pepper into a thick paste.",
            "Drain pasta (reserve some water) and immediately toss it into the skillet with warm guanciale grease.",
            "Remove skillet completely from heat, pour in the egg-cheese mixture, and stir rapidly, adding splash of pasta water until creamy."
        ],
        nutrition: {
            Calories: "640 kcal",
            Protein: "26g",
            Carbohydrates: "58g",
            Fat: "32g",
            Fiber: "2g",
            Sodium: "810mg"
        },
        chefTips: [
            "No cream! Emulsify eggs, cheese, and pasta water instead.",
            "Kill the pan heat before adding eggs to avoid scrambling.",
            "Go light on pasta water salt; Pecorino is already salty.",
            "Always use freshly cracked coarse black pepper."
        ]
    },
    {
        title: "Lasagna Bolognese",
        description: "Classic Italian baked lasagna layered with rich meat sauce, silky Béchamel, and mozzarella",
        image: "./pic/LasagnaBolognese.jpg",
        badgeone: "Italian",
        badgetwo: "Baking",
        rating: "4.9",
        reviews: "560 reviews",
        prepTime: "40 min",
        cookTime: "45 min",
        servings: "8 people",
        ingredients: [
            "12 lasagna pasta sheets",
            "500g bolognese meat sauce",
            "3 cups Béchamel sauce",
            "2 cups shredded mozzarella cheese",
            "1 cup Parmesan cheese, grated"
        ],
        instructions: [
            "Preheat oven to 180°C (350°F) and grease a deep baking dish.",
            "Spread a thin layer of bolognese sauce at the bottom of the dish.",
            "Layer lasagna sheets, bolognese, Béchamel, and mozzarella cheese.",
            "Repeat layering until all ingredients are used, ending with Béchamel and cheese on top.",
            "Cover with foil, bake for 30 minutes, remove foil, and bake 15 more minutes until bubbling and golden."
        ],
        nutrition: {
            Calories: "580 kcal",
            Protein: "32g",
            Carbohydrates: "44g",
            Fat: "26g",
            Fiber: "3g",
            Sodium: "890mg"
        },
        chefTips: [
            "Rest lasagna for 15 minutes post-bake for neat slices.",
            "Place a tray underneath the dish to catch cheese bubbles.",
            "If using no-boil sheets, ensure your sauce is slightly wet.",
            "Make Bolognese a day early; flavors develop overnight."
        ]
    }
    ,{
        title: "Margherita Pizza",
        description: "Classic Neapolitan pizza topped with rich tomato sauce, fresh mozzarella, and aromatic basil",
        image: "./pic/MargheritaPizza.jpg",
        badgeone: "Italian",
        badgetwo: "Vegetarian",
        rating: "4.8",
        reviews: "410 reviews",
        prepTime: "20 min",
        cookTime: "10 min",
        servings: "2 people",
        ingredients: [
            "1 pre-made pizza dough",
            "1/2 cup canned San Marzano crushed tomatoes",
            "120g fresh mozzarella, sliced",
            "Fresh basil leaves",
            "1 tablespoon extra virgin olive oil",
            "A pinch of salt"
        ],
        instructions: [
            "Preheat your oven to its highest temperature (ideally 250°C/500°F) with a pizza stone inside.",
            "Roll out the pizza dough on a floured surface into a round shape.",
            "Spread the crushed tomatoes evenly over the dough, leaving a small border for the crust.",
            "Top with fresh mozzarella slices and a pinch of salt.",
            "Bake for 8-10 minutes until the crust is golden and cheese is bubbly, then garnish with fresh basil and olive oil."
        ],
        nutrition: {
            Calories: "520 kcal",
            Protein: "18g",
            Carbohydrates: "64g",
            Fat: "16g",
            Fiber: "3g",
            Sodium: "710mg"
        },
        chefTips: [
            "Use a very hot oven to get a crispy, pizzeria-style crust.",
            "Pat the fresh mozzarella dry with paper towels to prevent soggy dough.",
            "Add the fresh basil *after* baking so it doesn't burn in the oven.",
            "Drizzle with hot honey or garlic oil for an extra kick of flavor."
        ]
    },
    {
        title: "Crispy Chicken Alfredo",
        description: "Crispy pan-seared chicken breast served over fettuccine tossed in a rich, velvety parmesan cream sauce",
        image: "./pic/CrispyChickenAlfredo.jpg",
        badgeone: "Classic",
        badgetwo: "Creamy",
        rating: "4.9",
        reviews: "380 reviews",
        prepTime: "15 min",
        cookTime: "15 min",
        servings: "2 people",
        ingredients: [
            "200g fettuccine pasta",
            "2 chicken breasts, halved horizontally",
            "1 cup heavy cream",
            "1/2 cup freshly grated Parmesan cheese",
            "2 tablespoons butter",
            "2 garlic cloves, minced"
        ],
        instructions: [
            "Cook fettuccine in salted boiling water until al dente; drain and set aside.",
            "Season chicken breasts with garlic powder, salt, and pepper, then sear in a hot skillet until golden and cooked through.",
            "In the same skillet, melt butter over medium heat and sauté minced garlic for 1 minute.",
            "Pour in heavy cream and bring to a simmer, then stir in grated Parmesan cheese until completely melted.",
            "Toss the pasta in the Alfredo sauce, slice the chicken, and serve it on top of the pasta."
        ],
        nutrition: {
            Calories: "710 kcal",
            Protein: "38g",
            Carbohydrates: "52g",
            Fat: "36g",
            Fiber: "2g",
            Sodium: "680mg"
        },
        chefTips: [
            "Reserve a splash of pasta water to loosen the cream sauce if it gets too thick.",
            "Grate your own Parmesan cheese; pre-packaged cheese doesn't melt smoothly.",
            "Squeeze fresh lemon juice over the chicken to balance the rich sauce.",
            "Add sliced mushrooms or broccoli to the sauce for extra texture."
        ]
    },
    {
        title: "Garlic Butter Steak Bites",
        description: "Tender, juicy sirloin steak cubes seared to caramelized perfection and tossed in a rich garlic herb butter",
        image: "./pic/GarlicButterSteakBites.jpg",
        badgeone: "Quick",
        badgetwo: "High-Protein",
        rating: "4.9",
        reviews: "420 reviews",
        prepTime: "10 min",
        cookTime: "8 min",
        servings: "2 people",
        ingredients: [
            "400g sirloin steak, cut into 1-inch cubes",
            "3 tablespoons butter",
            "4 garlic cloves, minced",
            "1 tablespoon olive oil",
            "Fresh parsley, chopped",
            "Salt and black pepper to taste"
        ],
        instructions: [
            "Pat the steak cubes dry with paper towels and season generously with salt and pepper.",
            "Heat olive oil in a large cast-iron skillet over high heat until smoking.",
            "Add steak bites in a single layer and sear without moving for 2 minutes to get a good crust.",
            "Flip and cook for another 2 minutes, then lower heat and toss in butter, minced garlic, and parsley.",
            "Spoon the melted garlic butter over the steak bites for 1 minute, then remove from heat immediately."
        ],
        nutrition: {
            Calories: "430 kcal",
            Protein: "32g",
            Carbohydrates: "2g",
            Fat: "31g",
            Fiber: "0g",
            Sodium: "510mg"
        },
        chefTips: [
            "Make sure your skillet is ultra-hot to get a beautiful sear without overcooking the meat.",
            "Do not crowd the pan; cook in batches if your skillet is small.",
            "Let the steak cubes sit at room temperature for 15 minutes before cooking.",
            "Serve with warm garlic bread or roasted potato wedges."
        ]
    },
    {
        title: "Japanese Chicken Katsu",
        description: "Crispy, golden panko-breaded chicken cutlet drizzled with a sweet and savory Katsu sauce",
        image: "./pic/JapaneseChickenKatsu.jpg",
        badgeone: "Japanese",
        badgetwo: "Crispy",
        rating: "4.7",
        reviews: "295 reviews",
        prepTime: "15 min",
        cookTime: "10 min",
        servings: "2 people",
        ingredients: [
            "2 chicken breasts, pounded to 1/2-inch thickness",
            "1/2 cup all-purpose flour",
            "1 egg, beaten",
            "1 cup Japanese panko breadcrumbs",
            "Vegetable oil for frying",
            "Store-bought or homemade Katsu sauce"
        ],
        instructions: [
            "Season pounded chicken cutlets with salt and pepper on both sides.",
            "Dredge each cutlet in flour, dip into the beaten egg, and press firmly into the panko breadcrumbs.",
            "Heat 1 inch of vegetable oil in a skillet over medium-high heat.",
            "Fry chicken cutlets for 4-5 minutes per side until deep golden brown and crispy.",
            "Drain on a wire rack, slice into strips, and serve drizzled with Katsu sauce alongside shredded cabbage."
        ],
        nutrition: {
            Calories: "480 kcal",
            Protein: "35g",
            Carbohydrates: "28g",
            Fat: "19g",
            Fiber: "1g",
            Sodium: "640mg"
        },
        chefTips: [
            "Pounding the chicken to an even thickness ensures it cooks fully at the exact same time.",
            "Drain the fried chicken on a wire rack instead of a paper towel to keep it ultra-crispy.",
            "Use panko breadcrumbs instead of regular breadcrumbs for that signature crunch.",
            "Serve with hot Japanese steamed rice and a side of curry sauce."
        ]
    },
    {
        title: "Classic Shakshuka",
        description: "A gorgeous, comforting dish of poached eggs in a rich, spiced tomato and bell pepper sauce",
        image: "./pic/ClassicShakshuka.jpg",
        badgeone: "Middle Eastern",
        badgetwo: "One-Pan",
        rating: "4.8",
        reviews: "340 reviews",
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "3 people",
        ingredients: [
            "5 large eggs",
            "1 can (400g) diced tomatoes",
            "1 bell pepper, chopped",
            "1 onion, finely diced",
            "2 garlic cloves, minced",
            "1 teaspoon cumin and paprika",
            "Crumble of feta cheese and fresh cilantro"
        ],
        instructions: [
            "Sauté onions, bell peppers, and garlic in a skillet with olive oil until soft (5 minutes).",
            "Stir in cumin, paprika, salt, and pepper, then pour in the diced tomatoes and simmer until the sauce thickens.",
            "Use a spoon to make 5 small wells in the sauce and crack an egg into each well.",
            "Cover the skillet and cook over low heat for 5-8 minutes until the egg whites are set but yolks are still runny.",
            "Garnish with crumbled feta cheese and fresh cilantro, and serve hot directly from the pan."
        ],
        nutrition: {
            Calories: "280 kcal",
            Protein: "14g",
            Carbohydrates: "16g",
            Fat: "18g",
            Fiber: "4g",
            Sodium: "590mg"
        },
        chefTips: [
            "Use a heavy cast-iron skillet for the most even heat distribution.",
            "Don't overcook the eggs; they will continue to cook slightly from the residual heat of the sauce.",
            "Serve with plenty of warm pita or crusty sourdough bread to dip in the runny yolks.",
            "Add sliced jalapeños if you prefer a spicier kick."
        ]
    }
];

var copyOfArrayrecipes = recipes.slice();

var ingredientsList = document.getElementById("recipe-ingredients");
var instructionsList = document.getElementById("recipe-instructions");
var chefTipsList = document.getElementById("recipe-tips");
var recipeImage = document.getElementById("recipe-img");

 function displayRecipe(){
if (copyOfArrayrecipes.length === 0) {
        copyOfArrayrecipes = recipes.slice(); 
    }

var randomIndex = Math.floor(Math.random()*copyOfArrayrecipes.length);
var randomRecipe = copyOfArrayrecipes[randomIndex];

if (recipeImage) {
        recipeImage.src = randomRecipe.image;
    }

var alertcooktime = "";
var alertContainer = document.getElementById("recipe-alert-container");

var prepMinutes = parseInt(randomRecipe.prepTime); 
var cookMinutes = parseInt(randomRecipe.cookTime);
var totalTime = prepMinutes + cookMinutes;

if (totalTime > 45) {
    alertcooktime = `
    <div class="recipe-alert d-flex align-items-start gap-3 p-3 rounded-3 mb-4">
        <div class="alert-icon pt-1">
            <i class="fa-solid fa-triangle-exclamation fs-5"></i>
        </div>
        <div>
            <h6 class="alert-title mb-1 fs-6 lh-base fw-semibold">Extended Preparation & Cooking Time</h6>
            <p class="alert-text mb-0 small lh-sm">
                This recipe requires more than 45 minutes in total to prepare and cook. Plan accordingly!
            </p>
        </div>
    </div>`;
}

if (alertContainer) {
    alertContainer.innerHTML = alertcooktime;
}


document.getElementById("review-rating").innerHTML = randomRecipe.rating;
document.getElementById("reviews").innerHTML = randomRecipe.reviews;
document.getElementById("recipe-prep").innerHTML =randomRecipe.prepTime;
document.getElementById("recipe-time").innerHTML =randomRecipe.cookTime;
document.getElementById("recipe-serving").innerHTML = randomRecipe.servings;
document.getElementById("badgeone").innerHTML = randomRecipe.badgeone;
document.getElementById("badgetwo").innerHTML = randomRecipe.badgetwo;
document.getElementById("recipe-title").innerHTML = randomRecipe.title;
document.getElementById("recipe-desc").innerHTML = randomRecipe.description;
document.getElementById("cal").innerHTML = randomRecipe.nutrition.Calories;
document.getElementById("carb").innerHTML = randomRecipe.nutrition.Carbohydrates;
document.getElementById("pro").innerHTML = randomRecipe.nutrition.Protein;
document.getElementById("fat").innerHTML = randomRecipe.nutrition.Fat;
document.getElementById("fiber").innerHTML = randomRecipe.nutrition.Fiber;
document.getElementById("sodium").innerHTML = randomRecipe.nutrition.Sodium;


var ingredients = "";
    for (var i = 0; i < randomRecipe.ingredients.length; i++) {
        ingredients += `
            <li class="d-flex align-items-center gap-3">
                <span class="step-number rounded-circle d-flex align-items-center justify-content-center fw-bold">${i + 1}</span>
                <span class="ingredient-text">${randomRecipe.ingredients[i]}</span>
            </li>

        
        `;
    }
ingredientsList.innerHTML = ingredients;

var instructions = "";
    for(var i= 0; i< randomRecipe.instructions.length; i++){
        instructions +=`
        <li class="d-flex align-items-start gap-3">
          <span class="step-squircle">${i+ 1}</span>
           <p class="step-desc mb-0">${randomRecipe.instructions[i]}</p>
        </li>`
    }
instructionsList.innerHTML = instructions;

var chefTips =""
    for( var i=0; i < randomRecipe.chefTips.length; i++){
        chefTips+=`
        <div class="tip-card d-flex align-items-center gap-3 p-3 rounded-3">
        <div class="tip-icon-wrapper">
        <i class="fa-solid fa-circle-check"></i>
        </div>
        <p class="tip-text mb-0">${randomRecipe.chefTips[i]}
        </p>
        </div>
       `
    }
chefTipsList.innerHTML = chefTips;




copyOfArrayrecipes.splice(randomIndex,1)
 }


 