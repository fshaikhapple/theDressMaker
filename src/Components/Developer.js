


import React, { memo, useState } from "react";
import { compose } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import { getFirestore } from 'redux-firestore'


const Developer = (props) => {
    const [IGTOKEN, setToken] = useState('')
    const [allPosts, setallPosts] = useState([])
    const [message, setmessage] = useState('')
    const dispatch = useDispatch();
    const posts = useSelector(state => state.productsReducer.products) || []
    const firestore = getFirestore();
    const firebaseStore = useSelector(state => state?.firestore?.data?.tdmPosts?.A0OPoskeSYMah4lUbdbI?.mockDataPosts) || []

    const searchApi = () => {
        var myHeaders = new Headers();
        // myHeaders.append("Cookie", "ig_did=2341E631-834A-484B-8A4B-BC05CF4BDEB4; csrftoken=5S3lHh8ShitQqeDyqKAPoP0Not7Qyb7N; mid=X8ZjegAEAAHYbaLMWnBfYeG6aTNO; ig_nrcb=1");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://www.instagram.com/web/search/topsearch/?context=blended&query=faizan_as_u_kw&include_reel=false", requestOptions)
            .then(response => response.text())
            .then(result => console.log("search result ", result))
            .catch(error => console.log('error', error));
    }

    const getallPostsWithToken = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Cookie", "ig_did=2341E631-834A-484B-8A4B-BC05CF4BDEB4; csrftoken=5S3lHh8ShitQqeDyqKAPoP0Not7Qyb7N; mid=X8ZjegAEAAHYbaLMWnBfYeG6aTNO; ig_nrcb=1");
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        let allApiDataCollective = []
        // const IGTOKEN = 'IGQVJVQWFNMW82ZAUlydldld21XWEJ0T0tCcUJYcVYxbXZAjUjRnWUVObV9KVkNhQzN3WmZAHY2RRTXkxMDZANY25Na2RLNEhRZA3VLV2d3Y3M2WHlPb0gtRnlQelAyYW5qaFAzLXY5ZAGpTaEJ2TzV0NnZA0YgZDZD'
        fetch(`https://graph.instagram.com/17841411232674370/media?fields=id,caption,media_url,media_type,permalink,thumbnail_url,timestamp,username,children&access_token=${IGTOKEN}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("page 1 result", result.data)
                allApiDataCollective = result.data
                console.log("paging", result.paging.next)
                if (result?.paging?.next) {
                    fetch(result.paging.next, requestOptions)
                        .then(response => response.json())
                        .then(result => {
                            console.log("page 2 result", result.data)
                            allApiDataCollective = [...allApiDataCollective, ...result.data]
                            if (result?.paging?.next) {
                                fetch(result.paging.next, requestOptions)
                                    .then(response => response.json())
                                    .then(result => {
                                        console.log("page 3 result", result.data)
                                        allApiDataCollective = [...allApiDataCollective, ...result.data]
                                        if (result?.paging?.next) {
                                            fetch(result.paging.next, requestOptions)
                                                .then(response => response.json())
                                                .then(result => {
                                                    console.log("page 4 result", result.data)
                                                    allApiDataCollective = [...allApiDataCollective, ...result.data]
                                                    if (result?.paging?.next) {
                                                        fetch(result.paging.next, requestOptions)
                                                            .then(response => response.json())
                                                            .then(result => {
                                                                console.log("page 5 result", result.data)
                                                                allApiDataCollective = [...allApiDataCollective, ...result.data]
                                                                setallPosts(allApiDataCollective) // imp
                                                                dispatch({ type: 'FRESH_DATA', allPosts: allApiDataCollective });

                                                            })
                                                    }
                                                })
                                        }
                                    })
                            }
                        })
                }
            })
            .catch(error => console.log('error', error));
    }

    const pushInFirebase = () => {
        const updatedPosts = posts.filter(i => !i.price)
        updatedPosts.map(i => {
            i.storeVisibility = true;
            i.isOutOfStock = false;
            i.price = 2000;
        })
        firestore.collection("tdmPosts").doc("A0OPoskeSYMah4lUbdbI").set({
            allPosts: updatedPosts
        })
            .then(() => {
                console.log("Document successfully written!");
                setmessage('Successfully pushed check store')
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }
    const filterData = () => {
        console.log("posts", posts);

    }

    return (
        <>
            <div className="hero-wrap hero-bread pb-5" style={{ backgroundImage: `url("./images/bg_6.jpeg")` }}>
                <div className="container p-4">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <h1 className="mb-0 bread">developer</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-12'>
                            <input type="text" id='IGtoken' className="form-control" placeholder="Token" onChange={e => setToken(e.target.value)} />
                            <button className=" btn btn-primary py-3 px-4" onClick={getallPostsWithToken}>Get all posts with token</button>
                            <p>{`fetched post Count ${allPosts.length}`}</p>
                        </div>
                        <button className=" btn btn-primary py-3 px-4" onClick={pushInFirebase}>Push in cloud</button>
                    </div>

                </div>
                {/* <button className=" btn btn-primary py-3 px-4" onClick={filterData}>filterData</button> */}
                <p>{message}</p>
                <button className=" btn btn-primary py-3 px-4" onClick={searchApi}>searchApi</button>                
            </section >

        </>
    )
}

export default memo(Developer)
