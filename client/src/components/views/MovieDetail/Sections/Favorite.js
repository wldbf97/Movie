import React, { useEffect } from 'react'
import Axios from 'axios'

function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePst = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    useEffect(()=> {
        
        let variables ={
            userFrom,
            movieId
        }

        // 서버부분에다가 Axios를 이용해서 요청을 보냄
        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response=> {
                console.log(response.data)
                
                if(response.data.success){

                }else{
                    alert('숫자 정보를 가져오는데 실패 했습니다.')
                }
            })


    }, [])


    return (
        <div>
            <button>Favorite</button>
        </div>
    )
}

export default Favorite