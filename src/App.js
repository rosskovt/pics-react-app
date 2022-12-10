import { useState } from "react";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
    const [imageResult, setImageResult] = useState([]);

    const handleSubmit = async (term) => {
        console.log('make a search with + ', term);
        const result = await searchImages(term);
        setImageResult(result);
    }
    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={imageResult} />
        </div>

    )
}

export default App;