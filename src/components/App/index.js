import React, { useState, useEffect} from 'react';
// Pour plus tart : 
//import { Route, Switch, Redirect} from 'react-router-dom';
//import axios from 'axios';


import Header from 'src/components/Header';
import CustomButton from 'src/components/CustomButton';
import List from 'src/components/List';
import Content from 'src/components/Content';

import './styles.css';

// import des données en attendant de récupérer ceux de la base de données Symfony
import exercices from 'src/data/exercices';
import categories from 'src/data/categories';


const App = () => {


  // Les states
    const [open, setOpen] = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    const [exercicesList, setExercicesList] = useState(exercices);
    const [exerciceName, setExerciceName] = useState('push-up');
    const [category, setCategory] = useState('Toutes les catégories');
    const [exercice, setExercice] = useState([{ 
          name : "push-up",
          image : 'https://cdn.pixabay.com/photo/2020/03/12/13/33/press-up-4925111__340.jpg',
          description : 'Inspirer et fléchir les bras en gardant le corps droit puis amener la cage thoracique le plus près possible du sol et tendre complètement les bras en expirant',
          category : 'bras et dos'
    }]);
   // const [loadingCategories, setLoadingCategories] = useState(true);
   // const [loadingExercicesList, setLoadingExercicesList] = useState(true);

   /*

   => Essai de code avec une API mais celle - ci a cessé de fonctionner !

    const loadExercicesList = () => {
      axios.get('https://bridge.buddyweb.fr/api/pumpitapp/exercices')
        .then((response) => {
          setExercicesList(reponse.data);
        })

        .catch((error) => {
          console.log('échec au chargement des exercices');
        })

        .finally(() => {
          setLoadingExercicesList(false);
        })
    };

    const loadCategories = () => {
      axios.get('https://bridge.buddyweb.fr/api/pumpitapp/muscle')
        .then((response) => {
          setCategories(reponse.data);
        })

        .catch((error) => {
          console.log('échec au chargement des catégories');
        })

        .finally(() => {
          setLoadingCategories(false);
        })
    };

    useEffect(() => {
      loadingCategories();
      loadingExercicesList();
    }, []);
    */

  // Fonction de retour qui permet ou non l'affichage des exercices quand on clique sur le bouton
  const handleClick = (open) => {
     setOpen(!open);
  };

  // Fonction qui renvoie les données correspondant à l'exercice quand on clique sur le nom de celui-ci dans la liste
  const handleClickOnExercice = (exerciceName) => {
    let currentExercice = exercicesList.filter(exercice => exercice.name === exerciceName);
    setExercice(currentExercice);
    return exercice;
  };

  // Fonction qui renvoie la liste d'exercices correspondant à la catégorie choisi dans le select
  const handleClickSelect = (category) => {

    if(category !== "Toutes les catégories") {
    exercicesList = exercicesList.filter(exercice => exercice.category === category);
    setExercicesList(exercicesList);
    
    return exercicesList;
    }
    setExercicesList(exercices);

    return exercicesList;
  };

  // Fonction de recherche d'un exercice par son nom
  const searchExercice = (inputSearch) => {
    if (inputSearch.length > 0) {
      exercicesList = exercicesList.filter((exercice) => {
        const loweredInputSearch = inputSearch.toLowerCase();
        const loweredExercice = exercice.name.toLowerCase();

        return loweredExercice.includes(loweredInputSearch);
      });
    }
  };

  // Fonction qui appelle d'autres fonctions en fonction du contexte (select ou barre de recherche)
  const currentExercicesList = (inputSearch, category) => {
     
    if (inputSearch.length > 0)
    {
      searchExercice(inputSearch);
    } 
     
    handleClickSelect(category);
  };


    return (
      <div className="app">
        <Header />
        <CustomButton open={open} handleClick={handleClick} />
        {open && (
              <List 
              exercices={currentExercicesList(inputSearch, category)}
              categories={categories}
              setCategory={setCategory}
              setExerciceName={setExerciceName}
              search={inputSearch}
              setInputSearch={setInputSearch}
              currentCategory={category}
              />
            )}
        <Content 
       currentExercice={handleClickOnExercice(category)}
        />
    </div>

    );
  };

// Export
export default App;
