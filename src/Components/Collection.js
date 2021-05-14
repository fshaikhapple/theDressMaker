import React from "react";
import ReactDOM from "react-dom";
// import {  } from "react-redux";
// import  * as us  from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom";
import { top100data } from "../topPosts";
import { useFirebaseConnect } from 'react-redux-firebase'
// import { useSelector } from "react-redux";
// const images = top100data.map(i => i.media_url)
// function uniq(a) {
//     return Array.from(new Set(a));
// }


let result = [];
const map = new Map();
for (const item of top100data) {
    if (!map.has(item.id)) {
        map.set(item.id, true);    // set any value to Map
        result.push({
            id: item.id,
            media_url: item.media_url
        });
    }
}
// console.log(result)
result = result.splice(0, 5);

export const Collection = (props) => {
    // console.log("useSelector",useSelector());
    // const statt = useSelector(state => state)

    // useFirebaseConnect([
    //     { path: `tdmPosts/` } // create todo listener
    //     // `todos/${props.params.todoId}` // equivalent string notation
    //   ])

    // console.log("statt", statt.firebaseReducer.data);

    const posts = []
    // console.log("posts",posts);
    return (
        <div>
            <div className="hero-wrap hero-bread pb-5" style={{ backgroundImage: `url("./images/bg_6.jpeg")` }}>
                <div className="container p-4">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <h1 className="mb-0 bread">Collection</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 sidebar ftco-animate fadeInUp ftco-animated">
                <div className="sidebar-box">
                    <form action="#" className="search-form">
                        <div className="form-group">
                            <span className="icon fa fa-search"></span>
                            <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                        </div>
                    </form>
                </div>
                <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                    <div className="categories">
                        <h3>Categories</h3>
                        <li><a href="#">Bags <span>(12)</span></a></li>
                        <li><a href="#">Shoes <span>(22)</span></a></li>
                        <li><a href="#">Dress <span>(37)</span></a></li>
                        <li><a href="#">Accessories <span>(42)</span></a></li>
                        <li><a href="#">Makeup <span>(14)</span></a></li>
                        <li><a href="#">Beauty <span>(140)</span></a></li>
                    </div>
                </div>
                {/* <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                    <h3>Recent Blog</h3>
                    <div className="block-21 mb-4 d-flex">
                        <a className="blog-img mr-4"
                        //  style="background-image: url(images/image_1.jpg);"
                        ></a>
                        <div className="text">
                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <div className="meta">
                                <div><a href="#"><span className="icon-calendar"></span> July 12, 2018</a></div>
                                <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="block-21 mb-4 d-flex">
                        <a className="blog-img mr-4"
                        // style="background-image: url(images/image_2.jpg);"
                        ></a>
                        <div className="text">
                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <div className="meta">
                                <div><a href="#"><span className="icon-calendar"></span> July 12, 2018</a></div>
                                <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="block-21 mb-4 d-flex">
                        <a className="blog-img mr-4"
                        // style="background-image: url(images/image_3.jpg);"
                        ></a>
                        <div className="text">
                            <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <div className="meta">
                                <div><a href="#"><span className="icon-calendar"></span> July 12, 2018</a></div>
                                <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                    <h3>Tag Cloud</h3>
                    <div className="tagcloud">
                        <a href="#" className="tag-cloud-link">dish</a>
                        <a href="#" className="tag-cloud-link">menu</a>
                        <a href="#" className="tag-cloud-link">food</a>
                        <a href="#" className="tag-cloud-link">sweet</a>
                        <a href="#" className="tag-cloud-link">tasty</a>
                        <a href="#" className="tag-cloud-link">delicious</a>
                        <a href="#" className="tag-cloud-link">desserts</a>
                        <a href="#" className="tag-cloud-link">drinks</a>
                    </div>
                </div>
                <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                    <h3>Paragraph</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    {posts && posts.map((item, i) => {
                        return <div className="col-sm col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
                            <div className="product">
                                <a href="#" className="img-prod">
                                    <span className="status">New Arrival</span>
                                </a>
                                <div className="text py-3 px-3">
                                    <Link to={`/Singleproduct/${item.id}`}>
                                        <a className="img-prod">
                                            <img className="img-fluid" src={item.media_url} alt="Colorlib Template" />
                                        </a>
                                    </Link>
                                    <h3><a href="#">Young Woman Wearing Dress</a></h3>
                                    <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price"><span>$120.00</span></p>
                                        </div>
                                        <div className="rating">
                                            <p className="text-right">
                                                <span className="ion-ios-star"></span>
                                                <span className="ion-ios-star"></span>
                                                <span className="ion-ios-star"></span>
                                                <span className="ion-ios-star-half"></span>
                                                <span className="ion-ios-star-outline"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <p className="bottom-area d-flex justify-content-center">
                                        <a href="#" className="add-to-cart">
                                            <span> WishList <i className="ion-ios-heart-empty ml-1"></i></span>
                                        </a>
                                        {/* <a href="#" className="ml-auto">
                                            <span><i className="ion-ios-heart-empty"></i></span>
                                        </a> */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <div className="block-27">
                            <ul>
                                <li><a href="#">&lt;</a></li>
                                <li className="active"><span>1</span></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">&gt;</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


