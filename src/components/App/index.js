// == Import npm
import React, { useState, useEffect} from 'react';
//import { Route, Switch, Redirect} from 'react-router-dom';
//import axios from 'axios';

// == Import
import Header from 'src/components/Header';
import CustomButton from 'src/components/CustomButton';
import List from 'src/components/List';
import Content from 'src/components/Content';

import './styles.css';

import exercices from 'src/data/exercices';
import categories from 'src/data/categories';


const App = () => {
 
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

  const handleClick = (open) => {
     setOpen(!open);
  };


  const handleClickOnExercice = (exerciceName, exercicesList) => {
    let currentExercice = exercicesList.filter(exercice => exercice.name === exerciceName);
    setExercice(currentExercice);
    return exercice;
  };

  const handleClickSelect = (category) => {

    if(category !== "Toutes les catégories") {
    exercicesList = exercicesList.filter(exercice => exercice.category === category);
    setExercicesList(exercicesList);
    
    return exercicesList;
    }
    setExercicesList(exercices);

    return exercicesList;
  };


  const searchExercice = (inputSearch) => {
    if (inputSearch.length > 1) {
      exercicesList = exercicesList.filter((exercice) => {
        const loweredInputSearch = inputSearch.toLowerCase();
        const loweredExercice = exercice.name.toLowerCase();

        return loweredExercice.includes(loweredInputSearch);
      });
      setExercicesList(exercices);

      return exercicesList;
    }
  };

  const currentExercicesList = (inputSearch, category) => {
     
    if (inputSearch.length > 1)
    {
      searchExercice(inputSearch);

      return exercicesList;
    } 
     
    handleClickSelect(category);

     return exercicesList;
  };


    return (
      <div className="app">
        <Header />
        <CustomButton open={open}  handleClick={handleClick} />
        {open && (
              <List 
              exercices={inputSearch.length > 0 ? (
                exercicesList.filter(exercice => exercice.name.includes(inputSearch))
                ) : ((category !== "Toutes les catégories" ? exercicesList.filter(exercice => exercice.category === category) : exercices))
              }
              categories={categories}
              handleCategory={setCategory}
              handleExerciceName={setExerciceName}
              search={inputSearch}
              handleInputSearch={setInputSearch}
              currentCategory={category}
              />
            )}
        <Content 
       currentExercice={inputSearch.length > 0 ? (
        exercicesList.filter(exercice => exercice.name.includes(inputSearch))
        ) : ( exercicesList.filter(exercice => exercice.name === exerciceName))}
        />
    </div>

    );
  };
// == Export
export default App;
