import { useEffect, useState } from "react";
import { dbFirestore } from "../config/firebase-config";
import { getDocs, collection, addDoc } from "firebase/firestore";

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const movieCollectionRef = collection(dbFirestore, "movie");
  const [addMovieModal, setAddMovieModal] = useState(Boolean(true));

  const openAddMovie = () => {
    setAddMovieModal(!addMovieModal);
  };

  useEffect(() => {
    const escKey = (event) => {
      if (event.key === "Escape") {
        setAddMovieModal(false);
      }
    };

    if (addMovieModal) {
      window.addEventListener("keydown", escKey);
    }

    return () => {
      window.removeEventListener("keydown", escKey);
    };
  }),
    [addMovieModal];

  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieGenre, setNewMovieGenre] = useState("");
  const [newMovieReleaseDate, setNewReleaseDate] = useState("");
  const [newMovieIsOscar, setNewMovieIsOscar] = useState(false);

  //read data from firestore
  const getMovieList = async () => {
    //set the movie list
    try {
      const data = await getDocs(movieCollectionRef);
      //get only the needed data from firebase
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    //calling the async getmovielist
    getMovieList();
  }),
    [];

  const submitNewMovie = async () => {
    try {
      await addDoc(movieCollectionRef, {
        title: newMovieTitle,
        genre: newMovieGenre,
        releaseDate: newMovieReleaseDate,
        hasAnOscarAward: newMovieIsOscar,
      });

      getMovieList();
      setAddMovieModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {addMovieModal && (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-sky-900 bg-opacity-20 backdrop-blur-lg z-20">
          <div className="p-4 rounded-lg text-slate-50 bg-sky-800 max-w-full max-h-full overflow-auto">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) => setNewMovieTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Movie title"
                required=""
              ></input>
            </div>
            <div className=" mt-2">
              <label
                htmlFor="genre"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Genre
              </label>
              <input
                type="text"
                name="genre"
                id="genre"
                onChange={(e) => setNewMovieGenre(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Horror"
                required=""
              ></input>
            </div>
            <div className=" mt-2">
              <label
                htmlFor="release-date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Release Date
              </label>
              <input
                type="number"
                name="release-date"
                id="release-date"
                min="0000"
                max="2026"
                onChange={(e) => setNewReleaseDate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="YYYY"
                required=""
              ></input>
            </div>
            <div className=" mt-2 w-full flex items-center gap-2 justify-start">
              <input
                id="oscard"
                type="checkbox"
                value={newMovieIsOscar}
                onChange={(e) => setNewMovieIsOscar(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              <label
                htmlFor="oscard"
                className="block  text-sm font-medium text-gray-900 dark:text-white"
              >
                Has an Oscar award?
              </label>
            </div>
            <button
              onClick={submitNewMovie}
              className=" mt-2  bg-sky-500 w-full px-2 py-2 rounded-lg font-bold"
            >
              Add
            </button>
          </div>
        </div>
      )}
      <div className=" text-slate-100 flex w-full items-center  justify-between  px-14 p-2">
        <h1 className="  font-bold text-lg">Movie List</h1>
        <button
          onClick={openAddMovie}
          className=" py-1 px-2 rounded-lg bg-sky-500 text-sky-950 duration-200 hover:bg-sky-300"
        >
          Add new
        </button>
      </div>
      <div className=" text-slate-50">
        {movieList.map((movie) => (
          <div
            key={movie.id}
            className=" drop-shadow-md min-w-[80%] bg-slate-700 p-3 rounded-lg mb-2"
          >
            <h1 className=" font-bold text-2xl">{movie.title}</h1>
            <span className=" mr-2">{movie.genre}</span>
            <span>{movie.releaseDate}</span>
          </div>
        ))}
      </div>
    </>
  );
};
