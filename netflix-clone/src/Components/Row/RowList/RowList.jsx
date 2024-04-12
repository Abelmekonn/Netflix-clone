import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/request'
const RowList = () => {
    return (
        <div>
            <Row title="NETFLIX ORIGINAL"
                fetchUrl={requests.fetchNetflixOriginals} 
                isLargeRow={true}
            />
            <Row title="Trending" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Romance"  fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Horror"  fetchUrl={requests.fetchHorrorMovies} />
            <Row title="TvShow" fetchUrl={requests.fetchTvShow} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default RowList
