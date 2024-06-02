import { useEffect, useState } from "react";
import { dbFirestore } from "../config/firebase-config";
import { getDocs, collection } from "firebase/firestore";

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const movieCollectionRef = collection(dbFirestore, "movie");

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

  return (
    <>
      <div className=" text-slate-100 flex w-full items-center  justify-between  px-14 p-2">
        <h1 className="  font-bold text-lg">Movie List</h1>
        <button className=" py-1 px-2 rounded-lg bg-sky-500 text-sky-950 duration-200 hover:bg-sky-300">
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
